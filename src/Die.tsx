import React from "react"
import {interfaceDie} from "./model"

interface Props {
    die : interfaceDie,
    dice: interfaceDie[],
    setDice: React.Dispatch<React.SetStateAction<interfaceDie[]>>,
    isStarted: boolean,
    isWon: boolean,
    timerId:number
}


export default function Die( {die, dice, setDice, isStarted} :Props) {
    
    const handleClick = (id:string) => {
       
        if (isStarted) {
            setDice(dice.map( die => die.id === id ? {...die, isHeld: !die.isHeld} : die))
        } 
    }
    
    
    return (
        <div className={die.isHeld ? "die die-held" : "die"}
             onClick={()=> handleClick(die.id)}
        >
            <p>{isStarted ? die.value : "?"}</p>
        </div>
    )
}