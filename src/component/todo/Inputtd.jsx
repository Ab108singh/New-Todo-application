import React, { useState } from 'react'

const Inputtd = (props) => {
      const[inpt,setInpt]=useState("");
      const handleChange=(e)=>{
        setInpt(e.target.value)
        
      }
  return (
    <div>
     
     <form action="submit" 
        onSubmit={(e)=>{
          e.preventDefault(); 
          props.addTodo(inpt);
          setInpt("");
        }}
     className='flex flex-row gap-2 text-xl justify-between px-4 pt-3 '>
        <input  type="text" placeholder='enter your todo here' value={inpt} onChange={handleChange} className='w-3/4 h-[40px] p-3 rounded-md' />
        <button className='bg-green-300 px-2 border-2 text-[13px] border-black rounded-md' >Add Todo</button>
     </form>
    
    </div>
  )
}

export default Inputtd
