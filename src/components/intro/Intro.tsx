"use client";

import useInterval from "@/utills/useInterval";
import { useState } from "react";

interface IntroProps {
  closeIntro: () => void;
  isFirst: boolean;
}

export default function Intro({ closeIntro, isFirst }: IntroProps) {
  const text = "jangchanhee Portfolio";
  const [showText, setShowText] = useState("");
  const [count, setCount] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const onMouseEnterHandler = () => setIsHover(true);
  const onMouseLeaveHandler = () => setIsHover(false);
  useInterval(() => {
    if (count >= text.length) {
      return;
    }

    setShowText((prev) => {
      let result = prev ? prev + text[count] : text[0];
      setCount((prev) => prev + 1);
      return result;
    });
  }, 150);

  const containerStyle = isFirst
    ? " absolute z-[100] top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center bg-black"
    : "hidden";
  return (
    <div className={containerStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="134"
        height="116"
        viewBox="0 0 134 116"
        fill="none"
        className=" animate-icon_opac"
      >
        <path
          d="M102.402 8.16704C103.027 6.4549 105.026 5.68575 106.565 6.66279C113.792 11.2525 119.948 18.0047 124.431 26.3011C129.518 35.716 132.23 46.7138 132.237 57.9563C132.244 69.1988 129.545 80.2014 124.47 89.6256C119.998 97.93 113.85 104.693 106.629 109.296C105.092 110.276 103.091 109.51 102.464 107.798L96.6298 91.8745C96.1154 90.4703 96.7244 88.9159 97.9687 88.0863C102.044 85.3692 105.517 81.4773 108.069 76.7385C111.076 71.1546 112.674 64.6354 112.67 57.9741C112.666 51.3128 111.059 44.7965 108.045 39.2181C105.488 34.4844 102.01 30.5993 97.9325 27.8896C96.6866 27.0618 96.0749 25.5077 96.5877 24.1024L102.402 8.16704Z"
          fill="#E4EAEB"
        />
        <path
          d="M31.59 107.833C30.9652 109.545 28.966 110.314 27.4274 109.337C20.2001 104.747 14.0436 97.9953 9.56112 89.6989C4.4743 80.284 1.76241 69.2862 1.75539 58.0437C1.74837 46.8012 4.44653 35.7986 9.52159 26.3744C13.9937 18.07 20.1415 11.3067 27.363 6.70381C28.9003 5.72396 30.9013 6.49031 31.5284 8.20206L37.5845 24.7324C38.0989 26.1366 37.4896 27.6908 36.2469 28.5228C32.2686 31.1861 28.8778 34.9923 26.384 39.6234C23.435 45.0995 21.8672 51.4928 21.8713 58.0254C21.8753 64.5581 23.4511 70.9485 26.4069 76.4192C28.9063 81.0452 32.3013 84.8449 36.2823 87.5009C37.5267 88.3311 38.1386 89.885 37.6259 91.2902L31.59 107.833Z"
          fill="#E4EAEB"
        />
        <ellipse
          cx="63.9169"
          cy="8.39408"
          rx="63.9169"
          ry="8.39408"
          transform="matrix(0.955215 0.295914 -0.708315 0.705897 11.8913 33.2351)"
          fill="#E4EAEB"
        />
      </svg>
      <button
        className=" animate-buttonShdow w-[188px] p-2 mt-10 relative cursor-pointer btn before:left-0 before:top-0 after:left-0 after:top-0 before:absolute after:absolute before:transition-all before:duration-300 before:bg-slate-200 after:bg-slate-200 after:transition-all after:duration-300 before:w-px before:h-0 after:w-0 after:h-px"
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        onClick={closeIntro}
      >
        <span className="absolute inset-0 before:absolute after:absolute before:transition-all before:duration-300 before:bg-slate-200 before:bottom-0 before:right-0 before:w-px before:h-0 after:transition-all after:duration-300 after:bg-slate-200 after:bottom-0 after:right-0 after:w-0 after:h-px"></span>
        {isHover && (
          <p className="h-6 pr-px mx-auto w-max text-slate-200 ">Enter</p>
        )}
        {!isHover && (
          <p className="h-6 pr-px mx-auto border-r-2 w-max animate-typingCursor text-slate-200 ">
            {showText}
          </p>
        )}
      </button>
    </div>
  );
}
