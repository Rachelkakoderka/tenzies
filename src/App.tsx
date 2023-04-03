import React from 'react';
import './App.css';

import Die from "./Die"
import {interfaceDie, timeFormat} from "./model"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Counter from './Counter';
import Timer from './Timer';


function App() {
  
  const [dice, setDice] = React.useState<interfaceDie[]>(createDiceArr());
  const [isWon, setIsWon ] = React.useState<boolean>(false);
  const [isStarted, setIsStarted] = React.useState<boolean>(false);
  const [moves, setMoves] = React.useState<number>(0)
  const [time, setTime] = React.useState<timeFormat>({min: 0,sek: 0})
  const [timerId, setTimerId] = React.useState<number>(0) 

  const date = new Date();
  const currentDate = date.getFullYear();
  
 
  
  const timer = () => {
   let a = window.setInterval(updateTime,
     1000)
    setTimerId(a);
  }

  function updateTime() {
    setTime(prevTime => {
      if (prevTime.sek === 59) {
       return {min:prevTime.min+1, sek:0}
      }
       return {min:prevTime.min, sek:prevTime.sek+1}
    })
      
  } 


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
        setMoves(prevMoves => prevMoves+1); 
      }  
  }

  function startGame():void  {
    setIsStarted(true);
    setMoves(0); 
    setTime({min: 0,sek: 0})
    timer();

  }
  


const diceElements = dice.map((die) => (<Die key = {die.id}
                                             die={die} 
                                             dice={dice} 
                                             setDice={setDice}
                                             isStarted={isStarted}
                                             isWon={isWon}
                                             timerId={timerId}/>));


React.useEffect(() => {
  const diceHeld = dice.filter(die => die.isHeld);
  const chosenNum = dice[0].value;
  const sameNum = dice.every((die) => die.value === chosenNum)
  if (diceHeld.length === 10 && sameNum) {
    return setIsWon(true); 
  }
  }
, [dice])

React.useEffect(()=>{window.clearInterval(timerId)}
,[isWon])


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
                  onClick={isStarted ? updateDice : startGame} 
          >{ isStarted ? (isWon ? "Play again" : "Roll Dice") : "Play" }
          </button>  

          <div className="stats">
          <Counter isStarted={isStarted} isWon={isWon} moves={moves} />
          <Timer isStarted={isStarted} time={time} />
          </div>
          
                
        <footer>
        <a className="portfolio-page-link"
             href='https://www.aleksandragalach.link/' 
             target="_blank">
            Made by Aleksandra Gałach   
          <div className='year'>{currentDate}</div>
        </a>
        </footer> 
      </div>
       
    </div>
  );
}

export default App;
