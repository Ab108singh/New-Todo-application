import React, { useState } from "react";

const Model = ({ closepop ,updateData,ival}) => {
  const[inpt,setInpt]=useState(" ");
  return (
    <div className="flex justify-center  fixed inset-0 bg-black bg-opacity-80  ">
      <div className="flex  flex-col text-center bg-gradient-to-r from-green-200 to-red-300 fixed top-[200px] w-[600px] h-2/4 rounded-[30px]">
        <div className="flex flex-col w-[600px] h-2/4  ">
          <button
            className="bg-white self-end mr-2 mt-2 h-[40px] w-[40px] text-xl rounded-full border-slate-500 border-2  "
            onClick={closepop}
          >
            X
          </button>
        </div>
        <div className="flex gap-3 justify-center flex-col pb-6 items-center w-">
          <p className="text-[45px]">Type your todo here ...</p>
          <input value={inpt==" "?ival+inpt:inpt} onChange={(e)=>{setInpt(e.target.value)}} className=" border-slate-500 border-2 w-3/4 h-16 rounded-lg text-[25px] " type="text" />
          <button onClick={()=>{updateData(inpt); closepop()}} className=" border-slate-500 border-2 w-[150px] h-10 rounded-lg bg-gradient-to-r from-green-500 to-red-500 ">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Model;
