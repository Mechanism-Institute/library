import * as React from "react";
import { SVGProps } from "react";

const Twitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="33"
    viewBox="0 0 32 33"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    fill="transparent"
    {...props}
  >
    <g clipPath="url(#clip0_949_6542)">
      <path
        d="M11 22.3112C11 22.3112 4.10625 18.3112 5.0975 7.31116C5.0975 7.31116 10.055 12.3112 16 13.3112V11.3112C16 8.56116 18.25 6.27741 21 6.31116C21.9705 6.32243 22.9175 6.6108 23.7296 7.1423C24.5417 7.6738 25.185 8.42629 25.5837 9.31116H30L26 13.3112C25.4675 21.6662 18.49 28.3112 10 28.3112C6 28.3112 5 26.8112 5 26.8112C5 26.8112 9 25.3112 11 22.3112Z"
        stroke="#currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_949_6542">
        <rect width="32" height="32" fill="white" transform="translate(0 0.311157)" />
      </clipPath>
    </defs>
  </svg>
);
export default Twitter;
