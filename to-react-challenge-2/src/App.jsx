import React, { Fragment, useState, useRef} from 'react';
import {v4 as uuidv4} from "uuid";
import { ToDoList } from './components/ToDoList';

import './App.css'

export function App() {
  
  const [listaToDo, setListaToDo] = useState([]);
  
  const [state, setState] = useState();

  const toDoTaskRef = useRef();
  
  const toggleToDo = (id) => {
    const newListaToDo = [...listaToDo];
    const toDo = newListaToDo.find((item)=>item.id === id);
    toDo.status = !toDo.status;
    setListaToDo(newListaToDo);
  }

  const handleToDoAdd = () => {
    
    const task= toDoTaskRef.current.value.trim() ;

    if(task !==''){
      setListaToDo((prevToDo) =>{ 
        return [...prevToDo, {id:uuidv4(), task:task, status:false}];
      });
      setState('success');
    }
    else{ 
      setState('error');
    }
    toDoTaskRef.current.value = null;
    setTimeout(() => {
      setState('default')
    }, 1500);
  }
  
  const handleToDelete=()=>{

    const newToDos = listaToDo.filter((toDo) => !toDo.status);
    setListaToDo(newToDos);

  }

  return (
      <Fragment>
        <ToDoList 
          listaToDo={listaToDo} 
          toggleToDo={toggleToDo}/>
        <input 
          ref={toDoTaskRef} 
          type="text" 
          placeholder="Nueva tarea" 
          className={state}
          />
        <button onClick={handleToDoAdd} title="Add tasks">
          +
        </button>
        <button onClick={handleToDelete} title="Delete done tasks">
          -
        </button>
        <div>Restan {listaToDo.filter((toDo)=>!toDo.status).length} por realizar! </div>
      </Fragment>
  )
}
