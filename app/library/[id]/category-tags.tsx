"use client";

import { useState } from "react";
import CategoryTag from "@/components/ui/category-tag";
import Typography from "@/components/ui/typography";
import { MechanismCategory } from "@/types/mechanism-category";
import { CATEGORY_DESCRIPTIONS } from "@/config/categories";

export default function CategoryTags({
  category,
  secondaryCategories,
}: {
  category: MechanismCategory;
  secondaryCategories?: MechanismCategory[];
}) {
  const [active, setActive] = useState<MechanismCategory | null>(null);

  const toggle = (cat: MechanismCategory) => {
    setActive((prev) => (prev === cat ? null : cat));
  };

  const allCategories = [category, ...(secondaryCategories || [])];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-1">
        {allCategories.map((cat) => (
          <button key={cat} onClick={() => toggle(cat)} className="cursor-pointer">
            <CategoryTag variant={cat} className="w-fit" />
          </button>
        ))}
      </div>
      {active && (
        <Typography className="text-sm text-gray-500">
          {CATEGORY_DESCRIPTIONS[active]}
        </Typography>
      )}
    </div>
  );
}
