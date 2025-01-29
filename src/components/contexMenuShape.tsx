import { useAppSelector } from "../hooks";

const ContextMenuShape = () => {
  const dataContextShape = useAppSelector((state) => state.contextMenuShape);
	console.log(dataContextShape.isContextMenuShape)
  return (
    <>
      {dataContextShape.isContextMenuShape ? (
        <ul
          style={{
            position: "absolute",
            top: dataContextShape.position!.y,
            left: dataContextShape.position!.x,
            border: "1px solid black",
            backgroundColor: "white",
            padding: "10px",
            zIndex: 1000,
            boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          <li>
            <button>change color</button>
          </li>
        </ul>
      ): <></>}
    </>
  );
};

export default ContextMenuShape;
