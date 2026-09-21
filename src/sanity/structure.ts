import type { StructureResolver } from 'sanity/structure';

const voorraadList = (
	S: Parameters<StructureResolver>[0],
	title: string,
	filter: string,
) =>
	S.listItem()
		.title(title)
		.child(
			S.documentList()
				.title(title)
				.schemaType('voorraad')
				.filter(`_type == "voorraad" && ${filter}`)
				.defaultOrdering([{ field: '_updatedAt', direction: 'desc' }]),
		);

export const structure: StructureResolver = (S) =>
	S.list()
		.title('Inhoud')
		.items([
			S.documentTypeListItem('home').title('Homepage'),
			S.documentTypeListItem('page').title("Pagina's"),
			S.divider(),
			S.listItem()
				.title('Voorraad')
				.child(
					S.list()
						.title('Voorraad')
						.items([
							voorraadList(S, 'Te koop', 'verkocht != true'),
							voorraadList(
								S,
								'Uitgelicht',
								'uitgelicht == true && verkocht != true',
							),
							voorraadList(S, 'Verkocht', 'verkocht == true'),
							S.divider(),
							S.documentTypeListItem('voorraad').title("Alle auto's"),
						]),
				),
			S.documentTypeListItem('merk').title('Merken'),
			S.divider(),
			S.documentTypeListItem('teamMember').title('Team'),
			S.documentTypeListItem('global').title('Instellingen'),
		]);
