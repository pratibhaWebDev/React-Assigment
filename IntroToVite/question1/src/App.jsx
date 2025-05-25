import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Increment =()=>{
    setCount(count+1)
  }
  const Decrement =()=>{
    if(count>0){
      setCount(count-1)
    }
    
  }

  return (
    <>
     
      <h1>React Counter</h1>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={Increment}>
         Increment
        </button>

        <h1></h1>

        <button onClick={Decrement}>
        Decrement
        </button>
        </div>
    </>
  )
}

export default App
