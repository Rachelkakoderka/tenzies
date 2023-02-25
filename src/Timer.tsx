import React from 'react'
import { timeFormat } from './model'


interface Props {
    isStarted: boolean,
    time: timeFormat,
}


const Timer : React.FC<Props> = ({isStarted, time} ) => {

const {min, sek} = time;
  
return (

      <h2 className='stat'>Your time:   <> {isStarted ? `${min} : ${sek<10 ? `0${sek}` : sek} ` : "0 : 00"}
      
      </>
      </h2>
    
    )
}
export default Timer
