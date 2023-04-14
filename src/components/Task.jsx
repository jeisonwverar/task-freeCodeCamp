import React,{useState} from 'react';
import { TaskForm } from './TaskForm';
import TaskContainer from './TaskContainer';
const initialData={
  id,
  taskName,
};
const Task = () => {
  const [data, setData] = useState(initialData)
  const [List, setList] = useState([])
  return (
    <div className='task'>
      <h2 className='task-title'>Mis tareas</h2>
      <TaskForm setData={setData} data={initialData}/>
      <TaskContainer/>
    </div>
  )
}

export default Task;