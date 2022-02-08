import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = (props) =>{
    // 클래스는 한번만 만들어짐 랜더만 계속 호출되지만
    // 함수는 계속 호출된다. useState() 알아서 자동으로 기억함

    const [count, setCount] = useState(0);
    // const spanRef = React.createRef(); // 반복적으로 하지 않기 위해 ..!
    const spanRef = useRef();
    
    const handleIncrement =  useCallback(() => { // 메모리에 저장가능
        setCount(count + 1);
    });

    useEffect(() => {
        console.log(`mounted & updated! ${count}`);
    }, []) //두번째 인자값을 비우면 처음만 호출합니다! 

    return (
    <li className="habit">
        <span ref = {spanRef} className='habit-name'>Reading</span>
        <span className='habit-count'>{count}</span>
        <button className='habit-button habit-increase' onClick={handleIncrement}>
            <i className="fas fa-plus-square"></i>
        </button>
    </li>);
    };

export default SimpleHabit;