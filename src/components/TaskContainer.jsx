import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"
const TaskContainer = ({id,task,completed,completedTask,deleteTask}) => {
  return (
    <div className='task-container'>

        <div className={completed?"task-card completed":'task-card'}>
          <div className="task-text" onClick={()=>completedTask(id)}>
            {task}
          </div>
          <button className='task-contenedor-icons' onClick={()=>deleteTask(id)}><AiOutlineCloseCircle className='task-icon'/></button>
        </div>
    </div>
  )
}

export default TaskContainer;