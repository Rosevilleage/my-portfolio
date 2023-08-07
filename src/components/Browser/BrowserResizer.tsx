import { RESIZERSTYLE, BrowserTransformation } from "./config";
export default function BrowserResizer({
  transformation,
}: BrowserTransformation) {
  const { direction, resizeHandle } = transformation;
  return (
    <div className={"absolute " + RESIZERSTYLE[direction]} {...resizeHandle} />
  );
}
