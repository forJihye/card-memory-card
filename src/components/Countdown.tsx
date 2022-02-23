import { FC, useEffect, useRef } from "react";

const Countdown: FC<{
  start: number;
  end: number;
  callback?: () => void;
}> = ({start, end, callback,...props }) => {
  const span = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!span.current) return;
    const spanEl = span.current;
    let timer: number;

    spanEl.innerText = start.toString();
    const dist = (start - end) / Math.abs(start - end) / 1;
    const f = () => timer = setTimeout(() => {
      const value = Number(spanEl.innerText);
      if (start > end) {
        if (value - dist < end) return callback?.(); //endgoto && send({type: 'goto', next: endgoto})
      } else {
        if (value - dist > end) return callback?.(); //endgoto && send({type: 'goto', next: endgoto})
      }
      spanEl.innerText = (value - dist).toString();
      f();
    }, 1000);
    
    f();
    return () => clearTimeout(timer);
  }, []);

  return <span {...props} ref={span}></span>
}

export default Countdown;