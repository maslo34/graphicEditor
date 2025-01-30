import { Line, Rect, Circle } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";


import type { Shape } from "../types";
import { useAppDispatch } from "../hooks";
import { openMenuShape } from "../slices/contexMenyShapeSlice";

const Shape = (prop: Shape) => {
  const dispatch = useAppDispatch();
  const handleClickOnComponent = (e: KonvaEventObject<PointerEvent>) => {
    e.evt.preventDefault()
    dispatch(openMenuShape({isContextMenuShape: true, id: prop.id, position: { x: prop.x!, y: prop.y!}}))
  };
  console.log('shape')
  switch (prop.name) {
    case "rect":
      return (
        <Rect
          x={prop.x}
          y={prop.y}
          width={prop.sizeShape}
          height={prop.sizeShape}
          fill={prop.color? prop.color: 'black'}
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
          fill={prop.color? prop.color: 'black'}
          closed={true}
          onContextMenu={handleClickOnComponent}
        />
      );
    case "circle":
      return (
        <Circle onContextMenu={handleClickOnComponent} x={prop.x} y={prop.y} radius={prop.sizeShape} fill={prop.color? prop.color: 'black'} />
      );
  }
};

export default Shape;
