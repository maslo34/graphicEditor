import { Stage, Layer, Rect } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";
import { useAppSelector, useAppDispatch } from "../hooks";

import {
  setIsDragging,
  setPosition,
  setStartPosition,
} from "../slices/stageSlice";

const MainStage = () => {
  const stage = useAppSelector((state) => state.stage);
  const dispatch = useAppDispatch();

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    dispatch(setIsDragging());
    const { x, y } = e.target.getStage()!.getPointerPosition()!;
    dispatch(setStartPosition({ x, y }));
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!stage.isDragging) return;

    const { x, y } = e.target.getStage()!.getPointerPosition()!;

    dispatch(setPosition({ x, y }));
  };

	const handleMouseUp = () => dispatch(setIsDragging())
  console.log(stage);
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      x={stage.x}
      y={stage.y}
      draggable={stage.isDragging}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
			style={{cursor: stage.isDragging? 'grabbing': 'grab'}}
    >
      <Layer>
        <Rect x={0} y={0} width={100} height={100} fill="red" />
      </Layer>
    </Stage>
  );
};

export default MainStage;
