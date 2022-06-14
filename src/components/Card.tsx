
import { Result } from "../hook"


export const Card = ({ id, image, name }:Result) => {
    
    return (
        <div>
            <img src={image} alt={image} />
            <p>{name}</p>
        </div>
    )
}