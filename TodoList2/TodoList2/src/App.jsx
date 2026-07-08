import { useState } from "react"
import TodoButton from "../component/TodoButton"
import { use } from "react";

export default function App() {
  const [todos, setTodos] = useState(["hello", "안녕"]);
  const [input, setInput] = useState("");
  const addTodo = () => (
    setTodos([...todos, input])
  )
  return(
    <>
      <h1>TodoList</h1>
      <TodoButton test={todos}/>
      <input type="text" value={input} onChange={(e) => (setInput(e.target.value))} />
      <button onClick={addTodo}>추가</button>
    </>
  )
}