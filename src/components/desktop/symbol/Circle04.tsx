import { CircleProps, centerPosition } from "./CircleConfig";

export default function Circle04({ svgAnimate, divClass }: CircleProps) {
  const divCl = divClass ? divClass : "";
  const svgCl = svgAnimate ? svgAnimate : "";
  return (
    <div className={divCl + centerPosition}>
      <svg
        width="353"
        height="346"
        viewBox="0 0 353 346"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgCl}
      >
        <g filter="url(#filter0_d_55_102)">
          <path
            d="M232.658 10.3972C266.613 22.0881 296.072 44.0845 316.928 73.3186C337.783 102.553 348.995 137.567 349 173.478C349.005 209.389 337.802 244.406 316.953 273.645C296.105 302.885 266.652 324.889 232.7 336.588L231.343 332.652C264.476 321.235 293.218 299.762 313.563 271.228C333.908 242.694 344.841 208.522 344.836 173.478C344.832 138.434 333.891 104.265 313.538 75.7367C293.186 47.2082 264.438 25.7427 231.303 14.334L232.658 10.3972Z"
            fill="#B4E1EB"
          />
          <path
            d="M231.303 14.3402L231.307 9.89916L234.256 10.9857L231.303 14.3402Z"
            fill="#B4E1EB"
          />
          <path
            d="M231.338 332.651L234.276 335.993L231.407 337.072L231.338 332.651Z"
            fill="#B4E1EB"
          />
        </g>
        <g filter="url(#filter1_d_55_102)">
          <path
            d="M119.764 335.403C85.9482 323.625 56.6359 301.616 35.8925 272.429C15.1491 243.241 4.00297 208.322 4 172.514C3.99703 136.707 15.1374 101.785 35.8759 72.5944C56.6145 43.4035 85.9231 21.3899 119.737 9.60686L121.107 13.5386C88.1093 25.0372 59.5081 46.5195 39.2701 75.0058C19.0322 103.492 8.16069 137.57 8.16359 172.514C8.16649 207.457 19.0436 241.534 39.2863 270.017C59.529 298.5 88.1338 319.977 121.133 331.471L119.764 335.403Z"
            fill="#B4E1EB"
          />
          <path
            d="M121.112 13.7372L118.204 10.3119L121.117 9.2442L121.112 13.7372Z"
            fill="#B4E1EB"
          />
          <path
            d="M121.139 331.405L120.852 336.193L117.833 334.88L121.139 331.405Z"
            fill="#B4E1EB"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_55_102"
            x="227.302"
            y="5.89917"
            width="125.698"
            height="335.173"
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
              result="effect1_dropShadow_55_102"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_55_102"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_55_102"
            x="0"
            y="5.24414"
            width="125.139"
            height="334.949"
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
              result="effect1_dropShadow_55_102"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_55_102"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
