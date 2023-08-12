import React, {useState, useEffect} from 'react'
import "./SmartWatch.css"

export default function () {
  const [time, setTime] = useState('');

  function formatTime(val){
    if(val < 10){
        return '0';
    }else{
        return '';
    }
  }

  useEffect(()=>{
    const timerID = setInterval(
        () => tick(), 1000)

        return function cleanUp(){
            clearInterval(timerID)
        }
  })

  function tick(){
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    setTime(formatTime(h) + h + ':' + formatTime(m) + m + ':' + formatTime(s) + s)
  }

  return (
    <div className='clock'>
        <div className='screen'></div>
        <h1 className='time text-center'>{time}</h1>
    </div>
  )
}
