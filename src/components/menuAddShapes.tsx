import { useAppDispatch } from "../hooks";
import { selectMetodAndShape } from "../slices/addShapeSlice";

const MenuShapes = () => {
	const dispatch = useAppDispatch()
  return (
    <>
      <div>
        <button onClick={() => dispatch(selectMetodAndShape({methodAddShape: 'add', name: 'rect'}))}>add Rect</button>
        <button onClick={() => dispatch(selectMetodAndShape({methodAddShape: 'add', name: 'circle'}))}>add Сircle</button>
        <button onClick={() => dispatch(selectMetodAndShape({methodAddShape: 'add', name: 'line'}))}>add Triangle</button>
      </div>
      <div>
        <button onClick={() => dispatch(selectMetodAndShape({methodAddShape: 'drawing', name: 'rect'}))}>drawing Rect</button>
        <button onClick={() => dispatch(selectMetodAndShape({methodAddShape: 'drawing', name: 'circle'}))}>drawing Сircle</button>
        <button onClick={() => dispatch(selectMetodAndShape({methodAddShape: 'drawing', name: 'line'}))}>drawing Triangle</button>
      </div>
    </>
  );
};

export default MenuShapes;
