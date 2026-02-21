import { MechanismCategory } from "@/types/mechanism-category";

export const CATEGORIES = [
  "fundraising",
  "allocation",
  "value-capture",
  "governance",
  "rewards-and-penalties",
  "exchange",
  "data",
] as const;

export const CATEGORY_LABELS: Record<MechanismCategory, string> = {
  "fundraising": "Fundraising",
  "allocation": "Allocation",
  "value-capture": "Value Capture",
  "governance": "Governance",
  "rewards-and-penalties": "Rewards and Penalties",
  "exchange": "Exchange",
  "data": "Data",
};

export const CATEGORIES_BACKGROUNDS: Record<MechanismCategory, string> = {
  "fundraising": "bg-green",
  "allocation": "bg-yellow",
  "value-capture": "bg-orange",
  "governance": "bg-brown",
  "rewards-and-penalties": "bg-teal",
  "exchange": "bg-purple",
  "data": "bg-pink",
};

export const CATEGORY_DESCRIPTIONS: Record<MechanismCategory, string> = {
  "fundraising": "Coordinating the flow of capital into a system.",
  "allocation": "Distributing scarce resources among participants.",
  "value-capture": "Retaining and monetizing generated value.",
  "governance": "Structuring permissions and decision-making rules.",
  "rewards-and-penalties": "Shaping incentives to influence behavior.",
  "exchange": "Facilitating the transfer, trade, and pricing of assets.",
  "data": "Managing information flow, integrity, and access.",
};
