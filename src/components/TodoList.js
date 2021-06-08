import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 32px 32px 48px 32px;
    background-color: ghostwhite;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    padding-bottom: 48px;
    overflow-y: auto;
`

function TodoList(){
    return (
        <TodoListBlock>
            <TodoItem Text={'안녕'} done={true}></TodoItem>
            <TodoItem Text={'안녕'} done={true}></TodoItem>
            <TodoItem Text={'안녕'} done={false}></TodoItem>
            <TodoItem Text={'안녕'} done={false}></TodoItem>
        </TodoListBlock>
    )
}

export default TodoList;