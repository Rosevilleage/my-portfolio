"use client";

import { useState } from "react";
import { inrange } from "./inrange";
import { isMobile } from "react-device-detect";

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

  const onCarouselDrag = () => {
    if (isMobile) {
      return {
        onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) => {
          const touchMoveHandler = (moveEvent: TouchEvent) => {
            if (moveEvent.cancelable) moveEvent.preventDefault();

            const deltaX =
              moveEvent.touches[0].pageX - touchEvent.touches[0].pageX;

            onDragChange?.(deltaX);
          };

          const touchEndHandler = (moveEvent: TouchEvent) => {
            const deltaX =
              moveEvent.changedTouches[0].pageX -
              touchEvent.changedTouches[0].pageX;

            onDragEnd?.(deltaX);
            document.removeEventListener("touchmove", touchMoveHandler);
          };

          document.addEventListener("touchmove", touchMoveHandler, {
            passive: false,
          });
          document.addEventListener("touchend", touchEndHandler, {
            once: true,
          });
        },
      };
    }
    return {
      onmousedown: (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
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
    };
  };

  return {
    transX,
    animation,
    currentIndex,
    dotHandler,
    nextChangeHandler,
    prevChangeHandler,
    onCarouselDrag: onCarouselDrag,
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
