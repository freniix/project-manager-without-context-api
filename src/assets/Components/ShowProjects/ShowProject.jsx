import React from "react";
import Btn from "../NewProject/Btn";
import CancelSave from "../CancelSave/CancelSave";
import Tasks from "../Tasks/Tasks";

const ShowProject = ({ project, removeTask, removeProject, cancel, addTask }) => {
  const {title, desc, date, tasks} = project;
  function remove(){
    console.log("remove")
    removeProject(title)
  }
  return (
    <div className="px-10 py-4 ">
      <CancelSave>
        <h2 className="mr-auto text-3xl font-bold font-mono capitalize self-end text-[var(--heading-text-light)]">
          {title}
        </h2>
        <Btn
          handleClick={remove}
          classname="bg-red-800 text-white px-5 py-2 hover:bg-red-700"
        >
          Delete
        </Btn>
        <Btn
          handleClick={cancel}
          classname="bg-zinc-900 text-white px-5 py-2 hover:bg-zinc-800"
        >
          Close
        </Btn>
      </CancelSave>

      <div className="pl-15">
        <p className="text-[var(--para-text-light)] font-semibold font-sarif mb-10">
          {date}
        </p>
        <div className="w-full h-20 border-b border-zinc-300">
          <p className="text-zinc-800 text-xl ">{desc}</p>
        </div>
      </div>
      <Tasks removeTask={removeTask} title={title} tasks={tasks} addTask={addTask}/>
    </div>
  );
};

export default ShowProject;
