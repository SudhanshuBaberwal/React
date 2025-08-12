import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15)
  
  
  const addValue = ()=>{
    // console.log("Click ed" +counter)
    counter = counter + 1;
    setCounter(counter)
  }

  const removeValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai or react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
