import React,{useState} from 'react';
import { TaskForm } from './TaskForm';
import TaskContainer from './TaskContainer';
const initialData={
  id:null,
  taskName:'',
};
const Task = () => {
  const [data, setData] = useState(initialData)
  const [List, setList] = useState([])
  return (
    <div className='task'>
      <h2 className='task-title'>Escribe tu tarea</h2>
      <TaskForm setData={setData} data={initialData}/>
      <h2 className='task-title'>Mis tareas</h2>
      <TaskContainer />
    </div>
  )
}

export default Task;