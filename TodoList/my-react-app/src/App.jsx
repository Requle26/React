import Header from "./component/Header";
import Footer from "./component/Footer";
import TodoList from "./component/TodoList";
// import TodoItem from "./component/TodoItem";
import { useState } from "react";


export default function App() {
  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState(["집 가고싶다", "밥먹기", "잠자기"])
  const addTodo = () => {
    <TodoList Props={inputValue} />
  }
  return (
    <div>
      <Header />
      <h1>Todo List 입니다.</h1>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addTodo}>추가</button>
      <TodoList Props={inputValue}/>
      <Footer />
    </div>
  );
}
