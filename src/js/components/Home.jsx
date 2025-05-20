import React, { useState, useEffect } from "react";
import Counter from "./Counter"; // ensure capitalization matches file name

const Home = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="text-center">
      <Counter seconds={seconds} />
    </div>
  );
};

export default Home;