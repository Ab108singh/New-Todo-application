import React from 'react'
import Todos from './component/todo/Todos'


const App = () => {
  return (
    <div className='bg-gradient-to-r from-green-200 to-red-300 flex h-screen flex-col  items-center'>
      <h1 className='text-[30px] p-3 font-bold  '>
        <span className='text-green-600'>Todo</span>
        <span className='text-green-500'>-m</span>
        <span className='text-red-500'>y-</span>
        <span className='text-red-600'>day</span>
        
        </h1>
    <Todos/>
    </div>
  )
}

export default App
