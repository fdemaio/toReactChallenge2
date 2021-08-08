import React from 'react'
import { TodoItem } from './TodoItem'

export function TodoList({listaToDo}) {
    return (
        <ul>
            {listaToDo.map((toDo)=>(
                <TodoItem toDo={toDo} />
            ))}
        </ul>
    )
}
