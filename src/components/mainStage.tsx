import { Stage, Layer } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";

import { useAppSelector, useAppDispatch } from "../hooks";

import CollectionShapes from "./collectionShapesOnStage";

import {
  setIsDragging,
  setPosition,
  setScale,
  setStartPosition,
} from "../slices/stageSlice";

import { addNewShape } from "../slices/shapesSlice";
import { Vector2d } from "konva/lib/types";
import { addShapeOnStage } from "../slices/addShapeSlice";

const MainStage = () => {
  const dispatch = useAppDispatch();
  const { isAdding, name } = useAppSelector((state) => state.addShape);
  const { isDragging, x, y, scale } = useAppSelector((state) => state.stage);
  console.log(isAdding)
  const getPointerPosition = (e: KonvaEventObject<MouseEvent>):Vector2d => {
    return e.target.getStage()?.getPointerPosition()!;
  };

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    if (isAdding) return;

    dispatch(setIsDragging());
    const { x, y } = getPointerPosition(e);
    dispatch(setStartPosition({ x, y }));
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (isAdding || !isDragging) return;

    const { x, y } = getPointerPosition(e);
    dispatch(setPosition({ x, y }));
  };

  const handleMouseUp = () => {
    if (!isAdding) {
      dispatch(setIsDragging());
    }
  };

  const handleStageClick = (e: KonvaEventObject<MouseEvent>) => {
    if (!isAdding) return;

    const { x, y } = getPointerPosition(e);
    dispatch(addNewShape({ isDragging: false, x: x, y: y, name: name! }));
    dispatch(addShapeOnStage({isAdding: false}))
  };

  const handleWheel = (e: KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();
    const scaleBy = 1.1
    const newScale = e.evt.deltaY > 0 ? scale / scaleBy: scale * scaleBy;
    dispatch(setScale(newScale))
  } 

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      x={x}
      y={y}
      scaleX={scale}
      scaleY={scale}
      draggable={isDragging}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onClick={handleStageClick}
      onWheel={(e) => handleWheel(e)}
      style={{ cursor: isDragging || isAdding ? 'grabbing' : 'grab' }}
    >
      <Layer>
        <CollectionShapes />
      </Layer>
    </Stage>
  );
};

export default MainStage;
