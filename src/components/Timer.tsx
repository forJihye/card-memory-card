import React, {useState, useEffect, FC} from 'react';

const timeDivder = (time: number) => {
  const hr = Math.floor(time / (1000*60*60));
  const min = Math.floor(time / (1000*60)) - hr*60;
  const sec = Math.floor(time / 1000) - hr*60*60 - min*60;
  const ms = time % 1000;
  return {hr, min, sec, ms}
}
const format = ({min, sec}: {min: number; sec: number}) => [`${min}`.padStart(2, '0'), `${sec}`.padStart(2, '0')].join(':');

const Timer: FC<{
  time: number;
  timeout: () => void;
  stop?: boolean;
}> = ({time, timeout, stop, ...props}) => {
  const [timeRemained, setTimeRemained] = useState(time);
  const formatTime = format(timeDivder(timeRemained));
  
  useEffect(() => {
    let timer: number;
    timer = setTimeout(() => {
      if(timeRemained - 1000 <= 0){
        setTimeRemained(0);
        setTimeout(timeout, 1000);
      } else {
        setTimeRemained((prev) => prev - 1000);
      }
    }, 1000);
    
    stop && clearTimeout(timer);

    return () => clearTimeout(timer);
  }, [timeRemained]);

  return <div {...props}>{formatTime}</div>
}

export default Timer;