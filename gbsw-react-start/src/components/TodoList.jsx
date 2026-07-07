import { useRef, useState } from "react";


const TodoList = () => {
    // JSX + 컴포넌트 개념
    // props 를 이용한 컴포넌트 간 데이터 전달

    // useState -> 상태 관리
    // useEffect -> 특정 시점 혹은 특정 상황에서 코드 실행
    // useRef -> DOM 요소에 접근 및 조작

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

    const [text, setText] = useState("");
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const textRef = useRef();

    const handleOnClick = () => {
        if (text.length >= 5) {
            alert(text);
        } else {
            textRef.current.focus();
        };
    };


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

        
        <input ref={textRef} value={text} onChange={handleOnChange}/>
        <button onClick={handleOnClick}>확인</button>
    </div>
};

export default TodoList;