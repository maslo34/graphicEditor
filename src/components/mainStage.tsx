import { Stage, Layer, Rect } from "react-konva";
import { useAppSelector } from "../hooks";

const MainStage = () => {
  const stage = useAppSelector((state) => state.stage);
  console.log(stage);
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      x={stage.x}
      y={stage.y}
    >
      <Layer>
        <Rect x={0} y={0} width={100} height={100} fill="red" />
      </Layer>
    </Stage>
  );
};

export default MainStage;
