"use client";

import useCarousel from "@/utills/useCarousel";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import CarouselButton from "./CarouselButton";
import CarouselDot from "./CarouselDot";

interface CarouselProps {
  images: string[];
  boundary: HTMLDivElement | null;
}

export default function CarouserlSlide({ images, boundary }: CarouselProps) {
  const [size, setSize] = useState({ w: 500, h: 308 });

  const slideList = [images.at(-1), ...images, images.at(0)] as string[];

  const {
    transX,
    animation,
    currentIndex,
    dotHandler,
    nextChangeHandler,
    prevChangeHandler,
    onCarouselDrag,
    onTransitionEnd,
  } = useCarousel(size.w, slideList.length);

  const observer = new ResizeObserver((entries) => {
    const ent = entries[0];
    const { width, height } = ent.contentRect;

    setSize({
      w: width,
      h: height,
    });
  });

  useLayoutEffect(() => {
    if (boundary) {
      observer.observe(boundary);
    }
  }, [boundary]);

  return (
    <>
      <div className="w-full overflow-hidden h-max">
        <div
          className="flex items-center h-max"
          style={{
            transform: `translateX(${-currentIndex * size.w + transX}px)`,
            transition: `transform ${animation ? 300 : 0}ms ease-in-out 0s`,
          }}
          onTransitionEnd={onTransitionEnd}
          {...onCarouselDrag()}
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
              placeholder={"blur"}
              blurDataURL={img}
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
