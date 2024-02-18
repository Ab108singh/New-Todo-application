import React from 'react'
import Todos from './component/todo/Todos'


const App = () => {
  return (
    <div className='bg-gradient-to-r from-green-200 to-red-300 flex h-screen flex-col  items-center'>
      <h1 className='text-[45px] p-3  '>My Todo List</h1>
    <Todos/>
    </div>
  )
}

export default App
