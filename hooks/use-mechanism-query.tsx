"use client";

import { Mechanism } from "@/types/mechanism";
import { MechanismCategory } from "@/types/mechanism-category";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

let cachedData: Mechanism[] | null = null;

async function fetchSiteData(): Promise<Mechanism[]> {
  if (cachedData) return cachedData;
  const res = await fetch("/data/site-data.json");
  const json = await res.json();
  cachedData = json.mechanisms as Mechanism[];
  return cachedData;
}

export default function useMechanismQuery() {
  const urlSearchParams = useSearchParams()!;
  const [allMechanisms, setAllMechanisms] = useState<Mechanism[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    fetchSiteData()
      .then((data) => {
        setAllMechanisms(data);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  const mechanisms = useMemo(() => {
    const search = urlSearchParams.get("search")?.toLowerCase() || "";
    const categories = urlSearchParams.getAll("category") as MechanismCategory[];

    return allMechanisms.filter((m) => {
      if (categories.length > 0) {
        const allCats = [m.category, ...(m.secondaryCategories || [])];
        if (!categories.some((c) => allCats.includes(c))) return false;
      }
      if (search) {
        const haystack = `${m.name} ${m.description} ${m.alternativeNames.join(" ")}`.toLowerCase();
        if (!haystack.includes(search)) return false;
      }
      return true;
    });
  }, [allMechanisms, urlSearchParams]);

  return { mechanisms, status };
}
