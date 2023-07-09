import { parseAirtableMechanism } from "@/utils/parse-airtable-mechanism";
import { AirtableMechanism } from "@/types/airtable-mechanism";

export async function getMechanism(id: string) {
  const request = await fetch(`https://api.airtable.com/v0/appocudTAOitQmuud/mechanisms/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
    },
  });

  if (!request.ok) {
    if (request.status === 404) {
      return null;
    }

    throw new Error(JSON.stringify(await request.json(), null, 2));
  }

  const response = (await request.json()) as AirtableMechanism;

  return parseAirtableMechanism(response);
}
