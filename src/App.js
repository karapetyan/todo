import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './containers/Search';
import AddTodo from './containers/AddTodo';
import ShowTodoList from './containers/TodoList';
import Filter from './containers/Filter';

const App = () => 
  <div className="App">
    <h1>First React-Redux App</h1>
    <Search />
    <AddTodo />
    <ShowTodoList />
    <Filter /> 
  </div>


export default App;
