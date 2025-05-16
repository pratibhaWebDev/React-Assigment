import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){
  // const [title, setTitle]= useState('React App');
  let ref= useRef(0)
  const changeTitle=()=>{
    document.title='raja'
    ref.current+=1;
    console.log('dom updated', ref.current)
  }
return (
  <>
   <button onClick={changeTitle}>Change Title</button>
  </>
)
}

export default App
