"use client";

import { AggregatedMechanism } from "@/types/mechanism";
import { useEffect } from "react";

export default function Test({ mechanism }: { mechanism: AggregatedMechanism }) {
  useEffect(() => {
    console.log(mechanism);
  }, []);
  return null;
}
