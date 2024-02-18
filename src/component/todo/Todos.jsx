import React, { useState } from 'react'
import TodoItem from './TodoItem'
import Inputtd from './Inputtd';
import Model from './Model';



const Todos = () => {

  const[tdlist,setTdlist]=useState(JSON.parse(localStorage.getItem("todos") )||[]);
  const[upd,setUpd]=useState(false);
  const[ulid,setUlid]=useState(-1);
  const[ival,setIval] = useState("");
  
  
 const addTodo =(a)=>{
if(!a.trim()) {
  alert("input field required");
  return;
}
  let s= tdlist.length?tdlist[tdlist.length-1].id:0;
  let b ={
     id:s+1,
     des:a,
     status:"pending"
  }
  setTdlist([...tdlist,b]);
 
localStorage.setItem("todos",JSON.stringify([...tdlist,b]))
 }

 const setPending=(sid)=>{
  console.log("setdone function is being called with id" + sid)
  let newtodo =tdlist.map((todo)=>{
       if(todo.id==sid){
        todo.status="pending";
        console.log(todo);
       }
      
       return todo
  })
  setTdlist(newtodo)
  localStorage.setItem("todos",JSON.stringify(newtodo))
 }
 const setDone=(lid)=>{
  console.log("setdone function is being called with id" + lid)
    let newtodo=tdlist.map((todo)=>{
         if(todo.id==lid){
          todo.status="done";
          console.log(todo);
         }
        
         return todo
    })
    setTdlist(newtodo);
    localStorage.setItem("todos",JSON.stringify(newtodo))
 }
 
 const setDelete=(lid)=>{
  
  let newTodoList = tdlist.filter((todo) => todo.id !== lid);
  setTdlist(newTodoList);
 
  localStorage.setItem("todos",JSON.stringify(newTodoList))
 }


 const setUpdate=(lid,des,f)=>{
  setIval(des);
  setUlid(lid);
  setUpd(true);
 }



 const doneAll =()=>{
  let newtodo=tdlist.map((todo)=>{
    
     todo.status="done"
   
    return todo
})
setTdlist(newtodo);
localStorage.setItem("todos",JSON.stringify(newtodo))
 }
 
 const deleteAll=()=>{
  setTdlist([]);
 }


 const closepop=()=>{
  setUpd(false);
 }
 const updateData =(val)=>{
  let newtodo = tdlist.map((todo)=>{
    if(todo.id==ulid){
      todo.des=val;
    }
    return todo;
  })
  setTdlist(newtodo);
  localStorage.setItem("todos",JSON.stringify(newtodo))
 }


  return (
    <div>

    <div className='bg-gradient-to-r from-green-300 to-red-400 w-[90vw] max-w-[800px]  p-1'>
      <Inputtd addTodo={addTodo}/>
        {
          tdlist.map((todo)=>{
            return <TodoItem key={todo.id} todo={todo} setPending={setPending} setDone={setDone} setDelete={setDelete} setUpdate={setUpdate}/>
          })
      
        }
        {upd&&<Model closepop={closepop} updateData={updateData} ival={ival}/>}
        
    
    </div>
    <button onClick={doneAll} className=" bg-green-400 text-sm p-3 m-4 border-2 border-green-600 rounded-md">
  Mark All As Done
</button>
<button onClick={deleteAll} className="bg-red-400 text-sm p-3 m-4 border-2 border-red-700 rounded-md">
  Delete All
</button>
        </div>
  )
}

export default Todos

