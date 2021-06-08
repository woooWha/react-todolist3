import React from 'react';
import styled from 'styled-components';

const TodoTimeBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid rgb(134, 142, 150, 0.2);
    h1{
        font-size: 36px;
        font-weight: bold;
        margin: 0;
        color: skyblue;
    }
    p.day {
        font-size: 21px;
        font-weight: 300;
        color: rgb(134, 142, 150);
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

function TodoTime(){
    return (
        <TodoTimeBlock>
            <h1>2021년 6월 8일</h1>
            <p className="day">화요일</p>
            <p className="leftTask">할 일 2개 남음</p>
        </TodoTimeBlock>
    )
}

export default TodoTime;