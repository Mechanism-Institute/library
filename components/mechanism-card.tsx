import Typography from "@/components/ui/typography";
import { Mechanism } from "@/types/mechanism";
import CategoryTag from "@/components/ui/category-tag";
import Image from "next/image";
import Link from "next/link";

export default function MechanismCard({ mechanism }: { mechanism: Mechanism }) {
  return (
    <Link
      href={`/mechanism/${mechanism.id}`}
      className="flex flex-col p-6 rounded-2xl bg-white gap-6"
      aria-label={`Mechanism ${mechanism.name}`}
    >
      <div className="w-full h-[286px] flex items-center justify-center">
        <Image src="/sample-mechanism-ilustration.svg" alt="" width={286} height={286}></Image>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-4 flex-1">
          <Typography className="leading-6 text-xl font-gotham">{mechanism.name}</Typography>
          <Typography className="leading-[150%] text-sm line-clamp-6">
            {mechanism.description}
          </Typography>
        </div>
        <div className="pt-4 border-t border-divider flex gap-2 flex-wrap overflow-y-auto">
          <CategoryTag variant={mechanism.category} className="w-fit" />
          {mechanism.secondaryCategories?.map((category) => (
            <CategoryTag key={category} variant={category} className="w-fit" />
          ))}
        </div>
      </div>
    </Link>
  );
}
