import { existsSync, readFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';
import { getPage, getVoorraadItem } from '../../sanity';

// Merkkaart voor social previews: /og/werkplaats/apk.png, /og/index.png, enz.
// De titel komt uit de CMS, zodat een nieuwe pagina direct een eigen kaart heeft.
//
// ponytail: assets worden vanaf de projectroot gelezen - 'public' in dev,
// 'dist/client' na een build. Draai de server dus vanaf de projectroot
// (zoals `pnpm start` doet).
const asset = (file: string) => {
	const found = [`public/${file}`, `dist/client/${file}`].find((path) => existsSync(path));
	if (!found) throw new Error(`OG-asset ontbreekt: ${file}`);
	return found;
};

const emblem = readFileSync(asset('logo_emblem.svg'), 'utf8')
	.replace(/<\?xml[^>]*\?>/, '')
	.replace(/<!DOCTYPE[^>]*>/, '')
	.trim()
	.replace(/^<svg /, '<svg x="72" y="56" width="300" height="151" ');

const fontFiles = [asset('fonts/poppins-500.ttf'), asset('fonts/poppins-300.ttf')];

const escapeXml = (value: string) =>
	value.replace(
		/[&<>"']/g,
		(char) =>
			({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char] ?? char,
	);

// ponytail: regelafbreking op tekenaantal, geen echte tekstmeting. Poppins is
// hier ~0.55em breed per teken; wissel naar satori als titels echt lang worden.
const wrap = (text: string, maxChars: number) => {
	const lines: string[] = [];
	let line = '';
	for (const word of text.split(/\s+/)) {
		if (line && `${line} ${word}`.length > maxChars) {
			lines.push(line);
			line = word;
		} else {
			line = line ? `${line} ${word}` : word;
		}
	}
	if (line) lines.push(line);
	return lines.slice(0, 3);
};

export const GET: APIRoute = async ({ params }) => {
	const slug = (params.path ?? '').replace(/\.png$/, '').replace(/^index$/, '');

	const voorraadSlug = slug.startsWith('voorraad/') ? slug.slice('voorraad/'.length) : null;
	const document = voorraadSlug
		? await getVoorraadItem(voorraadSlug)
		: slug
			? await getPage(slug)
			: null;

	const title = document
		? 'titel' in document
			? `${document.merk?.naam ?? ''} ${document.titel ?? ''}`.trim()
			: (document.title ?? '')
		: slug === 'voorraad'
			? 'Voorraad'
			: '';

	const fontSize = title.length > 26 ? 62 : title.length > 16 ? 78 : 96;
	const lines = wrap(title, Math.floor(1056 / (fontSize * 0.55)));
	const firstBaseline = 470 - (lines.length - 1) * fontSize * 1.1;

	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
	<rect width="1200" height="630" fill="#1f1f1f"/>
	${emblem}
	${lines
		.map(
			(line, index) =>
				`<text x="72" y="${firstBaseline + index * fontSize * 1.1}" font-family="Poppins" font-weight="500" font-size="${fontSize}" fill="#edede6">${escapeXml(line)}</text>`,
		)
		.join('\n\t')}
	<text x="72" y="552" font-family="Poppins" font-weight="300" font-size="28" letter-spacing="4.5" fill="#99b5bb">GARAGE &amp; OCCASIONS &#183; VOORBURG</text>
	<rect y="620" width="1200" height="10" fill="#ff9900"/>
</svg>`;

	const png = new Resvg(svg, {
		fitTo: { mode: 'width', value: 1200 },
		font: {
			fontFiles,
			loadSystemFonts: false,
			defaultFontFamily: 'Poppins',
		},
	})
		.render()
		.asPng();

	return new Response(new Uint8Array(png), {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=3600, s-maxage=86400',
		},
	});
};
