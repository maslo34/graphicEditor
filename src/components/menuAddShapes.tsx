import { useAppDispatch } from "../hooks";
import { addShapeOnStage } from "../slices/addShapeSlice";

const MenuShapes = () => {
	const dispatch = useAppDispatch()
  return (
    <>
      <button onClick={() => dispatch(addShapeOnStage({name: 'rect'}))}>add Rect</button>
      <button onClick={() => dispatch(addShapeOnStage({name: 'circle'}))}>add Сircle</button>
      <button onClick={() => dispatch(addShapeOnStage({name: 'line'}))}>add Triangle</button>
    </>
  );
};

export default MenuShapes;
