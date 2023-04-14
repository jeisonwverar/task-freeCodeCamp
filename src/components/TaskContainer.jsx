import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"
const TaskContainer = ({completed}) => {
  return (
    <div className='task-container'>

        <div className={ completed?"task-card completed":'task-card'}>
          <div className="task-text">
            tarea
          </div>
          <button className='task-contenedor-icons'><AiOutlineCloseCircle className='task-icon'/></button>
        </div>
    </div>
  )
}

export default TaskContainer