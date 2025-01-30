import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changeColorShape } from "../slices/shapesSlice"
import { closeMenuShape } from "../slices/contexMenyShapeSlice";

const ContextMenuShape = () => {
  const [isDropdown, setIsDropdown] = useState("none");
  const dataContextShape = useAppSelector((state) => state.contextMenuShape);
  const dispatch = useAppDispatch();

  const handleSelectColorShape = (color: string) => {
    console.log('awd')
    dispatch(changeColorShape({ color: color, id: dataContextShape.id}))
    dispatch(closeMenuShape())
    setIsDropdown('none')
  };

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
          <li
            style={{
              listStyle: "none",
            }}
          >
            <button onClick={() => setIsDropdown("block")}>change color</button>
            <div
              style={{
                display: isDropdown,
              }}
            >
              <button
                onClick={()=> handleSelectColorShape('red')}
                style={{
                  width: 20,
                  height: 20,
                  background: "red",
                  border: "none",
                }}
              />
              <button
              onClick={()=> handleSelectColorShape('green')}
                style={{
                  width: 20,
                  height: 20,
                  background: "green",
                  border: "none",
                }}
              />
              <button
              onClick={()=> handleSelectColorShape('blue')}
                style={{
                  width: 20,
                  height: 20,
                  background: "blue",
                  border: "none",
                }}
              />
              <button
              onClick={()=> handleSelectColorShape('black')}
                style={{
                  width: 20,
                  height: 20,
                  background: "black",
                  border: "none",
                }}
              />
            </div>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default ContextMenuShape;
