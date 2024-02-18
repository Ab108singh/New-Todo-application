import React, { useState } from "react";

const Model = ({ closepop, updateData, ival }) => {
  const [inpt, setInpt] = useState("");

  return (
    <div className="flex justify-center fixed inset-0 bg-black  bg-opacity-80">
      <div className="flex flex-col text-center bg-gradient-to-r from-green-200 to-red-300 fixed top-[200px] sm:top-[20%] md:top-[15%] lg:top-[10%] xl:top-[5%] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-[600px]  pb-9 h-2/4 rounded-[30px]">
        <div className="flex flex-col w-full h-2/4">
          <button
            className="bg-white self-end mr-2 mt-2 h-[40px] w-[40px] text-xl rounded-full border-slate-500 border-2"
            onClick={closepop}
          >
            X
          </button>
        </div>
        <div className="flex gap-3 justify-center flex-col pb-6 items-center">
          <p className="text-[25px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px]">
          <span className='text-green-600'>Type </span>
        <span className='text-green-500'>your </span>
        <span className='text-red-500'>todo </span>
        <span className='text-red-600'>here</span>
          </p>
          <input
            value={inpt === "" ? ival + inpt : inpt}
            onChange={(e) => {
              setInpt(e.target.value);
            }}
            className="border-slate-500 border-2 w-3/4 sm:w-2/3 md:w-1/2 h-16 rounded-lg text-[20px] sm:text-[25px] md:text-[25px] lg:text-[30px] xl:text-[35px]"
            type="text"
          />
          <button
            onClick={() => {
              updateData(inpt);
              closepop();
            }}
            className="border-slate-500 text-lg font-bold border-2 w-[150px] sm:w-[200px] h-10 rounded-lg bg-gradient-to-r from-green-500 to-red-500"
          >
            <span className='text-green-200'>Up</span>
        <span className='text-green-100'>d</span>
        <span className='text-red-100'>a</span>
        <span className='text-red-200'>te</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
