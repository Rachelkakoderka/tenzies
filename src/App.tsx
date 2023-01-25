import React from 'react';
import './App.css';

import Die from "./Die"
import {interfaceDie} from "./model"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


function App() {
  
  const [dice, setDice] = React.useState<interfaceDie[]>(createDiceArr());

  const [isWon, setIsWon ] = React.useState<boolean>(false)

  function createDie(): interfaceDie {
    
    const die : interfaceDie = {
      id: nanoid(),
      value: Math.ceil(Math.random()*6),
      isHeld: false
    } 
    return die;
  }
  
  function createDiceArr(): Array<interfaceDie> {
      const diceArr : interfaceDie[] = [];
      for (let i : number =0; i<10; i++) {
        diceArr.push(createDie());
      }
      
      return diceArr;
  }

  function updateDice(): void {
    if (isWon) {
      setIsWon(false)
      setDice(createDiceArr());
    } else {
      setDice(
        dice.map( (die) => die.isHeld ?
        {...die} :
        createDie()
        )
      )
    }    
  }
  


const diceElements = dice.map((die) => (<Die key = {die.id} die={die} dice={dice} setDice={setDice} />));


React.useEffect(() => {
  const diceHeld = dice.filter(die => die.isHeld);
  const chosenNum = dice[0].value;
  const sameNum = dice.every((die) => die.value === chosenNum)
  if (diceHeld.length === 10 && sameNum) {
    return setIsWon(true); 
  }
  }
, [dice])


// console.log("component rendered fully")

  return (
    <div className="App">
      {isWon ? <Confetti /> : ""}

      <div className='board'>
        <h1>Tenzies</h1>
        <h2> Roll until all dice are the same. 
          < br/>
          Click each die to freeze it at its current value between rolls.</h2>
        
        <div className='container'>
         {diceElements}
                  
          
        </div>

        <button className='roll-btn'
                onClick={updateDice} 
        >{isWon ?" Play Again" : "Roll Dice"}</button>  
      </div>   
    </div>
  );
}

export default App;
