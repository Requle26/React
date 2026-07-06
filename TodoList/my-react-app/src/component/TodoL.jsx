import { useState } from "react"
import TodoI from "./TodoI"
import { useState } from "react"

export default function TodoL() {
    let [todos, setTodos] = useState([
        {id: 1, content: "잠자기"},
        {id: 2, content: "밥먹기"},
        {id: 3, content: "놀기"}
    ]);
    return(
        <div>
            <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.id} - {todo.content}
                </li>
            ))}
            </ul>
        </div>
    )
}