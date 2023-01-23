import React from "react"
import {interfaceDie} from "./model"

interface Props {
    die : interfaceDie,
    dice: interfaceDie[],
    setDice: React.Dispatch<React.SetStateAction<interfaceDie[]>>
}


export default function Die( {die, dice, setDice} :Props) {
    
    const handleClick = (id:string) => {
        setDice(dice.map( die => die.id === id ? {...die, isHeld: !die.isHeld} : die))
        } 
    
    
    return (
        <div className={die.isHeld ? "die die-held" : "die"}
             onClick={()=> handleClick(die.id)}
        >
            <p>{die.value}</p>
        </div>
    )
}