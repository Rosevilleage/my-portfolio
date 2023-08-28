import React from "react";

export default function dragMouseDown(
  onDrag: (intervalX: number, intervalY: number) => void,
  stopPropagation?: boolean
) {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches
  ) {
    return {
      onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) => {
        if (stopPropagation) touchEvent.stopPropagation();
        const touchMoveHandler = (moveEvent: TouchEvent) => {
          if (moveEvent.cancelable) moveEvent.preventDefault();

          const intervalX =
            moveEvent.touches[0].screenX - touchEvent.touches[0].screenX;
          const intervalY =
            moveEvent.touches[0].screenY - touchEvent.touches[0].screenY;
          onDrag(intervalX, intervalY);
        };

        const touchEndHandler = () => {
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
  } else {
    return {
      onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => {
        if (stopPropagation) e.stopPropagation();

        const mouseMoveHandler = (mouseE: MouseEvent) => {
          const intervalX = mouseE.screenX - e.screenX;
          const intervalY = mouseE.screenY - e.screenY;
          onDrag(intervalX, intervalY);
        };

        const mouseUpHandler = () => {
          document.removeEventListener("mousemove", mouseMoveHandler);
        };

        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler, { once: true });
      },
    };
  }
}
