import { Mechanism } from "@/types/mechanism";
import { MechanismCategory } from "@/types/mechanism-category";
import { createFilterFormula } from "@/utils/filter-formulas";
import { AirtableMechanism } from "@/types/airtable-mechanism";
import { parseAirtableMechanism } from "@/utils/parse-airtable-mechanism";

type Response = {
  records: AirtableMechanism[];
  offset?: string;
};

export async function searchMechanisms(params?: {
  categories: MechanismCategory[];
  searchTerm: string | null;
  offset: string | null;
}) {
  const filterFormula = createFilterFormula({
    searchTerm: params?.searchTerm,
    categories: params?.categories,
  });

  const searchParams = new URLSearchParams({
    pageSize: "16",
    view: "Approved",
    filterByFormula: filterFormula,
    ...(params?.offset ? { offset: params.offset } : {}),
  });

  const request = await fetch(
    `https://api.airtable.com/v0/appocudTAOitQmuud/mechanisms?${searchParams.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
      },
    },
  );

  if (!request.ok) {
    throw new Error(JSON.stringify(await request.json(), null, 2));
  }

  const { records, offset } = (await request.json()) as Response;

  return {
    mechanisms: records.map(parseAirtableMechanism).filter(Boolean) as Mechanism[],
    offset,
  };
}
