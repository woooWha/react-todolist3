import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';

const TodoCreateForm = styled.form`
    padding: 32px 32px 72px 32px;
    background: skyblue;
    border-top: 1px solid rgba(0,0,0,0.4);
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
`;

const TodoCreateInput = styled.input`
    width: 100%;
    font-size: 18px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 4px;
    color: black;
    padding: 12px;
    outline: none;
    box-sizing: border-box;
`;

const TodoCreateCheck = styled.button`
    width: 80px;
    height: 80px;
    z-index: 5;
    background: blueviolet;
    color: white;
    cursor: pointer;
    font-size: 60px;
    border: none;
    outline: none;
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
    transition: 0.125s all ease-in;
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

function TodoChecking(){

    const [open, setOpen] = useState(false);

    const onToggle = () => setOpen(!open);

    return(
        <>
            {open && (
                <TodoCreateForm open={open}>
                    <TodoCreateInput autoFocus placeholder="할 일을 입력 후, Enter를 누르세요"></TodoCreateInput>
                </TodoCreateForm>
                )
            }
            <TodoCreateCheck onClick={onToggle} open={open}><MdAdd /></TodoCreateCheck>
        </>
    )
}

export default TodoChecking;