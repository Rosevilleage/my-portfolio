"use client";

import CenterSimbol from "./CenterSimbol";
import Circle01 from "./Circle01";
import Circle02 from "./Circle02";
import Circle03 from "./Circle03";
import Circle04 from "./Circle04";
import Circle05 from "./Circle05";

export default function SpinCircle() {
  const spining = {
    "1s": "animate-spining_1",
    "2s": "animate-spining_2",
    "3s": "animate-spining_3",
    "4s": "animate-spining_4",
    "5s": "animate-spining_5",
    "6s": "animate-spining_6",
    "7s": "animate-spining_7",
    "8s": "animate-spining_8",
  };
  const backspining = {
    "1s": "animate-backspining_1",
    "2s": "animate-backspining_2",
    "3s": "animate-backspining_3",
    "4s": "animate-backspining_4",
    "5s": "animate-backspining_5",
    "6s": "animate-backspining_6",
    "7s": "animate-backspining_7",
    "8s": "animate-backspining_8",
  };
  return (
    <>
      <Circle01 svgAnimate={spining["8s"]} />
      <Circle02 svgAnimate={backspining["6s"]} />
      <Circle03 svgAnimate={spining["6s"]} />
      <Circle04 svgAnimate={backspining["5s"]} />
      <Circle05 svgAnimate={spining["7s"]} />
      <CenterSimbol />
    </>
  );
}
