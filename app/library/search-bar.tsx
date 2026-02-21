"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useRef, useState } from "react";

function Bar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("search") || "");
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  const updateSearch = useCallback(
    (search: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (search) {
        params.set("search", search);
      } else {
        params.delete("search");
      }
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname);
    },
    [searchParams, router, pathname],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    setValue(next);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => updateSearch(next), 150);
  };

  return (
    <div className="relative">
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        className="absolute text-gray-400 -translate-y-1/2 pointer-events-none top-1/2 left-6"
        width={30}
        height={30}
      />
      <Input
        name="search"
        type="text"
        placeholder="Search by mechanism or keyword"
        className="pl-[62px] py-5"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default function SearchBar() {
  return (
    <Suspense>
      <Bar />
    </Suspense>
  );
}
