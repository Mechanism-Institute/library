import { MechanismCategory } from "@/types/mechanism-category";

export type Mechanism = {
  slug: string;
  name: string;
  alternativeNames: string[];
  description: string;
  discussion: string;
  category: MechanismCategory;
  secondaryCategories?: MechanismCategory[];
  implementations: Implementation[];
  resources: { name: string; url: string }[];
};

export type Implementation = {
  slug: string;
  name: string;
  description: string;
  sourcecode: string;
  docs: string;
  app: string;
};
