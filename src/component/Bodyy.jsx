
export default function Bodyy(prop){
    return(
    <>
    <article className="BodyEntry">
            <div className="BodyImagecContainer">
                <img className="BodyImage" src={prop.img.src} alt={prop.img.alt} />
            </div>
            <div className="BodyInfo">
                <img className="BodyMarker" src="src\Image\marker.png" alt="map marker icon" />
                <span className="BodyCountry">{prop.country}</span>
                <a href={prop.googleMapsLink}>View on Google Maps</a>
                <h2 className="BodyTitle">{prop.title}</h2>
                <p className="BodyDate">{prop.dates}</p>
                <p className="BodyText">{prop.text}</p>
            </div>
        </article>
       
            </>


    )
}



