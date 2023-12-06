import React, {useState} from 'react';
import { useStopwatch } from 'react-timer-hook';




const MainStopwatch = ({ timerProps }) => {

      const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
      } = timerProps

  
    
  
    return (
      <>
        <div style={{ fontSize: '100px' }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
        {/* <div className='text-center'>
          <p>{isRunning ? 'Running' : 'Not running'}</p>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={reset}>Reset</button>
        </div> */}
      </>
    );
}

const HomeStopwatch = ({ homeStopwatchFunctions }) => {

    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
      } = homeStopwatchFunctions

  

  return (
    <>
      <div style={{ fontSize: '100px' }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div className='text-center'>
        <p>{isRunning ? 'In Possession' : 'Out of possession'}</p>
        <button onClick={start} disabled={isRunning} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
            Restart
        </button>
        {/* <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button> */}
      </div>
    </>
  );
}

const AwayStopwatch = ({ awayStopwatchFunctions }) => {

    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
      } = awayStopwatchFunctions

  

  return (
    <>
      <div style={{ fontSize: '100px' }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div className='text-center'>
        <p>{isRunning ? 'In Possession' : 'Out of possession'}</p>
        <button onClick={start} disabled={isRunning} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
            Restart
        </button>
        {/* <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button> */}
      </div>
    </>
  );
}



const App = () => {

    const timerProps = useStopwatch({ autoStart: false });
    const homeStopwatchFunctions = useStopwatch({ autoStart: false });
    const awayStopwatchFunctions = useStopwatch({ autoStart: false });

    const startClock = () => {
        timerProps.start()
        homeStopwatchFunctions.start()
    }

    const possessionSwitch = () => {
        if (homeStopwatchFunctions.isRunning == true) {
            homeStopwatchFunctions.pause()
            awayStopwatchFunctions.start()
        }
        else if (awayStopwatchFunctions.isRunning == true){
            awayStopwatchFunctions.pause()
            homeStopwatchFunctions.start()
        }
        else {
            
        }
     
    }

    const pauseClock = () => {
        awayStopwatchFunctions.pause()
        homeStopwatchFunctions.pause()
    }

    return (
        <>
            <div className='text-center'>
                <h1>Game Clock</h1>
                <MainStopwatch timerProps={timerProps} />
            </div>
            <div className='flex flex-row'>
                <div className='text-center basis-1/2'>
                    <h1>Home Team</h1>
                    <HomeStopwatch homeStopwatchFunctions={homeStopwatchFunctions}/>
                </div>
                <div className='text-center basis-1/2'>
                    <h1>Away Team</h1>
                    <AwayStopwatch awayStopwatchFunctions={awayStopwatchFunctions}/>
                </div>
            </div>
            <div className='text-center'>
                <button onClick={() => startClock()} disabled={timerProps.isRunning} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
                    Start
                </button>
                <button onClick={() => pauseClock()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
                    Pause
                </button>
                <button onClick={() => possessionSwitch()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
                    Switch
                </button>
            </div>
            <div className='flex flex-row'>
                <div className='text-center basis-1/2'>
                    <h1>Seconds with ball: <span className='font-bold'>{homeStopwatchFunctions.totalSeconds}</span></h1>
                    <h1>Percentage Possession: </h1>
                    <h1 style={{ fontSize: '50px' }}>
                        {((homeStopwatchFunctions.totalSeconds/(homeStopwatchFunctions.totalSeconds+awayStopwatchFunctions.totalSeconds))*100).toFixed(1)}%
                    </h1 >
                </div>
                <div className='text-center basis-1/2'>
                    <h1>Seconds with ball: <span className='font-bold'>{awayStopwatchFunctions.totalSeconds}</span></h1>
                    <h1 style={{ fontSize: '50px' }}>
                        {((awayStopwatchFunctions.totalSeconds/(homeStopwatchFunctions.totalSeconds+awayStopwatchFunctions.totalSeconds))*100).toFixed(1)}%
                    </h1 >
                </div>
            </div>
        </>
        
    );
}

export default App
