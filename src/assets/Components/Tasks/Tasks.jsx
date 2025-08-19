import {  useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Btn from "../NewProject/Btn";
const InputText = styled.input`
  outline: none;
  border-bottom: 1px solid black;
  padding: 5px;
  flex-basis: 70%;
  display: inline-block;
  transition: all 0.3s ease-in-out;
`;
export default function Tasks({ removeTask, title, tasks, addTask }) {
  
  const taskRef = useRef(null);
  const [edit, setEdit] = useState(false);
  function handleTask() {
    setEdit((cur) => !cur);
// 
  }

  function handleAddTask() {
    if (taskRef.current.value) addTask(title, taskRef.current.value);
    setEdit(false);
  }
useEffect(()=>{
    if(edit) taskRef.current.focus();

},[edit])
  return (
    <div className="px-10 mt-4 w-full h-full">
      <div className="task-header flex justify-between">
        <h2 className="text-2xl font-bold  tracking-wider">Tasks</h2>
        <div className=" basis-1/2 flex justify-end items-center gap-10">
          {edit && <InputText type="text" ref={taskRef} />}
          <Btn
            classname="w-23 py-2 bg-purple-300 text-red-900 self-end"
            handleClick={edit ? handleAddTask : handleTask}
          >
            {edit ? "Save" : "New Task"}
          </Btn>
        </div>
      </div>
      <div className="w-full  p-3 shadow-2xl h-50 overflow-y-scroll mt-10">
        <ul>
          {tasks.map((task, index) => {
            return (
              <>
                <li key={index} className="flex justify-between items center ">
                    <p className="w-4/5 "><span className="mr-3 inline-block font-semibold">{index+1})</span> {task}</p>
                <button key={index} onClick={() => removeTask(title, index)} className="cursor-pointer text-red-500 font-semibold">Delete</button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
