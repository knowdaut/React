import { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const timerId = setInterval(setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span className="clock">
      {date.toLocaleTimeString()}
    </span>
  );
}
export default Clock;