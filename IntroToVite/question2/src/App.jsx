import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleButton from './componets/ToggleButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Toggle Button Example</h1>
      <ToggleButton/>
    </>
  )
}

export default App
