import type { APIRoute } from "astro";
import { supabase } from "../../supabase";
import type { AutoTelexRequestBody } from "./types";

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
			case "change": {
				const { error } = await supabase.from("voorraad").upsert(telexData);
				if (error) throw error;
				break;
			}
			case "delete": {
				const { error } = await supabase
					.from("voorraad")
					.update({ verkocht: "j" })
					.match({ voertuignr_hexon: telexData.voertuignr_hexon });
				if (error) throw error;
				break;
			}
		}
	} catch (error) {
		console.log(error);
		return new Response(String(error), { status: 500 });
	}

	return new Response("1");
};
