"use client";

import { TypeAnimation } from "react-type-animation";

export default function CategoriesTyping() {
  return (
    <TypeAnimation
      sequence={[
        "airdrops",
        5000,
        "curation",
        3000,
        "utility",
        3000,
        "ownership",
        3000,
        "engagement",
        3000,
        "security",
        3000,
        "anything",
        3000,
      ]}
      wrapper="span"
      speed={{ type: "keyStrokeDelayInMs", value: 100 }}
      className={
        "text-orange text-[28px] leading-full text-gray-900 after:-mx-2 after:opacity-50 block md:inline-block"
      }
      repeat={Infinity}
    />
  );
}
