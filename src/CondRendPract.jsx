import React from "react";
export default function CondtRd(){
    // const [unreadMess, setunreadMess] = React.useState(["a", "b"])

    // return(
    //     <div>
    //     {unreadMess.length > 0 && <h1>You have {unreadMess.length} unread Messages</h1>}
    //     </div> 
    // )
    const [message, setMessage] = React.useState(["a", "b"])
    function DisText(){
        if (message.length === 0){
            return "You're all caught up!"
        }
        else if (message.length === 1){
            return "You have 1 unread message"
        }
        else {
            return `You have ${message.length} unread messages`
        }
    }
    return(
        <div>
             <h1> {DisText()} </h1>
        </div>
    )
}