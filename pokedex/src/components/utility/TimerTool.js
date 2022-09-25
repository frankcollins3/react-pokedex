import React from 'react';
import { useTimer } from 'react-timer-hook';

export default async function Watch(props) {
    const { 
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart
    } = useTimer({ expiryTimestamp, onExpire: () => {
        console.log("hey were expiring")
    }}
)



// function StopWatch({ expiryTimestamp }) {
//     // function StopWatch({ expiryTimestamp }) {
//     const {
//         seconds, 
//         minutes, 
//         hours,
//         days,
//         isRunning,
//         start,
//         pause,
//         resume,
//         restart
//       } = useTimer({ expiryTimestamp, onExpire: () => {
//   }
// })


  const seeUnderLog = () => {
    // console.groupCollapsed()
    // console.log('seconds')
    // console.log(seconds)
    // console.log('minutes')
    // console.log(minutes)
    // console.log('hours')
    // console.log(hours)
    // console.log('days')
    // console.log(days)
    // console.log('isRunning')
    // console.log(isRunning)
    // console.log('start')
    // console.log(start)
    // console.log('pause')
    // console.log(pause)
    // console.log('resume')
    // console.log(resume)
    // console.log('restart')
    // console.log(restart)
    // console.groupEnd()
//   }
  seeUnderLog()

  return (
    <div className="Tiny-Timer Half-Size" >
      
      <p>Timer Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 3);
        restart(time)
      }}>Restart</button>
    </div>
  );
}
}

  const time = new Date();
  time.setSeconds(time.getSeconds() + 3); // 10 minutes timer
  return (
    <div>
      <StopWatch expiryTimestamp={time}  /> 
    </div>
  );
}






//? ERRORS with timer hook ?
// TimerTool.js:5 Uncaught TypeError: Cannot destructure property 'expiryTimestamp' of '_ref' as it is undefined.
// * haven't specified expiryTimestamp
//? ___ERRORS___
