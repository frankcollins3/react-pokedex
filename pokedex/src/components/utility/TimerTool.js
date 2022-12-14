import { useTimer as oldtimer }  from 'react-timer-hook';


export default function App(props) {

function Watch({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = oldtimer({ expiryTimestamp, onExpire: () => {
    //  admittedly 12:11 been in chair since 10 am maybe just had enough but this took mental stretching to be able to read and understand.
    console.log('props')
    console.log(props)
    props.setPokedexHover('false')
    console.warn('onExpire called') 
    }
});


  return (
    <div className="Invisible">
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
        time.setSeconds(time.getSeconds() + 7);
        restart(time)
      }}>Restart</button>
    </div>
  );
}

    console.log('props from timer')
    console.log(props)
  const time = new Date();
  time.setSeconds(time.getSeconds() + 7); // 10 minutes timer
  return (
    <div>
      <Watch expiryTimestamp={time} />
    </div>
  );
}
