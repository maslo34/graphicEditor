import { Line, Rect, Circle } from "react-konva";

import type { Shape } from "../types";

const Shape = (prop: Shape) => {
  switch (prop.name) {
    case "rect":
      return (
        <Rect
          x={prop.x}
          y={prop.y}
          width={prop.sizeShape}
          height={prop.sizeShape}
          fill={`rgba(0, 255, 0, ${prop.transparency}`}
        />
      );
    case "line":
      return (
        <Line
          x={prop.x}
          y={prop.y}
          points={[0, 0, prop.sizeShape!, -prop.sizeShape!, prop.sizeShape!, 0]}
          fill={"red"}
          closed={true}
        />
      );
    case "circle":
      return (
        <Circle x={prop.x} y={prop.y} radius={prop.sizeShape} fill={"red"} />
      );
  }
};

export default Shape;
