import React from 'react';
import styled from 'styled-components';

const TodoTimeBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid rgba(134, 142, 150, 0.2);
    h1{
        font-size: 36px;
        font-weight: bold;
        margin: 0;
        color: skyblue;
    }
    p.day {
        font-size: 21px;
        font-weight: 300;
        color: rgba(134, 142, 150);
        margin-top: 4px;
    }
    p.leftTask {
        font-size: 18px;
        font-weight: bold;
        color: skyblue;
        margin-top: 40px;
    }
    p {
        margin: 0;
    }
`

function TodoTime({todos}){
    const leftTasks = todos.filter(todo => todo.done === false)

    const today = new Date();
    const yearName = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});
    return (
        <TodoTimeBlock>
            <h1>{yearName}</h1>
            <p className="day">{dayName}</p>
            <p className="leftTask">할 일 {leftTasks.length}개 남음</p>
        </TodoTimeBlock>
    )
}

export default TodoTime;