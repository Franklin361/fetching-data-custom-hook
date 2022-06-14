
import { Result } from '../interface';


export const Card = ({ image, name }:Result) => {
    
    return (
        <div className='card'>
            <img src={image} alt={image} width={100} />
            <p>{name}</p>
        </div>
    )
}