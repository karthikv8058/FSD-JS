import { useState, useEffect } from "react";

import CounterButton from "./CounterButton";

function CountApp() {
  // state
  const [count, setCount] = useState(0);

  // function handleIncrement() {
  //   setCount(count + 1);
  // }
  useEffect(() => {
    console.log("Component loaded!!!");
  });

  // only once
  useEffect(() => {
    console.log("Component loaded, only once");
  }, []);

  useEffect(() => {
    console.log("Component loaded, state changed");
  }, [count]);

  useEffect(() => {
    console.log("Component");
    return () => {
      console.log("Component unmount");
    };
  }, []);

  return (
    <>
      <h2>Count : {count}</h2>
      <CounterButton
        handleIncrement={() => setCount(count + 1)}
        label={"Increment"}
      />
      <CounterButton handleIncrement={() => setCount(0)} label={"Reset"} />
      <CounterButton
        handleIncrement={() => setCount(count - 1)}
        label={"Decrement"}
      />
      {/* <button onClick={() => setCount(count + 1)}> Increment + </button> */}
      {/* <button onClick={() => setCount(0)}> Reset </button>
      <button onClick={() => setCount(count - 1)}> Decrement - </button> */}
    </>
  );
}

export default CountApp;
