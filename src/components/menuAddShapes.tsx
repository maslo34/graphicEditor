import { useAppDispatch } from "../hooks";
import { selectMetodAndShape } from "../slices/addShapeSlice";

const MenuShapes = () => {
  const dispatch = useAppDispatch();

  // Стили для кнопок
  const buttonStyle = {
    margin: "5px 0",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "10px",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        width: "150px",
      }}
    >
      <h3 style={{ margin: "0 0 10px", fontSize: "18px" }}>Add Shapes</h3>
      <div style={{ marginBottom: "15px" }}>
        <button
          style={buttonStyle}
          onClick={() =>
            dispatch(
              selectMetodAndShape({ methodAddShape: "add", name: "rect" })
            )
          }
        >
          Add Rect
        </button>
        <button
          style={buttonStyle}
          onClick={() =>
            dispatch(
              selectMetodAndShape({ methodAddShape: "add", name: "circle" })
            )
          }
        >
          Add Circle
        </button>
        <button
          style={buttonStyle}
          onClick={() =>
            dispatch(
              selectMetodAndShape({ methodAddShape: "add", name: "line" })
            )
          }
        >
          Add Line
        </button>
      </div>
      <h3 style={{ margin: "0 0 10px", fontSize: "18px" }}>Drawing Shapes</h3>
      <div style={{ marginBottom: "15px" }}>
        <button
          style={buttonStyle}
          onClick={() =>
            dispatch(
              selectMetodAndShape({ methodAddShape: "drawing", name: "rect" })
            )
          }
        >
          Drawing Rect
        </button>
        <button
          style={buttonStyle}
          onClick={() =>
            dispatch(
              selectMetodAndShape({ methodAddShape: "drawing", name: "circle" })
            )
          }
        >
          Drawing Circle
        </button>
        <button
          style={buttonStyle}
          onClick={() =>
            dispatch(
              selectMetodAndShape({ methodAddShape: "drawing", name: "line" })
            )
          }
        >
          Drawing Line
        </button>
      </div>
    </div>
  );
};

export default MenuShapes;
