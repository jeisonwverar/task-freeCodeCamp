import React,{useState} from 'react';
import { TaskForm } from './TaskForm';
import TaskList from './TaskList';
const initialData={
  id:null,
  taskName:'',
};
const Task = () => {
  const [data, setData] = useState(initialData);
  const [List, setList] = useState([])
  return (
    <div className='task'>
      <TaskForm setData={setData} data={initialData}/>
      <h2 className='task-title'>Mis tareas</h2>
      <TaskList task={List}/>
    </div>
  )
}

export default Task;