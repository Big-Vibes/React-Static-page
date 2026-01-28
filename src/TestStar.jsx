import starFilled from './component/assets/star-filled.png'
import starEmpty from './component/assets/star-empty.png'
export default function TestStar(props){

    let starIcon = props.isFilled ? starFilled : starEmpty
    return(
        <button
        onClick={props.handleClick}
            aria-pressed= {props.isFilled}
            aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
            className= "favorite-button"
        
        >
            <img
            className='favorite'  
            src= {starIcon}
            alt="empty star icon"
            
            />
        </button>
    )
}