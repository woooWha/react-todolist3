import React from 'react';
import styled from 'styled-components';

const TodoLayoutBlock = styled.div`
    width: 515px;
    height: 760px;
    background: white;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.7);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 96px;
    position: relative;
    border-radius: 24px;
`

function TodoLayout({children}){
    return (
        <TodoLayoutBlock>{children}</TodoLayoutBlock>
    )
}

export default TodoLayout;