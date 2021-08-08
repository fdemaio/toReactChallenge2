import React, { Fragment, useState, useRef} from 'react';
import {v4 as uuidv4} from "uuid";
import { TodoList } from './components/TodoList';

export function App() {
  
  const [listaToDo, setListaToDo] = useState([
    {id:1, task:"tarea de prueba", status: false},
  ]);
  
    const toDoTaskRef = useRef();

    const handleToDoAdd = () => {
      const task = toDoTaskRef.current.value;
      if(task ==='') return;
      
      setListaToDo((prevToDo) =>{ 
         return [...prevToDo, {id:uuidv4(), task, status:false}];
      });
    }

  return (
      <Fragment>
        <TodoList listaToDo={[listaToDo]} />
        <input ref={toDoTaskRef} type="text" placeholder="nueva" />
        <button onClick={handleToDoAdd}>
          +
        </button>
        <button>
          Quitar
        </button>
      </Fragment>
  )
}
