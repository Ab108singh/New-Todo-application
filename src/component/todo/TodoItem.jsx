import React, { useState } from "react";

const TodoItem = ({ todo, setPending, setDone, setDelete, setUpdate }) => {
 

  return (
    <div
      className={
        "text-3xl flex flex-row justify-between items-center px-4 py-3 mx-4 my-5 cursor-pointer rounded-[5px] " +
        (todo.status == "pending" ? "bg-red-500" : "bg-green-400") +
        " "
      }
    >
      <div className="text-3xl  flex flex-row gap-2 items-center   text-[25px]">
        <input
          className="size-[19px] "
          type="checkbox"
          checked={todo.status === "done"}
          onChange={
            todo.status == "pending"
              ? () => setDone(todo.id)
              : () => setPending(todo.id)
          }
        />
        <h3
          className=""
          onClick={
            todo.status == "pending"
              ? () => setDone(todo.id)
              : () => setPending(todo.id)
          }
        >
          {todo.des}
        </h3>
      </div>
      {
        <button
          className={" rounded px-2 text-sm w-[80px] h-[35px] "+(todo.status == "done" ? "bg-red-500" : "bg-white") +""}
          onClick={
            todo.status == "pending"
              ? () => setUpdate(todo.id, todo.des, true)
              : () => setDelete(todo.id)
          }
        >
          {todo.status == "pending" ? "update" : "delete"}
        </button>
      }
    </div>
  );
};

export default TodoItem;
