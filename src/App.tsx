import React from 'react';
import './App.css';

import Die from "./Die"
import {interfaceDie, timeFormat} from "./model"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Counter from './Counter';
// import Timer from './Timer';
// Problem w komponencie: This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided.ts(2746)




function App() {
  
  const [dice, setDice] = React.useState<interfaceDie[]>(createDiceArr());
  const [isWon, setIsWon ] = React.useState<boolean>(false);
  const [isStarted, setIsStarted] = React.useState<boolean>(false);
  const [moves, setMoves] = React.useState<number>(0)
  // const [time, setTime] = React.useState<timeFormat>({hrs: 0,min: 0,sek: 0})


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
        setIsStarted(false)
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

  function game():void  {
    if (isStarted){ 
      updateDice();
      setMoves(prevMoves => prevMoves+1);
    } else {
      setIsStarted(true);
      setMoves(0);
      
    }
  }
  


const diceElements = dice.map((die) => (<Die key = {die.id}
                                             die={die} 
                                             dice={dice} 
                                             setDice={setDice}
                                             isStarted={isStarted} />));


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
                onClick={game} 
        >{ isStarted ? (isWon ? "Play again" : "Roll Dice") : "Play" }
        </button>  

        
        <Counter isStarted={isStarted} isWon={isWon} moves={moves} />
        {/* <Timer isStarted={isStarted} time={time} /> */}
  
      </div>
     
    </div>
  );
}

export default App;
