import { Stage, Layer } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";
import { Vector2d } from "konva/lib/types";

import { useAppSelector, useAppDispatch } from "../hooks";

import CollectionShapes from "./collectionShapesOnStage";
import Shape from "./shape";

import {
  setIsDragging,
  setPosition,
  setScale,
  setStartPosition,
} from "../slices/stageSlice";
import {
  setPositionShape,
  setSizeShape,
  addShapeInStage,
} from "../slices/addShapeSlice";
import { addNewShape } from "../slices/shapesSlice";
import { closeMenuShape } from "../slices/contexMenyShapeSlice"

const MainStage = () => {
  const dispatch = useAppDispatch();
  const { methodAddShape, name, sizeShape, position } = useAppSelector(
    (state) => state.addShape
  );
  const { isDragging, x, y, scale } = useAppSelector((state) => state.stage);
  const { isContextMenuShape, ...rest} = useAppSelector((state) => state.contextMenuShape)
 
  const getPointerPosition = (e: KonvaEventObject<MouseEvent>): Vector2d => {
    return e.target.getStage()?.getPointerPosition()!;
  };

  const handleAddShape = (e: KonvaEventObject<MouseEvent>) => {
    const { x, y } = getPointerPosition(e);
    dispatch(setPositionShape({ position: { x, y } }));
  };

  const handleDrawingMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    const { x } = getPointerPosition(e);
    if ( methodAddShape === 'add') {
      dispatch(setSizeShape({ sizeShape: 100 }));
      return;
    }
    if (position) {
      const newSize = x - position.x;
      dispatch(setSizeShape({ sizeShape: newSize }));
    }
  };

  const handleStageMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    if (isContextMenuShape) dispatch(closeMenuShape())
    if (!methodAddShape) {
      dispatch(setIsDragging());
      const { x, y } = getPointerPosition(e);
      dispatch(setStartPosition({ x, y }));
      return;
    } else {
      handleAddShape(e);
    }
  };

  const handleStageMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (methodAddShape || !isDragging) {
      handleDrawingMouseMove(e);
      return;
    }

    const { x, y } = getPointerPosition(e);
    dispatch(setPosition({ x, y }));
  };

  const handleStageMouseUp = () => {
    console.log("end");
    if (isDragging) {
      dispatch(setIsDragging());
    }
    if (methodAddShape) {
      dispatch(addNewShape({ sizeShape: sizeShape!, name: name!, x: position!.x, y: position!.y, isDragging: false, transparency: 1}))
      dispatch(addShapeInStage())
    }
  };

  const handleWheel = (e: KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();
    const scaleBy = 1.1;
    const newScale = e.evt.deltaY > 0 ? scale / scaleBy : scale * scaleBy;
    dispatch(setScale(newScale));
  };

  // const handleCloseContextMenu = () => {
  //   console.log('click')
  //   if (isContextMenuShape) dispatch(closeMenuShape())
  // }

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      x={x}
      y={y}
      scaleX={scale}
      scaleY={scale}
      draggable={isDragging}
      onMouseDown={handleStageMouseDown}
      onMouseMove={handleStageMouseMove}
      onMouseUp={handleStageMouseUp}
      onWheel={handleWheel}
      // onClick={handleCloseContextMenu}
      style={{ cursor: isDragging || methodAddShape ? "grabbing" : "grab" }}
    >
      <Layer>
        <CollectionShapes />
        {position && name? <Shape name={name} x={position.x} y={position.y} isDragging={false} sizeShape={sizeShape} transparency={0.3}/>: <></>}
      </Layer>
    </Stage>
  );
};

export default MainStage;
