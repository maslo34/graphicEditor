import { Line, Rect, Circle } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";


import type { Shape } from "../types";
import { useAppDispatch } from "../hooks";
import { openMenuShape } from "../slices/contexMenyShapeSlice";

const Shape = (prop: Shape) => {
  const dispatch = useAppDispatch();
  const handleClickOnComponent = (e: KonvaEventObject<PointerEvent>) => {
    e.evt.preventDefault()
    dispatch(openMenuShape({isContextMenuShape: true, id: prop.id, position: { x: prop.x, y: prop.y}}))
  };
  switch (prop.name) {
    case "rect":
      return (
        <Rect
          x={prop.x}
          y={prop.y}
          width={prop.sizeShape}
          height={prop.sizeShape}
          fill={`rgba(0, 255, 0, ${prop.transparency}`}
          onContextMenu={handleClickOnComponent}
          style={{ cursor: "context-menu", position: "absolute", zIndex: 1000 }}
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
