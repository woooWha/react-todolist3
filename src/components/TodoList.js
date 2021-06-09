import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
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
    const todos = useTodoState();
    return (
        <TodoListBlock>
        {todos.map((todo)=>{return (
            <TodoItem Text={todo.text} done={todo.done} id={todo.id} key={todo.id} />
        )})}
        </TodoListBlock>
    )
}

export default TodoList;