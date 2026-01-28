import React from "react"
export default function ConditonalRendering(props){
    const [isShown,setIsShown]= React.useState(false)
    function Toggle() {
        setIsShown(prevShow => !prevShow)
    }
    console.log(isShown)

    return(
        <>
        
        <p className="setup">Setup: {props.setup}</p>
        {isShown  ? <p className="punchline"> Punchline:{props.punchline}</p> : null}
        <button onClick={Toggle}> {isShown? "Hide" : "show"} Punchline </button>
        <hr />
        </>
    )
}
