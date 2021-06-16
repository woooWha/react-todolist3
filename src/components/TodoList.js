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

function TodoList({todos, todoCheckToggle,  onRemove}){
    return (
        <TodoListBlock>
            {todos.map((todo)=> 
                <TodoItem  onRemove={onRemove} todoCheckToggle={todoCheckToggle} todo={todo} key={todo.id} />
            )}
        </TodoListBlock>
    )
}

export default TodoList;