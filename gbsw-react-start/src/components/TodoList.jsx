import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {id: 1, content: "잠자기"},
        {id: 2, content: "밥먹기"},
        {id: 3, content: "놀기"},
        {id: 4, content: "공부하기"}
    ]);
    
    console.log(todos)
    console.log(
        todos.map((todo) => {
            return todo.id;
        }),
    );
    return <div>
        <h1>TodoList 화면입니다.</h1>
        <ul>
            {/* map 함수 -> 순회하며 나온 결과로 새로운 리스트 생성 */}
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.id} - {todo.content}
                </li>
            ))}
        </ul>
    </div>
};

export default TodoList;