export default function Bodyy(props){
    return(
    <>
    <article className="BodyEntry">
            <div className="BodyImagecContainer">
                <img className="BodyImage" src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="BodyInfo">
                <img className="BodyMarker" src="src\Image\marker.png" alt="map marker icon" />
                <span className="BodyCountry">{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h2 className="BodyTitle">{props.title}</h2>
                <p className="BodyDate">{props.dates}</p>
                <p className="BodyText">{props.text}</p>
            </div>
        </article>
       
            </>


    )
}



