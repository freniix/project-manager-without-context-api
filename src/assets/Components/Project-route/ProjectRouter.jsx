import { createPortal } from "react-dom";
import Btn from "../NewProject/Btn";
import { useState } from "react";
import { useProjectContext } from "../../storage/ProjectContext";

  const listClasses ="w-full px-5 font-light text-xl active:bg-zinc-800  py-2 capitalize mt-3 rounded hover:bg-zinc-900 cursor-pointer" ;
  const h2Classes = "text-center font-semibold text-3xl font-sans";
  const btnClasses = "px-5 py-2  mt-4 text-[var(--heading-text-dark)] bg-[var(--bg-light-dark)] hover:bg-[var(--bg-md-dark)] "
  let hii ;
  

const ProjectRouter = () => {
  const {setView,view,  projects =[]  } = useProjectContext();
  const [activeIndex, setActiveIndex] = useState(null);
  
  
  function handleListClick(project, index){
    setActiveIndex(index);
    setView(project)
    // setActiveIndex(null)
  }


  return createPortal(
    <  >
    <h2 className={h2Classes} >Your Projects</h2>
        <Btn handleClick={()=> setView("createProject")} classname={btnClasses}>+ Add a new project</Btn>
        <ul className=""> 
          {
            projects.map((project, index)=>{
              return(
                <li key={project.title} onClick={()=> handleListClick(project, index)} className={`${listClasses} ${(activeIndex === index && typeof view === "object") ? "bg-zinc-800": "bg-zinc-950"} `}>{project.title}</li>
              )
            })
          }
        </ul>
    </>,
    document.querySelector("#portal")
  );
};

export default ProjectRouter;
