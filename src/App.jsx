import React, { Fragment, useState, useRef} from 'react';
import {v4 as uuidv4} from "uuid";
import { ToDoList } from './components/ToDoList';

export function App() {

  const [listaToDo, setListaToDo] = useState([{id:uuidv4(), task:"tarea de prueba", status: false}]);

  const [validate, setValidate] = useState('default');
  
  const toDoTaskRef = useRef();
  
  const toggleToDo = (id) => {
    const newToDos = [...listaToDo];
    const toDo = newToDos.find((toDo) => toDo.id===id);
    toDo.status = !toDo.status;

    setListaToDo(newToDos);
  }

  const handleToDoAdd = () => {
    const task = toDoTaskRef.current.value;
    if(task ===''){ 
      setValidate('error')
    }
    else{    
      setListaToDo((prevToDo) =>{ 
        return [...prevToDo, {id:uuidv4(), task, status:false}];
        
      });
      toDoTaskRef.current.value = null;
      setValidate('success')
    }

    setTimeout(()=>{
      setValidate('default');
    }, 1500 );
  }

  const handleClearDone = () => {
    const newListaToDo = listaToDo.filter((todo) =>!todo.status);
    setListaToDo(newListaToDo); 
  }

  return (
      <Fragment>
        <ToDoList listaToDo={listaToDo} toggleToDo={toggleToDo}/>
        <input 
          className={validate} 
          ref={toDoTaskRef} 
          type="text" 
          placeholder="Nueva Tarea" />
        <button onClick={handleToDoAdd}>
          +
        </button>
        <button onClick={handleClearDone} >
          -
        </button>

        <div>Tareas restantes: {listaToDo.filter((todo) =>!todo.status).length } </div>
      </Fragment>
  )
}
