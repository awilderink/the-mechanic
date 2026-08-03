/** A Sanity image already resolved to a URL by `urlFor()` on the server. */
export type Img = {
	src: string;
	alt: string;
	/** Set on both to reserve layout space and avoid CLS. */
	width: number;
	height: number;
};
