import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterApp from './component/CounterApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CounterApp/>
    </>
  )
}

export default App
