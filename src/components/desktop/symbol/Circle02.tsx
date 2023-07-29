import { CircleProps, centerPosition } from "./CircleConfig";

export default function Circle02({ svgAnimate, divClass }: CircleProps) {
  const divCl = divClass ? divClass : "";
  const svgCl = svgAnimate ? svgAnimate : "";
  return (
    <div className={divCl + centerPosition}>
      <svg
        width="544"
        height="548"
        viewBox="0 0 544 548"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgCl}
      >
        <g filter="url(#filter0_d_51_91)">
          <path
            d="M535.243 334.027C521.657 393.606 488.262 446.815 440.517 484.955C392.772 523.095 333.501 543.911 272.392 544C211.284 544.088 151.952 523.445 104.097 485.444C56.2409 447.442 22.6916 394.331 8.93272 334.791L31.6636 329.539C44.2336 383.934 74.884 432.456 118.605 467.173C162.325 501.891 216.53 520.751 272.358 520.67C328.187 520.589 382.336 501.572 425.956 466.727C469.576 431.882 500.085 383.271 512.497 328.84L535.243 334.027Z"
            fill="#DCEFF4"
          />
          <path
            d="M513.359 328.815L537.163 328.786L533.077 342.323L513.359 328.815Z"
            fill="#DCEFF4"
          />
          <path
            d="M31.1285 329.648L10.4265 340.991L7.59229 329.477L31.1285 329.648Z"
            fill="#DCEFF4"
          />
        </g>
        <g filter="url(#filter1_d_51_91)">
          <path
            d="M8.75718 213.973C22.343 154.394 55.7378 101.185 103.483 63.0451C151.228 24.9049 210.499 4.08907 271.608 4.00028C332.716 3.9115 392.048 24.555 439.903 62.5563C487.759 100.558 521.308 153.669 535.067 213.209L512.336 218.461C499.766 164.066 469.116 115.544 425.395 80.8265C381.675 46.1088 327.47 27.2491 271.642 27.3302C215.813 27.4113 161.664 46.4285 118.044 81.2731C74.4244 116.118 43.9151 164.729 31.5032 219.16L8.75718 213.973Z"
            fill="#DCEFF4"
          />
          <path
            d="M30.6411 219.185L6.83709 219.214L10.9229 205.677L30.6411 219.185Z"
            fill="#DCEFF4"
          />
          <path
            d="M512.872 218.352L533.574 207.009L536.408 218.523L512.872 218.352Z"
            fill="#DCEFF4"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_51_91"
            x="3.59229"
            y="324.786"
            width="537.571"
            height="223.214"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_dropShadow_51_91"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_51_91"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_51_91"
            x="2.83704"
            y="0"
            width="537.571"
            height="223.214"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_dropShadow_51_91"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_51_91"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
