import { useState } from "react";
import "./App.css";
import CounterButton from "../component/CounterButton";

export default function App() {
  const [count, setCount] = useState(0);

  const hello = (text) => (
    setCount(count + Number(text))
  )

  return (
    <>
      <h1>Counter를 통한 양방향 props 전달 실습</h1>
      <div style={{fontSize: "36px"}}>
        <CounterButton test={hello} buttonText={"-1"}></CounterButton>
        <span>{count}</span>
        <CounterButton test={hello} buttonText={"+1"}></CounterButton>
      </div>
    </>
  )
}