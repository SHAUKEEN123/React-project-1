import { useState } from 'react'
function App() {
  let [Counter,setCounter]=useState(0);
  
  const incrementCounter=()=>{
    if(Counter<20){
    setCounter(Counter+1);
    }
  }

  const decrementCounter=()=>{
    if(Counter>0){
    setCounter(Counter-1);
    }
  }

  return (
    <div className='w-full h-screen bg-zinc-900 text-white text-2xl flex flex-col items-center justify-center'>
    
    <h1 className='text-4xl font-bold mb-6'>React Project</h1>
    <h2 className='text-2xl mb-4'>Counter is: {Counter}</h2>
 
    <div className="flex flex-row space-x-4">
    <button onClick={incrementCounter} className='rounded-lg bg-gray-400  px-6 py-3'>Add value</button>
    <button onClick={decrementCounter} className='rounded-lg bg-gray-400  px-6 py-3'>remove value</button>
    </div>
    </div>
  )
}

export default App
