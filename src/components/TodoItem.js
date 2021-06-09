import React from 'react';
import styled, {css} from 'styled-components';
import {MdDelete, MdDone} from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

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

function TodoItem({done, Text, id}){
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type: 'TOGGLE', id});
    const onRemove = () => dispatch({type: 'REMOVE', id});

    return(
        <TodoItemBlock>
            <TodoCheck onClick={onToggle} done={done}>{done && <MdDone />}</TodoCheck>
            <TodoText done={done}>{Text}</TodoText>
            <TodoRemove onClick={onRemove}>
                <MdDelete></MdDelete>
            </TodoRemove>
        </TodoItemBlock>
    )
}

export default TodoItem;