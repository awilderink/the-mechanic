export type Social = {
	label: string;
	href: string;
	icon: 'linkedIn' | 'facebook' | 'instagram';
};

export const socials: Social[] = [
	{
		label: 'The Mechanic op Facebook',
		href: 'https://www.facebook.com/p/The-Mechanic-Passie-voor-autos-100057319155502/',
		icon: 'facebook',
	},
	{
		label: 'The Mechanic op Instagram',
		href: 'https://www.instagram.com/the_mechanic.nl/',
		icon: 'instagram',
	},
];
