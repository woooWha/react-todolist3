import React from 'react';
import styled, {css} from 'styled-components';
import {MdDelete, MdDone} from 'react-icons/md';

function TodoItem({todo, todoCheckToggle,onRemove}){

const{id, text ,done} = todo;

    const TodoRemove = styled.div`
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: red;
    }
    display: none;
    
`
const TodoItemBlock = styled.div`
    margin-bottom: 24px;
    &:hover {
        ${TodoRemove}{
            display: block;
        }
    }
    display: flex;
    align-items: center;
`;


const TodoCheck = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,0.2);
    font-size: 24px;
    color: #38d9a9;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    ${props => 
        props.done && 
    css`
        border: 1px solid #38d9a9;
    `}
`;



const TodoText = styled.div`
    flex: 1;
    color: rgba(0,0,0,1);
    font-size: 21px;
    ${props => props.done &&
    css`
    color: rgba(0,0,0,0.2);
    `}
`;


    return(
        <TodoItemBlock> 
            <TodoCheck onClick ={() => {todoCheckToggle(id)}} done={done}>{todo.done && <MdDone  />}</TodoCheck>
            <TodoText done={done}>{todo.text}</TodoText>
            <TodoRemove >
                <MdDelete onClick={()=>{onRemove(id)}}></MdDelete>
            </TodoRemove>
        </TodoItemBlock>
    )
}

export default TodoItem;