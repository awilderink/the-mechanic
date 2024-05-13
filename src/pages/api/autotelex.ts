import type { APIRoute } from "astro";
import type { AutoTelexRequestBody } from "./types";

import { Voorraad, db, eq } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
	try {
		const data = await request.formData();
		const {
			actie,
			versie: _,
			...telexData
		} = Object.fromEntries(data.entries()) as unknown as AutoTelexRequestBody;

		switch (actie) {
			case "add":
				await db
					.insert(Voorraad)
					.values(telexData)
					.onConflictDoUpdate({
						set: telexData,
						target: [Voorraad.voertuignr_hexon],
					});
				break;
			case "change":
				await db
					.update(Voorraad)
					.set(telexData)
					.where(eq(Voorraad.voertuignr_hexon, telexData.voertuignr_hexon));
				break;
			case "delete":
				db.update(Voorraad)
					.set({ verkocht: "j" })
					.where(eq(Voorraad.voertuignr_hexon, telexData.voertuignr_hexon));
				break;
		}
	} catch (error) {
		console.log(error);
		return new Response(String(error), { status: 500 });
	}

	if (import.meta.env.PROD) {
		fetch(
			"https://api.vercel.com/v1/integrations/deploy/prj_aezHxaF7AQ195sJqhzuOnsxu5A0m/kKob5zsF4H",
			{ method: "POST" },
		);
	}

	return new Response("1");
};
