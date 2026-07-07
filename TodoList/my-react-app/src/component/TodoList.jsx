import { useState } from "react"
import TodoItem from "./TodoItem"

export default function TodoList({ Props }) {
    const [todos, setTodos] = useState(["집 가고싶다", "밥먹기", "잠자기"])
    const addTodo = () => {
        setTodos([...todos, Props])
    }
    return (
        <div>
            <h1>TodoList</h1>
            <TodoItem />
        </div>
    )
}