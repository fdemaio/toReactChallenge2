import React from 'react'

export function TodoItem({toDo}) {
    const {id, task, status} = toDo;
    
    return (
        <li>
            {task}
        </li>
    )
}
