export interface CircleProps {
  svgAnimate?: string;
  divClass?: string;
}

const centerPosition =
  " left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute";

const circlePos =
  " left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute max-md:hidden";

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

export { centerPosition, spining, backspining, circlePos };
