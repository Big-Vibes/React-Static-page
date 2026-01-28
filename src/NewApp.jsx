import React from "react";
import DataToUsed from "./DataToUsed";
import TestPad from "./component/TestPad";


export default function NewApp (){

    const [ToChange , SetToChange ]= React.useState(DataToUsed)

    function HandleTurn (id){
        SetToChange (prevChange => prevChange.map(SetList =>{
            return(SetList.id === id ? {...SetList, on: !SetList.on} : SetList)
        }))
    }
    const ThePads = ToChange.map(TheItems => 
        <TestPad 
        id = {TheItems.id} 
        key={TheItems.id}
        color = {TheItems.color}
        on = {TheItems.on}
        HandleTurn = {HandleTurn}
        />
     )

    return(
        <div className="pad-container">
            {ThePads}
        </div>
        
    )

}