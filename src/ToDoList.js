import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({ todos, toggleTodo }) {
    if(todos){
        return (
            todos.map(todo =>{
                return <ToDo key={todo.id} toggleTodo={toggleTodo} todo={todo}/>
            })
        )
    }
}
