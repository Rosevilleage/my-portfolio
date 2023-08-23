"use client";

import useCarousel from "@/utills/useCarousel";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import CarouselButton from "./CarouselButton";
import CarouselDot from "./CarouselDot";

interface CarouselProps {
  images: string[];
  boundary: HTMLDivElement | null;
  w: number;
}

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
    dotHandler,
    nextChangeHandler,
    prevChangeHandler,
    onMouseDown,
    onTransitionEnd,
  } = useCarousel(size.w, slideList.length);
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
        <CarouselButton
          buttonMaterials={{ nextChangeHandler, prevChangeHandler }}
        />
        <CarouselDot dotMaterials={{ images, dotHandler, currentIndex }} />
      </div>
    </>
  );
}
