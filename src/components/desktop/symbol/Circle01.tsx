import { CircleProps, centerPosition } from "./CircleConfig";

export default function Circle01({ svgAnimate, divClass }: CircleProps) {
  const divCl = divClass ? divClass : "";
  const svgCl = svgAnimate ? svgAnimate : "";
  return (
    <div className={divCl + centerPosition}>
      <svg
        width="574"
        height="574"
        viewBox="0 0 574 574"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgCl}
      >
        <g filter="url(#filter0_d_16_27)">
          <path
            d="M287 570C211.944 570 139.962 540.184 86.8888 487.111C33.816 434.038 4 362.056 4 287C4 211.944 33.816 139.962 86.8888 86.8888C139.962 33.816 211.944 4 287 4V8.25012C213.071 8.25012 142.17 37.6183 89.8941 89.8941C37.6183 142.17 8.25012 213.071 8.25012 287C8.25012 360.929 37.6183 431.83 89.8941 484.106C142.17 536.382 213.071 565.75 287 565.75V570Z"
            fill="#BFD9DF"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_16_27"
            x="0"
            y="0"
            width="291"
            height="574"
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
              values="0 0 0 0 1 0 0 0 0 0.9625 0 0 0 0 0.9625 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_16_27"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_16_27"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
