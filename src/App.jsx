import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Task from './components/task';
function App() {
  

  return (
    <div className="App">
      <h1 className='logo'>Task</h1>
      <Task/>
    </div>
  )
}

export default App
