import React, { useState, useRef, useEffect } from 'react'
import ToDoList from './ToDoList';

function App() {
  const storedTodos = JSON.parse(localStorage.getItem('todos'))
  const [todos, setToDos] = useState(storedTodos)
  const todoNameRef = useRef()

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setToDos(newTodos)
    console.log('test')
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === '') return
    setToDos(prevTodos =>{
      return [...prevTodos, {id:name, name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setToDos(newTodos)
  }

  return (
    <>
      <ToDoList todos = {todos} toggleTodo = {toggleTodo}/>
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
