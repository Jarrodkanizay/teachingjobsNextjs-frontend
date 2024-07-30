import React, { SVGProps } from 'react';

export function MapMarkerLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="M19 10c0 3.976-7 11-7 11s-7-7.024-7-11s3.134-7 7-7s7 3.024 7 7"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </g>
    </svg>
  );
}
