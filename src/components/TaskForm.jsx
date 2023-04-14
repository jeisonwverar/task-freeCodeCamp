

export const TaskForm = ({setData,initialData}) => {
    const hadleChange=(e)=>{
        console.log(e.tarjet.value)
    }
    const hadleSubmit=()=>{

    }
  return (
    <form className='task-form' onChange={hadleChange}>
        <input type="text" name={initialData.taskName} value={''}/>
        <input type="submit" value="Enviar" />
    </form>
  )
}
