import React from "react";
import CountMe from "./component/countMe";


export default function Count(){
    const [counts, setCount]   = React.useState(0)
    function add(){
        setCount(preCount => preCount + 1)
    }
    function subtract (){
        setCount (preCount => preCount - 1)
    }
    return (
        <>
        <main className="container">
            <div className="counter">
                <button 
                className="minus" 
                onClick={subtract}
                aria-label="Decrease count"> - </button>

                <CountMe 
                number = {counts} 
                />
                

                <button 
                className="plus" 
                onClick={add}
                aria-label="Increase count"> + </button>
            </div>

        </main>
        </>
    )
}