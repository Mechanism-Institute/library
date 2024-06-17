import { MechanismCategory } from "@/types/mechanism-category";

export const CATEGORIES = [
  "fundraising",
  "value-capture",
  "value-distribution",
  "trading",
  "governance",
  "data",
] as const;

export const CATEGORY_LABELS: Record<MechanismCategory, string> = {
  "value-capture": "Value Capture",
  "trading": "Trading",
  "value-distribution": "Value Distribution",
  fundraising: "Fundraising",
  governance: "Governance",
  data: "Data",
};

export const CATEGORIES_BACKGROUNDS: Record<MechanismCategory, string> = {
  "value-capture": "bg-orange",
  "trading": "bg-purple",
  "value-distribution": "bg-yellow",
  fundraising: "bg-green",
  governance: "bg-brown",
  data: "bg-pink",
};
