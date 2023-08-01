"use client";

import { TypeAnimation } from "react-type-animation";

export default function CategoriesTyping() {
  return (
    <TypeAnimation
      sequence={[
        "airdrops",
        1600,
        "curation",
        1600,
        "utility",
        1600,
        "ownership",
        1600,
        "engagement",
        1600,
        "security",
        1600,
      ]}
      wrapper="span"
      speed={{ type: "keyStrokeDelayInMs", value: 100 }}
      className={
        "leading-full -ml-1 -mr-2 text-gray-900 after:text-gray-900 after:-ml-1 after:opacity-80 inline-block"
      }
      repeat={Infinity}
    />
  );
}
