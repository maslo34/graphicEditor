import { useAppSelector } from "../hooks"

import Shape from "./shape"

const CollectionShapes = () => {
	const { shapes }= useAppSelector((state) => state.shapes)
	console.log(shapes)
    return (
			<>
				{shapes.map((shape) => {
					return <Shape key={shape.id} {...shape}/>
				})}
			</>
		)
}

export default CollectionShapes