import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const topics = ["React", "JavaScript", "CSS"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My Tech List</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {topics.map((item, index) => (
          <li key={index} style={{ margin: "10px 0", fontSize: "20px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>

  )
}

export default App
