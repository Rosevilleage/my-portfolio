import { CircleProps, centerPosition } from "./CircleConfig";

export default function CenterSimbol({ svgAnimate, divClass }: CircleProps) {
  const divCl = divClass ? divClass : "";
  const svgCl = svgAnimate ? svgAnimate : "";
  return (
    <div className={divCl + centerPosition}>
      <svg
        width="144"
        height="116"
        viewBox="0 0 144 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgCl}
      >
        <g filter="url(#filter0_d_24_549)">
          <path
            d="M107.402 8.16705C108.027 6.4549 110.026 5.68575 111.565 6.6628C118.792 11.2525 124.948 18.0047 129.431 26.3011C134.518 35.716 137.23 46.7138 137.237 57.9563C137.244 69.1988 134.545 80.2014 129.47 89.6256C124.998 97.93 118.85 104.693 111.629 109.296C110.092 110.276 108.091 109.51 107.464 107.798L101.63 91.8745C101.115 90.4703 101.724 88.9159 102.969 88.0863C107.044 85.3692 110.517 81.4773 113.069 76.7385C116.076 71.1546 117.674 64.6354 117.67 57.9741C117.666 51.3128 116.059 44.7965 113.045 39.2181C110.488 34.4844 107.01 30.5993 102.932 27.8896C101.687 27.0618 101.075 25.5077 101.588 24.1024L107.402 8.16705Z"
            fill="#E4EAEB"
          />
          <path
            d="M36.59 107.833C35.9652 109.545 33.966 110.314 32.4274 109.337C25.2001 104.747 19.0436 97.9953 14.5611 89.6989C9.4743 80.284 6.76241 69.2862 6.75539 58.0437C6.74837 46.8012 9.44653 35.7986 14.5216 26.3744C18.9937 18.07 25.1415 11.3067 32.363 6.70381C33.9003 5.72396 35.9013 6.49031 36.5284 8.20206L42.5845 24.7324C43.0989 26.1366 42.4896 27.6908 41.2469 28.5228C37.2686 31.1861 33.8778 34.9924 31.384 39.6234C28.435 45.0995 26.8672 51.4928 26.8713 58.0254C26.8753 64.5581 28.4511 70.9485 31.4069 76.4192C33.9063 81.0452 37.3013 84.8449 41.2823 87.5009C42.5267 88.3311 43.1386 89.885 42.6259 91.2902L36.59 107.833Z"
            fill="#E4EAEB"
          />
          <ellipse
            cx="63.9169"
            cy="8.39408"
            rx="63.9169"
            ry="8.39408"
            transform="matrix(0.955215 0.295914 -0.708315 0.705897 16.8914 33.2351)"
            fill="#E4EAEB"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_24_549"
            x="0.755371"
            y="0.233246"
            width="142.481"
            height="115.534"
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
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_24_549"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_24_549"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
