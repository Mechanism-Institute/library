import Image from "next/image";
import CategoryTag from "@/components/ui/category-tag";
import Link from "next/link";
import Typography from "@/components/ui/typography";
import ArrowLeft from "@/components/ui/arrow-left";
import { AggregatedMechanism } from "@/types/mechanism";
import { getMechanism } from "@/lib/get-mechanism";
import { getImplementations } from "@/lib/get-implementations";
import { parseResourcesString } from "@/utils/parse-resources-string";
import { Separator } from "@/components/ui/separator";
import Implementation from "@/components/implementation";
import ReactMarkdown from "react-markdown";

async function getAggregatedMechanism(id: string) {
  const mechanism = await getMechanism(id);
  if (!mechanism) return null;
  console.log(mechanism.implementations);
  const implementations = await getImplementations(mechanism.implementations);
  return {
    ...mechanism,
    implementations,
    resources: parseResourcesString(mechanism.resources),
  } satisfies AggregatedMechanism;
}

export default async function Page({ params }: { params: { id: string } }) {
  const mechanism = await getAggregatedMechanism(params.id);

  if (!mechanism)
    return (
      <div className="mx-auto mt-20 flex justify-center items-center ">
        <Image
          src="/watermark.svg"
          alt="watermakr"
          width={449}
          height={1321}
          className="hidden lg:block fixed right-20 top-[400px] z-0"
        />
        <Typography variant="hero-title">Not Found</Typography>
      </div>
    );

  return (
    <div className="flex flex-col lg:flex-row gap-[120px] relative">
      <Image
        src="/watermark.svg"
        alt="watermakr"
        width={449}
        height={1321}
        className="hidden lg:block fixed right-20 top-[400px] z-0"
      />
      <div className="flex flex-col gap-6 z-10 lg:max-w-[240px]">
        <div className="flex flex-col gap-4">
          <CategoryTag variant={mechanism.category} className="w-full" />
          {mechanism.secondaryCategories?.map((category) => (
            <CategoryTag key={category} variant={category} className="w-full" />
          ))}
        </div>
        {mechanism.resources.length > 0 && (
          <>
            <Separator />
            <div className="flex flex-col gap-6">
              <Typography variant="subtitle2" className="font-gotham">
                Resources
              </Typography>
              <ul className="gap-4 flex flex-col list-disc flex-wrap ml-4">
                {mechanism.resources.map((resource) => (
                  <li key={resource.link}>
                    <Typography asChild className="underline ">
                      <Link href={resource.link} target="_blank" rel="noreferrer">
                        {resource.name}
                      </Link>
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-1 z-10">
        <div className="flex flex-col max-w-[720px] lg:w-full gap-12">
          <Link href="/library" className="flex gap-2">
            <ArrowLeft />
            <Typography>Back to Library</Typography>
          </Link>
          <div className="flex flex-col gap-6 font-gotham">
            <div className="flex gap-2 items-center flex-wrap">
              <Typography variant="title">{mechanism.name}</Typography>
              {mechanism.alternativeNames.map((alternativeName, i) => (
                <Typography
                  variant="subtitle2"
                  className="font-gotham text-gray-500"
                  key={`${alternativeName}_${i}`}
                >
                  {"//"} {alternativeName}
                </Typography>
              ))}
            </div>
            <Typography className="text-[28px] leading-[175%] font-semilight">
              {mechanism.description}
            </Typography>
          </div>
          <Separator />
          <article className="prose">
            {/* eslint-disable-next-line react/no-children-prop */}
            <ReactMarkdown children={mechanism.discussion} />
          </article>
          {mechanism.implementations.length > 0 && (
            <div className="flex flex-col gap-6">
              <Typography variant="subtitle" className="text-stone font-gotham font-medium">
                Implementations
              </Typography>
              {mechanism.implementations.map((implementation) => (
                <Implementation key={implementation.id} implementation={implementation} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
