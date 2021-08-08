import React from 'react'
import { ToDoItem } from './ToDoItem'

export function ToDoList({listaToDo, toggleToDo}) {
    return (
        <ul>
            {listaToDo.map((toDo)=>(
                <ToDoItem key={toDo.id} toDo={toDo} toggleToDo={toggleToDo}/>
            ))}
        </ul>
    )
}
