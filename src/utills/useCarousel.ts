"use client";

import { useState } from "react";
import { inrange } from "./inrange";

export default function useCarousel(sliderWidth: number, slideLeng: number) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transX, setTransX] = useState(0);
  const [animation, setAnimation] = useState(false);
  const animationHandler = () => {
    setAnimation(true);
    setTransX(0);
  };
  const nextChangeHandler = () => {
    setCurrentIndex(inrange(currentIndex + 1, 0, slideLeng));
    animationHandler();
  };
  const prevChangeHandler = () => {
    setCurrentIndex(inrange(currentIndex - 1, 0, slideLeng));
    animationHandler();
  };

  const dotHandler = (idx: number) => {
    setCurrentIndex(inrange(idx, 0, slideLeng));
    animationHandler();
  };

  return {
    transX,
    animation,
    currentIndex,
    dotHandler,
    nextChangeHandler,
    prevChangeHandler,
    onMouseDown: (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
      const onDragChange = (intervalX: number) => {
        setTransX(inrange(intervalX, -sliderWidth + 10, sliderWidth - 10));
      };
      const onDragEnd = (intervalX: number) => {
        if (intervalX < -90) {
          nextChangeHandler();
        }
        if (intervalX > 90) {
          prevChangeHandler();
        }
      };

      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - clickEvent.pageX;

        onDragChange(deltaX);
      };

      const mouseUpHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - clickEvent.pageX;

        onDragEnd(deltaX);
        document.removeEventListener("mousemove", mouseMoveHandler);
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler, { once: true });
    },
    onTransitionEnd: () => {
      setAnimation(false);

      if (currentIndex === 0) {
        setCurrentIndex(slideLeng - 2);
      } else if (currentIndex === slideLeng - 1) {
        setCurrentIndex(1);
      }
    },
  };
}
