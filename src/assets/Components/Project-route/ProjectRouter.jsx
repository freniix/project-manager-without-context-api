import { createPortal } from "react-dom";
import Btn from "../NewProject/Btn";
import { useState } from "react";


const ProjectRouter = ({handleClick, projects , handleActiveProject, isActive}) => {
  const listClasses ="w-full px-5 font-light text-xl active:bg-zinc-800  py-2 capitalize] mt-3 rounded hover:bg-zinc-900 cursor-pointer" 
  const [activeIndex, setActiveIndex] = useState(null)
  function handleListClick(project, index){
    setActiveIndex(index);
    handleActiveProject(project)
  }
  return createPortal(
    <  >
    <h2 className="text-center font-semibold text-3xl font-sans" >Your Projects</h2>
        <Btn handleClick={handleClick} classname={"px-5 py-2  mt-4 text-[var(--heading-text-dark)] bg-[var(--bg-light-dark)] hover:bg-[var(--bg-md-dark)] "}>+ Add a new project</Btn>
        <ul className=""> 
          {
            projects.map((item, index)=>{
              return(
                <li key={item.title} onClick={()=> handleListClick(item, index)} className={`${listClasses} ${activeIndex === index && isActive? "bg-zinc-800": "bg-zinc-950"}`}>{item.title}</li>
              )
            })
          }
        </ul>
    </>,
    document.querySelector("#portal")
  );
};

export default ProjectRouter;
