import React from "react";
import avatar from './component/assets/user.png'
import TestStar from "./TestStar";

export default function TestContact(){
// complex state for Object(To update Obj)
    const [theContact, SettheContact] = React.useState({
        firstName: "Inaolaji",
        lastName: "Abiodun",
        phone: "08122543607",
        email: "abioduninaolaji@gmail.com",
        isFavorite: true
    })

    function ToogleFavorites(){
        SettheContact (prevContact => {
            return{
                ...prevContact,
                isFavorite: !prevContact.isFavorite,
            }
        })
    }

 return(

     /* complex state for Object(To update Obj) */
    <main className="TestCard">
        <article className="card">
            <img 
            src={avatar}
            alt="User profile picture of John Doe" 
            className="avatar"/>
            <div 
            className="info">
                <TestStar
                isFilled = {theContact.isFavorite}
                handleClick = {ToogleFavorites} />
                <h2 className="name"> 
                    {theContact.firstName} {theContact.lastName} </h2>
                <p className="contact">
                    {theContact.phone} </p>
                <p className="contact"> 
                    {theContact.email} </p>

            </div>

        </article>
    </main>
 )
}