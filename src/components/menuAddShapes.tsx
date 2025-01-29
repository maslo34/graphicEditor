import { useAppDispatch } from "../hooks";
import { addShapeOnStage } from "../slices/addShapeSlice";

const MenuShapes = () => {
	const dispatch = useAppDispatch()
  return (
    <>
      <button onClick={() => dispatch(addShapeOnStage({isAdding: true, name: 'rect'}))}>add Rect</button>
      <button onClick={() => dispatch(addShapeOnStage({isAdding: true, name: 'circle'}))}>add Сircle</button>
      <button onClick={() => dispatch(addShapeOnStage({isAdding: true, name: 'line'}))}>add Triangle</button>
    </>
  );
};

export default MenuShapes;
