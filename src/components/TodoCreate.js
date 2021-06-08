import React from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';

const TodoCreateForm = styled.form`
    padding: 20px 20px 40px 20px;
    background: rgba(0,0,0,0.2);
    border-top: 1px solid rgba(0,0,0,0.4);
    display: none;
    ${props => props.open &&
    css`
    display: block;
    `}
`;

const TodoCreateInput = styled.input`
    width: 100%;
    font-size: 24px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 8px;
    color: black;
    padding: 8px 0;
`;

const TodoCreateCheck = styled.div`
    width: 48px;
    height: 48px;
    background: blueviolet;
    color: white;
    &:hover {
        background: chartreuse;
    }
    &:active {
        background: coral;
    }
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.open && 
    css`
        transform: translate(-50%, 50%) rotate(45deg);
        background: red;
        &:hover {
            background: cornsilk;
        }
        &:active {
            background: darkblue;
        }
        
    `}
`

function TodoCreate({open}){
    return(
        <>
            <TodoCreateForm>
                <TodoCreateInput></TodoCreateInput>
            </TodoCreateForm>
            
            <TodoCreateCheck open={open}><MdAdd /></TodoCreateCheck>
        </>
    )
}

export default TodoCreate;