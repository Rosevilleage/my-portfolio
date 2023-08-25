import { CircleProps, circlePos } from "./CircleConfig";

export default function Circle03({ svgAnimate, divClass }: CircleProps) {
  const divCl = divClass ? divClass : "";
  const svgCl = svgAnimate ? svgAnimate : "";
  return (
    <div className={divCl + circlePos}>
      <svg
        width="445"
        height="450"
        viewBox="0 0 445 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgCl}
      >
        <g filter="url(#filter0_d_16_28)">
          <path
            d="M81.6949 55.9134C122.803 21.316 175.108 2.8796 228.825 4.05268C282.542 5.22576 333.992 25.928 373.551 62.287L364.948 71.6467C327.665 37.3792 279.175 17.8678 228.548 16.7622C177.92 15.6566 128.625 33.0325 89.8807 65.6398L81.6949 55.9134Z"
            fill="#DCEFF4"
          />
        </g>
        <g filter="url(#filter1_d_16_28)">
          <path
            d="M437.839 280.803C429.124 314.197 412.709 345.087 389.909 370.997C367.109 396.907 338.558 417.116 306.542 430.007C274.527 442.897 239.937 448.11 205.545 445.228C171.152 442.346 137.912 431.449 108.489 413.41L115.133 402.572C142.864 419.573 174.192 429.844 206.606 432.56C239.02 435.276 271.62 430.363 301.794 418.214C331.968 406.065 358.877 387.018 380.366 362.599C401.854 338.179 417.325 309.067 425.538 277.593L437.839 280.803Z"
            fill="#DCEFF4"
          />
        </g>
        <g filter="url(#filter2_d_16_28)">
          <path
            d="M4.35443 199.57C9.18439 156.145 26.7783 115.125 54.9128 81.6957L64.6392 89.8815C38.123 121.388 21.5412 160.048 16.9891 200.975L4.35443 199.57Z"
            fill="#DCEFF4"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_16_28"
            x="77.6949"
            y="-6.10352e-05"
            width="299.856"
            height="75.6468"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_16_28"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_16_28"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_16_28"
            x="104.489"
            y="273.593"
            width="337.35"
            height="176.407"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_16_28"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_16_28"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_16_28"
            x="0.35437"
            y="77.6957"
            width="68.2848"
            height="127.28"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_16_28"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_16_28"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
