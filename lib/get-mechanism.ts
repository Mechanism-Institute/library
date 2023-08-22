import { parseAirtableMechanism, slugify } from "@/utils/parse-airtable-mechanism";
import { AirtableMechanism } from "@/types/airtable-mechanism";
import { MECHANISMS_TABLE_ID } from "@/config/table-names";

export async function getMechanism(slug: string) {
  const request = await fetch(
    `https://api.airtable.com/v0/appocudTAOitQmuud/${MECHANISMS_TABLE_ID}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
      },
    },
  );

  if (!request.ok) {
    if (request.status === 404) {
      return null;
    }

    throw new Error(JSON.stringify(await request.json(), null, 2));
  }

  const responses = (await request.json());

  const mechanism = responses.records.find((response: any) => slugify(response.fields.Name) === slug) as AirtableMechanism;

  return parseAirtableMechanism(mechanism);

}
