import React from "react";

export default function dragMouseDown(
  onDrag: (intervalX: number, intervalY: number) => void,
  stopPropagation?: boolean
) {
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
