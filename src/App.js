import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoLayout from './components/TodoLayout';
import { createGlobalStyle } from 'styled-components';
import TodoTime from './components/TodoTime';
import TodoList from './components/TodoList';
import TodoChecking from './components/TodoChecking';


let nextId = 5
function App() {
  const GlobalStyle = createGlobalStyle`
    body {
      background: saddlebrown;
    }
`;

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '프로젝트 생성하기',
      done: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링하기',
      done: true
    },
    {
      id: 3,
      text: 'Context 만들기',
      done: false
    },
    {
      id: 4,
      text: '기능 구현하기',
      done: false
    }
  ])

  const todoCheckToggle = id =>
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo))


  const onRemove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  const todoInsertOn = (text) => {
    if (text === "") {
      return alert('할일을 입력해주세요')
    } else {
      const todo = {
        id: nextId,
        text,
        done: false
      }
      setTodos(todos.concat(todo))
      nextId++;
    }
  }

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <TodoLayout>
        <TodoTime todos={todos}></TodoTime>
        <TodoList onRemove={onRemove} todos={todos} todoCheckToggle={todoCheckToggle}></TodoList>
        <TodoChecking todoInsertOn={todoInsertOn}></TodoChecking>
      </TodoLayout>
    </>
  );
}

export default App;
