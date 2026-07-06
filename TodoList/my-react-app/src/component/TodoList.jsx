import { useState } from "react"

export default function TodoList() {
    const [todos, setTodos] = useState(["잠자기", "밥먹기"])
    const [inputText, setInputText] = useState("");
    const AddTodo = function() {
        if (inputText.trim() === "") return;
        setTodos([...todos, inputText])
        setInputText("");
    };

    return (
        <div>
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
            <button onClick = {AddTodo}>추가</button>
            <ul>
                {todos.map((todo) => (
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    )
}