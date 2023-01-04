import React, { useState, useRef, useEffect } from 'react'
import ToDoList from './ToDoList';

const storageKey = 'todos'

function App() {
  const [todos, setToDos] = useState([])
  const todoNameRef = useRef()

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(storageKey))
    if(storedTodos){
      setToDos(prevTodos => [...prevTodos, ...storedTodos])
      console.log("T")
    } 
  }, [])

  useEffect(()=>{
    localStorage.setItem(storageKey, JSON.stringify(todos))
    console.log("test")
  }, [todos])

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === '') return
    setToDos(prevTodos =>{
      return [...prevTodos, {id:name, name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <>
      <ToDoList todos = {todos}/>
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
