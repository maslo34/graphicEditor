import { Stage, Layer } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";

import { useAppSelector, useAppDispatch } from "../hooks";

import CollectionShapes from "./collectionShapesOnStage";

import {
  setIsDragging,
  setPosition,
  setStartPosition,
} from "../slices/stageSlice";

import { addNewShape } from "../slices/shapesSlice";

const MainStage = () => {
  const dispatch = useAppDispatch();
	
  const stage = useAppSelector((state) => state.stage);

	const newShape = useAppSelector((state) => state.addShape)
	console.log(newShape)

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {

		if (newShape.isAdding) return
    dispatch(setIsDragging());
    const { x, y } = e.target.getStage()!.getPointerPosition()!;
    dispatch(setStartPosition({ x, y }));
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
		if (newShape.isAdding) return
    if (!stage.isDragging) return;

    const { x, y } = e.target.getStage()!.getPointerPosition()!;

    dispatch(setPosition({ x, y }));
  };

	const handleMouseUp = () => {
		if (newShape.isAdding) return
		dispatch(setIsDragging())
	}

	const handleStageClick = (e: KonvaEventObject<MouseEvent>) => {
		if (!newShape.isAdding) return
		const { x, y } = e.target.getStage()!.getPointerPosition()!;
		dispatch(addNewShape({isDragging: false, x: x, y: y, name: newShape.name!}))
	}

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
			onClick={handleStageClick}
			style={{cursor: stage.isDragging || newShape.isAdding? 'grabbing': 'grab'}}
    >
      <Layer>
        <CollectionShapes />
      </Layer>
    </Stage>
  );
};

export default MainStage;
