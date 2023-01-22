import React from 'react';
import './App.css';

import Die from "./Die"

function App() {
  
  interface Die {
    id: number,
    value: number,
    isHeld: boolean
  }

  const [dice, setDice] = React.useState(createDiceArr());
  console.log(dice)

  function createDie(id: number): Die{
    
    const die = {
      id: id,
      value: Math.ceil(Math.random()*6),
      isHeld: false
    } 
    return die;
  }

  
  function createDiceArr(): Array<object> {
      const diceArr : Array<object> = [];
      for (let i : number =0; i<10; i++) {
        diceArr.push(createDie(i));
      }
      console.log(diceArr);
      return diceArr;
  }
  
const diceElements = dice.map(die => <Die id={die.id} value={die.value} isHeld={die.isHeld} />);

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
