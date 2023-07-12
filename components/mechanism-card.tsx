import Typography from "@/components/ui/typography";
import { Mechanism } from "@/types/mechanism";
import CategoryTag from "@/components/ui/category-tag";
import Link from "next/link";

export default function MechanismCard({ mechanism }: { mechanism: Mechanism }) {
  console.log(mechanism.alternativeNames);
  return (
    <Link href={`/mechanism/${mechanism.id}`}>
      <div className="flex flex-col p-6 rounded-2xl bg-white gap-6 h-full">
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex gap-2 items-center flex-wrap">
              <Typography className="leading-6 text-xl font-gotham">{mechanism.name}</Typography>
              {mechanism.alternativeNames.map((alternativeName, i) => (
                <Typography
                  className="font-gotham"
                  variant="secondary"
                  key={`${alternativeName}_${i}`}
                >
                  {"//"} {alternativeName}
                </Typography>
              ))}
            </div>
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
      </div>
    </Link>
  );
}
