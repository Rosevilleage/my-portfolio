import { CircleProps, centerPosition } from "./CircleConfig";

export default function Circle05({ svgAnimate, divClass }: CircleProps) {
  const divCl = divClass ? divClass : "";
  const svgCl = svgAnimate ? svgAnimate : "";
  return (
    <div className={divCl + centerPosition}>
      <svg
        width="306"
        height="306"
        viewBox="0 0 306 306"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgCl}
      >
        <g filter="url(#filter0_d_16_30)">
          <circle
            cx="153"
            cy="153"
            r="146"
            stroke="#DCEFF4"
            strokeWidth="6"
            strokeDasharray="12 12"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_16_30"
            x="0"
            y="0"
            width="306"
            height="306"
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
              result="effect1_dropShadow_16_30"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_16_30"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
