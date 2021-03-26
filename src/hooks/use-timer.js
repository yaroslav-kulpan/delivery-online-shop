import { useEffect, useState, useRef } from "react";

const useTimer = () => {
  const [state, setState] = useState(Date.now());
  const ref = useRef(null);

  useEffect(() => {
    // let timerId;

      ref.current = setInterval(() => {
        setState(Date.now());
      }, 1000);

    return () => {
      clearInterval(ref.current);
    };
  }, [state]);
};

export default useTimer;
