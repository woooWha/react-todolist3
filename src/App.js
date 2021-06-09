import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoLayout from './components/TodoLayout';
import {createGlobalStyle} from 'styled-components';
import TodoTime from './components/TodoTime';
import TodoList from './components/TodoList';
import TodoChecking from './components/TodoChecking';
import {TodoProvider} from './TodoContext';

function App() {
  const GlobalStyle = createGlobalStyle`
    body {
      background: saddlebrown;
    }
`;

  return (
    <>
      <TodoProvider>
        <GlobalStyle></GlobalStyle>

        <TodoLayout>
          <TodoTime></TodoTime>
          <TodoList></TodoList>
          <TodoChecking open={false}></TodoChecking>
        </TodoLayout>
      </TodoProvider>
    </>
  );
}

export default App;
