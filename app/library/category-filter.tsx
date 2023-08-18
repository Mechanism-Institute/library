"use client";

import { MechanismCategory } from "@/types/mechanism-category";
import { Suspense, useCallback } from "react";
import { CATEGORIES_BACKGROUNDS, CATEGORY_LABELS } from "@/config/categories";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/utils/shadui";

function Filter({ category }: { category: MechanismCategory }) {
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const isActive = searchParams.getAll("category").includes(category);

  const createQueryString = useCallback(
    (value: string) => {
      const name = "category";
      const params = new URLSearchParams(searchParams.toString());
      const currentValues = params.getAll(name);

      if (currentValues.includes(value)) {
        const newValues = currentValues.filter((currentValue) => currentValue !== value);
        params.delete(name);
        newValues.forEach((newValue) => params.append(name, newValue));
      } else {
        params.append(name, value);
      }

      return params.toString();
    },
    [searchParams],
  );

  return (
    <Link
      className={cn(
        "flex items-center gap-1",
        "font-gotham leading-full font-medium py-2.5 px-4 text-sm rounded-3xl hover:opacity-70 transition-opacity duration-300 cursor-pointer",
        isActive ? ["text-white", CATEGORIES_BACKGROUNDS[category]] : "bg-gray-300 text-gray-500",
      )}
      href={pathname + "?" + createQueryString(category)}
    >
      {CATEGORY_LABELS[category]}
      {isActive && <X className="w-4 h-4" />}
    </Link>
  );
}

export default function CategoryFilter({ category }: { category: MechanismCategory }) {
  return (
    <Suspense>
      <Filter category={category} />
    </Suspense>
  );
}
