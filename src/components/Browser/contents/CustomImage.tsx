import { forwardRef, ForwardedRef } from "react";
import Image from "next/image";

const CustomImage = forwardRef(
  (
    {
      image,
      idx,
      isView,
      isMobile,
    }: {
      image: string;
      idx: number;
      isView: boolean;
      isMobile?: boolean;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        key={image}
        ref={ref}
        className={
          `${isMobile ? "w-full max-w-[280px]" : "w-full max-w-[1000px]"}` +
          ` ${idx % 2 !== 0 ? " self-end" : ""}` +
          ` ${isView ? "" : " -left-full"}`
        }
        style={{
          perspective: "2000px",
        }}
      >
        <div
          className={`w-full ${
            isMobile ? "pt-[210.78%]" : "pt-[56.25%]"
          } relative`}
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.2s ease-out 0.2s",
            transform: !isView ? "rotateX(-90deg)" : "",
            // transform: "rotateX(-90deg)",
          }}
        >
          <div
            className={
              "absolute top-0 w-[97%] h-1 bg-white rounded-xl" +
              ` ${isView ? "opacity-0" : "opacity-1 shadow-line"}`
            }
            style={{
              transform: "rotateX(-90deg) translateZ(-4px)",
              left:
                idx % 2 !== 0
                  ? isView
                    ? isMobile
                      ? "-50%"
                      : "1.5%"
                    : "-110vw"
                  : "",
              right:
                idx % 2 === 0
                  ? isView
                    ? isMobile
                      ? "-50%"
                      : "1.5%"
                    : "-110vw"
                  : "",
              transition:
                "left 0.2s ease-out, right 0.2s ease-out, opacity 1s ease-out 0.3s, box-shadow 1s ease-out 0.3s",
            }}
          ></div>
          <Image
            src={image}
            alt={`image${idx}`}
            draggable={false}
            priority
            fill={true}
            sizes={
              isMobile
                ? "(max-width: 375px) 100vw, (max-width: 1200px) 280px"
                : "(max-width: 375px) 100vw, (max-width: 1200px) 812.5px, 1300px"
            }
            className="rounded-xl shadow-line"
            style={{
              left:
                idx % 2 !== 0
                  ? isView
                    ? isMobile
                      ? "-10vw"
                      : "0"
                    : "-110vw"
                  : "",
              right:
                idx % 2 === 0
                  ? isView
                    ? isMobile
                      ? "-10vw"
                      : "0"
                    : "-110vw"
                  : "",
              transition: "left 0.2s ease-out, right 0.2s ease-out",
            }}
          />
        </div>
      </div>
    );
  }
);

export default CustomImage;
