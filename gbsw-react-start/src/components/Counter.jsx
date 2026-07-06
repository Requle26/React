import { useState } from "react";


function Counter({ name }) {
    // 상태 (state)
    // 리엑트는 기본적으로 state가 변경되어야 재랜더링을 요청한다.
    // 따라서 기존 변수의 경우 값은 바뀌더라도 재랜더링이 발생하지 않는다.
    // useState 등 상태 값을 이용해 적절한 방법을 ㅗ상태 변경이 일어나면 재랜더링이 발생한다.

    // let [state, setState] = useState(기본값)

    // let current = 0; 값은 바뀌어도 재랜더링 X
    let [current, setCurrent] = useState(0)
    return (
        <div>
            <h1>Counter App</h1>
            <div>{current}</div>
            <p>제 이름은 {name}입니다.</p>
            <div>
                <button style={{margin: 5}} onClick = {() => {setCurrent(++current)}}>+1</button>
                <button style={{margin: 5}} onClick = {() => {setCurrent(--current)}}>-1</button>
                <button style={{margin: 5}} onClick = {() => {setCurrent(current = current + 100)}}>+100</button>
                <button style={{margin: 5}} onClick = {() => {setCurrent(current = current - 100)}}>-100</button>
            </div>
        </div>
    );
}

export default Counter;