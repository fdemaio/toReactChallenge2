import React from 'react'

export function ToDoItem({toDo, toggleToDo}) {
    const {id, task, status} = toDo;
    
    const handleChange = () => {
        toggleToDo(id);
    }

    return (
        <li >
           <input type="checkbox" checked={status} onChange={handleChange} />
           {task}
        </li>
    )
}
