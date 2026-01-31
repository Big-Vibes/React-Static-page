import React from "react"
export default function ConditonalRendering(prop){
    const [isShown,setIsShown]= React.useState(false)
    function Toggle() {
        setIsShown(prevShow => !prevShow)
    }
    console.log(isShown)

    return(
        <>
        
        <p className="setup">Setup: {prop.setup}</p>
        {isShown  ? <p className="punchline"> Punchline:{prop.punchline}</p> : null}
        <button onClick={Toggle}> {isShown? "Hide" : "show"} Punchline </button>
        <hr />
        </>
    )
}
