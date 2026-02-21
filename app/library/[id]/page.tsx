import Image from "next/image";
import CategoryTags from "@/app/library/[id]/category-tags";
import Link from "next/link";
import Typography from "@/components/ui/typography";
import ArrowLeft from "@/components/ui/arrow-left";
import { getMechanismBySlug, getAllMechanismSlugs } from "@/lib/get-data";
import { Separator } from "@/components/ui/separator";
import Implementation from "@/components/implementation";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

export function generateStaticParams() {
  return getAllMechanismSlugs().map((slug) => ({ id: slug }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const mechanism = getMechanismBySlug(params.id);
  if (!mechanism) return { title: "Not Found | Mechanism Institute" };
  return {
    title: `${mechanism.name} | Mechanism Institute`,
    description: mechanism.description,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const mechanism = getMechanismBySlug(params.id);

  if (!mechanism)
    return (
      <div className="flex items-center justify-center py-8 mx-auto mt-20 md:py-16">
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
    <>
      <Image
        src="/watermark.svg"
        alt="watermakr"
        width={449}
        height={1321}
        className="hidden lg:block fixed right-20 top-[120px] z-0"
      />
      <div className="relative py-8 md:py-16">
        <div className="max-w-screen-md mx-auto">
          <div className="z-10 flex flex-1">
            <div className="flex flex-col max-w-[720px] lg:w-full gap-12">
              <Link
                href="/library"
                className="inline-flex gap-2 transition duration-300 cursor-pointer hover:opacity-70"
              >
                <ArrowLeft />
                <Typography>Back to Library</Typography>
              </Link>
              <div className="flex flex-col gap-6 font-gotham">
                <div className="flex flex-wrap items-baseline gap-2 ">
                  <Typography variant="title">{mechanism.name}</Typography>
                  {mechanism.alternativeNames.map((alternativeName, i) => (
                    <Typography
                      variant="subtitle2"
                      className="text-gray-500 font-gotham"
                      key={`${alternativeName}_${i}`}
                    >
                      {"//"} {alternativeName}
                    </Typography>
                  ))}
                </div>
                <CategoryTags
                  category={mechanism.category}
                  secondaryCategories={mechanism.secondaryCategories}
                />
                <Typography className="text-[22px] leading-[160%] font-semilight">
                  {mechanism.description}
                </Typography>
              </div>
              <Separator />
              {mechanism.discussion && (
                <article className="prose">
                  <ReactMarkdown>{mechanism.discussion}</ReactMarkdown>
                </article>
              )}
              {mechanism.resources.length > 0 && (
                <div className="flex flex-col gap-6">
                  <Typography variant="subtitle" className="font-medium text-stone font-gotham">
                    Resources
                  </Typography>
                  <ul className="flex flex-col flex-wrap gap-4 ml-4 list-disc">
                    {mechanism.resources.map((resource, i) => (
                      <li key={resource.url || i}>
                        {resource.url ? (
                          <Typography asChild className="underline ">
                            <Link href={resource.url} target="_blank" rel="noreferrer">
                              {resource.name}
                            </Link>
                          </Typography>
                        ) : (
                          <Typography>{resource.name}</Typography>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {mechanism.implementations.length > 0 && (
                <div className="flex flex-col gap-6">
                  <Typography variant="subtitle" className="font-medium text-stone font-gotham">
                    Examples
                  </Typography>
                  {mechanism.implementations.map((implementation) => (
                    <Implementation key={implementation.slug} implementation={implementation} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
