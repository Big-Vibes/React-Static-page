import starFilled from './component/assets/star-filled.png'
import starEmpty from './component/assets/star-empty.png'
export default function TestStar(prop){

    let starIcon = prop.isFilled ? starFilled : starEmpty
    return(
        <button
        onClick={prop.handleClick}
            aria-pressed= {prop.isFilled}
            aria-label={prop.isFilled ? "Remove from favorites" : "Add to favorites"}
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