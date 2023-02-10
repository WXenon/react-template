import React, { useState, useRef, useEffect } from 'react'
import ToDoList from './ToDoList';
import AppHeader from './common/components/AppHeader'
import css from './css/app.css'
  
class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      tab: 'About'
    }
    this.setTab = this.setTab.bind(this);
  }
  
  setTab(tab) {
    console.log(tab)
    this.setState({ tab:tab })
  }
  
  render() {
    return (
      <div className='app'>
        <AppHeader tab={this.state.tab} setActiveTab={this.setTab}/>
        {/* <ToDoList todos = {todos} toggleTodo = {toggleTodo}/>
        <input ref={todoNameRef} type="text"/>
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodos}>Clear Completed Todos</button>
        <div>{getToDoLength()} left to do</div> */}
      </div>
    );
  }
}
  
export default App;
