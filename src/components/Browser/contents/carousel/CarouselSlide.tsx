"use client";

interface CarouselProps {
  images: string[];
  boundary: HTMLDivElement | null;
  w: number;
}
import useCarousel from "@/utills/useCarousel";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";

import {
  BsDot,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from "react-icons/bs";

export default function CarouserlSlide({ images, boundary, w }: CarouselProps) {
  const [size, setSize] = useState({ w: 500, h: 308 });

  useLayoutEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const ent = entries[0];
      const { width, height } = ent.contentRect;

      setSize({
        w: width,
        h: height,
      });
    });
    if (boundary) {
      observer.observe(boundary);
      return () => {
        observer.unobserve(boundary);
      };
    }
  }, [w]);
  const slideList = [images.at(-1), ...images, images.at(0)] as string[];
  const {
    transX,
    animation,
    currentIndex,
    dotHnadler,
    nextChangeHandler,
    prevChangeHandler,
    onMouseDown,
    onTransitionEnd,
  } = useCarousel(size.w, slideList.length);
  const buttonCondig = {
    size: 40,
    color: "rgb(78, 78, 78)",
    display: "hidden group-hover:block",
    boxStyle:
      "absolute top-0 h-[calc(100%-35px)] flex items-center justify-center w-1/6 group hover:bg-[rgba(114,114,114,0.2)] ",
  };
  const carouselArrow = [
    {
      pos: "left-0",
      button: (size: number, color: string, display: string) => (
        <BsChevronDoubleLeft size={size} color={color} className={display} />
      ),
      onClick: prevChangeHandler,
    },
    {
      pos: "right-0",
      button: (size: number, color: string, display: string) => (
        <BsChevronDoubleRight size={size} color={color} className={display} />
      ),
      onClick: nextChangeHandler,
    },
  ];
  return (
    <>
      <div className="w-full overflow-hidden h-max">
        <div
          className="flex items-center h-max"
          style={{
            transform: `translateX(${-currentIndex * size.w + transX}px)`,
            transition: `transform ${animation ? 300 : 0}ms ease-in-out 0s`,
          }}
          onMouseDown={onMouseDown}
          onTransitionEnd={onTransitionEnd}
        >
          {slideList.map((img, i) => (
            <Image
              key={i + img}
              src={img}
              alt={`image${i}`}
              width={size.w}
              height={size.h}
              priority
              draggable={false}
            />
          ))}
        </div>
        {carouselArrow.map(({ pos, button, onClick }) => (
          <div
            key={pos}
            className={buttonCondig.boxStyle + pos}
            onClick={onClick}
          >
            {button(
              buttonCondig.size,
              buttonCondig.color,
              buttonCondig.display
            )}
          </div>
        ))}
        <div className="flex items-center mx-auto w-max">
          {images.map((img, i) => (
            <div key={img + i}>
              <BsDot
                size={35}
                color={
                  currentIndex === i + 1
                    ? "rgb(41, 41, 41)"
                    : "rgb(177, 177, 177)"
                }
                onClick={() => dotHnadler(i + 1)}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
