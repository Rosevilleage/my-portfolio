import CenterIcon from "./CenterIcon";
import Circle01 from "./Circle01";
import Circle02 from "./Circle02";
import Circle03 from "./Circle03";
import Circle04 from "./Circle04";
import Circle05 from "./Circle05";
import { backspining, spining } from "./CircleConfig";

export default function SpinCircle() {
  return (
    <>
      <Circle01 svgAnimate={spining["8s"]} />
      <Circle02 svgAnimate={backspining["6s"]} />
      <Circle03 svgAnimate={spining["6s"]} />
      <Circle04 svgAnimate={backspining["5s"]} />
      <Circle05 svgAnimate={spining["7s"]} />
      <CenterIcon />
    </>
  );
}
