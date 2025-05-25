import React from 'react'
import { useState } from 'react'

function ToggleButton() {

    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn); 
      }
  return (
    <div style={{background:isOn?"green":"red", height:"100vh",textAlign:"center",alignItems:"center"}}>
     <button onClick={handleToggle} style={{width:"100px", padding:"20px",textAlign:"center",borderRadius:"10px"}}>{isOn?"ON":"OFF"}</button>
    </div>
  )
}

export default ToggleButton
