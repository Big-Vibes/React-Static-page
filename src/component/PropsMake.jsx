export default function PropsMake(props){
    console.log (props)
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
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3> {props.name} </h3>
            <div className="info-group">
                <img 
                    src="src\Image\phone-icon.png" 
                    alt="phone icon" 
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                    <img 
                        src="src\Image\mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>{props.email}</p>
                </div>            
            </article>
            </div>
            {/* <div className="new">
            {props.Setup && <p className="setup">Setup: {props.Setup}</p>}
            <p className="punchline">Punchline: {props.Punchline}</p>
            <hr />   
            </div> */}
            </>

    )
}



