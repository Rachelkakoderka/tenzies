import React from 'react';
import './App.css';

import Die from "./Die"

function App() {
  
  interface interfaceDie {
    id: number,
    value: number,
    isHeld: boolean
  }

  const [dice, setDice] = React.useState<interfaceDie[]>(createDiceArr());
  console.log(dice)

  function createDie(id: number): interfaceDie{
    
    const die : interfaceDie = {
      id: id,
      value: Math.ceil(Math.random()*6),
      isHeld: false
    } 
    return die;
  }

  
  function createDiceArr(): Array<interfaceDie> {
      const diceArr : interfaceDie[] = [];
      for (let i : number =0; i<10; i++) {
        diceArr.push(createDie(i));
      }
      console.log(diceArr);
      return diceArr;
  }
  

  // nie rozumiem gdzie tu jest błąd
const diceElements = dice.map((die) => (<Die value={die.value} id={die.id} isHeld={die.isHeld} />));

console.log(diceElements)
  

  return (
    <div className="App">
      <div className='board'>
        <h1>Tenzies</h1>
        <h2> Roll until all dice are the same. 
          < br/>
          Click each die to freeze it at its current value between rolls.</h2>
        
        <div className='container'>
         {diceElements}
                  
          
        </div>

        <button className='roll-btn'>Roll Dice</button>  
      </div>   
    </div>
  );
}

export default App;
