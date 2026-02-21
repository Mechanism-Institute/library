"use client";

import useMechanismQuery from "@/hooks/use-mechanism-query";
import MechanismCard from "@/components/mechanism-card";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Skeletons() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={`skeleton_${i}`}
          className="flex flex-col p-6 rounded-2xl animate-pulse h-[300px] bg-gray-400"
        />
      ))}
    </div>
  );
}

export default function MechanismsList() {
  const router = useRouter();
  const { mechanisms, status } = useMechanismQuery();
  const isEmpty = status === "success" && mechanisms.length === 0;

  const clearFilters = () => {
    router.push("/library");
  };

  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full min-h-[300px] mt-20 gap-8">
        <Typography variant="hero-title">No mechanisms with the criteria found</Typography>
        <Button variant="outline" onClick={clearFilters}>
          Clear filters
        </Button>
      </div>
    );
  }

  if (status === "loading") {
    return <Skeletons />;
  }

  if (status === "error") {
    return <div>Oops, there was something wrong</div>;
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {mechanisms.map((mechanism) => (
        <MechanismCard key={mechanism.slug} mechanism={mechanism} />
      ))}
    </div>
  );
}
