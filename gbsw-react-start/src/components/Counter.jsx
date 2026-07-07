import { useEffect } from "react";
import { useState } from "react";
import Even from "./Even";


function Counter({ name }) {
    // 상태 (state)
    // 리엑트는 기본적으로 state가 변경되어야 재랜더링을 요청한다.
    // 따라서 기존 변수의 경우 값은 바뀌더라도 재랜더링이 발생하지 않는다.
    // useState 등 상태 값을 이용해 적절한 방법을 ㅗ상태 변경이 일어나면 재랜더링이 발생한다.

    // let [state, setState] = useState(기본값)

    // let current = 0; 값은 바뀌어도 재랜더링 X
    let [current, setCurrent] = useState(0)

    // Lifecycle 중 Mount에 해당하는 과정
    // 의존성 배열을 비운경우,
    // 해당 useEffect는 컴포넌트가 마운트 된다, 
    useEffect(() => {
        const id = setInterval(() => {
            console.log("blink")
        }, 1000);
        console.log("생성", id)

        return () => {
            console.log("클린업");
            clearInterval(id);
        };
    }, []);

    
    
    // Lifecycle 중 Update에 해당하는 과정
    // 카운터의 current값이 100이 되면 alert 출력, 그 외에는 로그 출력
    // 의존성 배열에는 1개 이상의 의존성을 설정 가능
    useEffect(() => {
        if (current == 100) {
            alert(100);
        } else {
            console.log(current);
        }
    }, [current]);

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
            {/* { current % 2 == 0 && <Even /> } */}
        </div>
    );
}

export default Counter;