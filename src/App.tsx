import React from 'react';
import logo from './logo.svg';
import './App.css';

import Die from "./Die"

function App() {

  // const dieElements:  = () => {

  // }


  return (
    <div className="App">
      <div className='board'>
        <h1>Tenzies</h1>
        <h2> Roll until all dice are the same. 
          < br/>
          Click each die to freeze it at its current value between rolls.</h2>
        
        <div className='die-container'>
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
        </div>  
      </div>   
    </div>
  );
}

export default App;
