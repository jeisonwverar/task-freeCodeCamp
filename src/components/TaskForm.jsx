

export const TaskForm = ({setData,data}) => {
    const hadleChange=(e)=>{
        console.log(e.target.value)
    }
    const hadleSubmit=()=>{

    }
  return (
    <form className='task-form' onChange={hadleChange}>
        <input type="text" name='task' value={data.taskName} className="" />
        <input type="submit" value="Enviar" />
    </form>
  )
}
