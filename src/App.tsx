import React from 'react';
import './App.css';

import Die from "./Die"

function App() {


  // function createDie() {
  //   return {
  //     id: 1234,
  //     value: 5,
  //     isHeld: false
  //   } 
  // }

  // const DiceElements = () => {
  //     const diceArr : Array<object> = [];
  //     for (let i=0; i<10; i++) {
  //       diceArr.push(createDie());
  //     }
  //     return diceArr;
  // }


  return (
    <div className="App">
      <div className='board'>
        <h1>Tenzies</h1>
        <h2> Roll until all dice are the same. 
          < br/>
          Click each die to freeze it at its current value between rolls.</h2>
        
        <div className='container'>
          {/* {DiceElements} */}
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          
        </div>

        <button className='roll-btn'>Roll Dice</button>  
      </div>   
    </div>
  );
}

export default App;
