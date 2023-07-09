import { getMechanism } from "@/lib/get-mechanism";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const mechanism = await getMechanism(params.id);
  if (!mechanism) return notFound();
  console.log(mechanism);
  return <></>;
}
