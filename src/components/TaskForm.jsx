

export const TaskForm = ({setData,data}) => {
    const handleSubmit=(e)=>{
      const newTask={
        id:3456,
        task:''
      }
    }
  return (
    <form className='task-form' >
        <input type="text" name='task'  className="task-input" placeholder="Escribe una tarea"/>
        <button className="task-btn">Agregar tarea</button>
    </form>
  )
}
