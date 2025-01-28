import { Line, Rect, Circle } from "react-konva";

import type { Shape } from "../types";

const Shape = (prop: Shape) => {

  switch (prop.name) {
    case "rect":
      return (
        <Rect x={prop.x} y={prop.y} width={150} height={150} fill={"red"} />
      );
    case "line":
      return (
        <Line
          x={prop.x}
          y={prop.y}
          points={[-50, -50, 50, -50, 0, 50]}
          fill={"red"}
          closed={true}
        />
      );
    case "circle":
      return <Circle x={prop.x} y={prop.y} radius={100} fill={"red"} />;
  }
};

export default Shape;
