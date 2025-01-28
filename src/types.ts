export type Position = {
  x: number;
  y: number;
};

export type OptionsStage = {
  startX: number;
  startY: number;
  isDragging: boolean;
} & Position;

export type Shape = {
  id?: string;
  name: string;
  isDragging: boolean;
} & Position;

export type Shapes = {
  shapes: Shape[];
};

export type addShape = {
	isAdding: boolean;
	name?: string;
}
