export default function PropsMake(prop){
    console.log (prop)
    // const hours = new Date().getHours()
    // let timeOfDay
  
    // if (hours < 12) {
    //   timeOfDay = "morning"
    // } else if (hours >= 12 && hours < 17) {
    //   timeOfDay = "afternoon"
    // } else if (hours < 21) {
    //   timeOfDay = "evening"
    // } else {
    //   timeOfDay = "night"
    // }
    
    // return (
    //   <h1>Good {timeOfDay}</h1>
    // )

    return(
        <>
        <div className="contacts">
        <article className="contact-card">
            <img 
                src={prop.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3> {prop.name} </h3>
            <div className="info-group">
                <img 
                    src="src\Image\phone-icon.png" 
                    alt="phone icon" 
                />
                <p>{prop.phone}</p>
            </div>
            <div className="info-group">
                    <img 
                        src="src\Image\mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>{prop.email}</p>
                </div>            
            </article>
            </div>
            {/* <div className="new">
            {prop.Setup && <p className="setup">Setup: {prop.Setup}</p>}
            <p className="punchline">Punchline: {prop.Punchline}</p>
            <hr />   
            </div> */}
            </>

    )
}



