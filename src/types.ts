export type Position = {
    x: number;
    y: number;
  }
  
export  type OptionsStage = {
    startX: number;
    startY: number;
    isDragging: boolean;
  } & Position

export type Shapes = {
    sHapes: Position[]
}