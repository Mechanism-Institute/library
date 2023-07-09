import { getMechanism } from "@/lib/get-mechanism";
import { NextResponse } from "next/server";
import { notFound } from "next/navigation";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const mechanism = await getMechanism(id);
  if (!mechanism) return notFound();
  return NextResponse.json(mechanism);
}
