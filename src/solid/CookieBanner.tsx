import { createSignal, type JSX, onCleanup, onMount, Show } from 'solid-js';

const PREFERENCES_OPEN = 'cookie-preferences:open';

/** Cookie consent bar. Hidden until mount confirms no stored consent. */
export default function CookieBanner(): JSX.Element {
	const [show, setShow] = createSignal(false);
	const [entered, setEntered] = createSignal(false);

	const open = () => {
		setShow(true);
		requestAnimationFrame(() => setEntered(true));
	};

	onMount(() => {
		document.addEventListener(PREFERENCES_OPEN, open);
		onCleanup(() => document.removeEventListener(PREFERENCES_OPEN, open));
		if (localStorage.getItem('cookieConsent')) return;
		open();
	});

	const consent = (value: 'all' | 'necessary') => {
		localStorage.setItem('cookieConsent', value);
		setShow(false);
		setEntered(false);
	};

	return (
		<Show when={show()}>
			<div
				class="fixed right-0 bottom-0 left-0 z-50 border-gray-200 border-t bg-white shadow-lg transition-all duration-300 ease-out"
				classList={{
					'opacity-100 translate-y-0': entered(),
					'opacity-0 translate-y-full': !entered(),
				}}
			>
				<div class="container mx-auto max-w-6xl p-4">
					<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div class="flex-1">
							<h3 class="mb-2 font-semibold text-lg text-primary">
								Wij gebruiken cookies
							</h3>
							<p class="text-gray-600 text-sm leading-relaxed">
								Wij gebruiken cookies om uw ervaring op onze website te
								verbeteren, verkeer te analyseren en gepersonaliseerde content
								te bieden. Door op "Alles accepteren" te klikken, stemt u in met
								het gebruik van alle cookies. U kunt ook kiezen voor alleen
								noodzakelijke cookies.
							</p>
						</div>
						<div class="flex flex-col gap-2 sm:flex-row sm:gap-3">
							<button
								type="button"
								onClick={() => consent('necessary')}
								class="rounded-full border border-primary px-6 py-3 font-medium text-primary text-sm transition-all duration-200 hover:bg-primary hover:text-white"
							>
								Alleen noodzakelijk
							</button>
							<button
								type="button"
								onClick={() => consent('all')}
								class="cursor-pointer rounded-full bg-tertiary px-8 py-4 font-neutral text-md text-sm text-white transition-transform duration-200 hover:translate-y-[-1px] hover:bg-tertiary/90 active:translate-y-0"
							>
								Alles accepteren
							</button>
						</div>
					</div>
				</div>
			</div>
		</Show>
	);
}
