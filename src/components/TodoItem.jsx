import React from 'react'

export function ToDoItem({toDo, toggleToDo}) {
    const {id, task, status} = toDo;
    
    const handleToDoClic = () =>{
        toggleToDo(id);
    };

    return (
        <li key={id}>
            <input type="checkbox" checked={status} onChange={handleToDoClic}/>
            {task}
        </li>
    )
}
