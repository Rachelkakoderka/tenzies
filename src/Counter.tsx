import React from 'react'



interface Props {
    isStarted: boolean,
    moves: number,
    isWon: boolean
    
}


const Counter : React.FC<Props> = ({isStarted, moves, isWon} ) => {
  return (
    <div className='stats'>
      <h2 className='stat '>Your moves: {moves}</h2>
    </div>
    )
}
export default Counter