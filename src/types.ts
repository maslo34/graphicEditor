export type Position = {
  x: number;
  y: number;
};

export type OptionsStage = {
  startX: number;
  startY: number;
  isDragging: boolean;
  scale: number;
} & Position;

export type Shape = {
  id?: string;
  name?: string;
  color?: string;
  sizeShape?: number;
  transparency?: number;
  x?: number;
  y?: number;
};

export type Shapes = {
  shapes: Shape[];
};

export type addNewShape = {
	methodAddShape?: 'add' | 'drawing' | false;
	name?: string;
  sizeShape?: number;
  position?: Position;
}

export type ContextMenuShape = {
  isContextMenuShape: boolean;
  position?: Position;
  id?: string;
}
