import { useEffect, useState } from "react";
import NoProjects from "./NoProjects";
import ProjectRouter from "../Project-route/ProjectRouter";
import CreateProject from "../CreateProject/CreateProject";
import ShowProject from "../ShowProjects/ShowProject";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [view, setView] = useState("none");
  const projectSelected = typeof view === "object";

  function createNewProject() {
    setView("createProject");
  }
  function saveProject(title, desc, date) {
    setProjects((prevProjects) => {
      const copy = [
        ...prevProjects.map((project) => ({
          ...project,
          tasks: [...project.tasks],
        })),
        { title, desc, date, tasks: [] },
      ];
      return copy;
    });
    cancel();
  }
  function cancel() {
    setView("none");
  }
  function handleActive(project) {
    // setView((prev) => {
    //   const selected = projects.find((item) => item.title === title);
    //   if (!selected) return "none";
    //   return selected;
    // });
    setView(project || none)
  }
  function deleteProject(title) {
   setProjects(cur => cur.filter(project => project.title !== title));
  setView("none");
  }
  function deleteTask(title, index) {
    setProjects((prev) => {
      const copy = prev.map((project) =>
        project.title === title ? { 
          ...project,
          tasks:[ ...project.tasks.filter((_, i)=> index !== i)]
         } : project
      );
      setView(()=> copy.find(item => item.title ===title))
      return copy;
    });
  }
  function addTask(title, task){
    setProjects(cur =>{
      const newProject = cur.map(project => project.title === title ? {
        ...project,
        tasks:[ ...project.tasks, task]
      }: project)
      setView(() => (newProject.find((item) => item.title === title)))
      return newProject;
    })
     
  }
  useEffect(()=> console.log(projects), [projects])
  return (
    <section className="w-full h-full">
      <ProjectRouter
        handleClick={createNewProject}
        projects={projects}
        isActive={projectSelected}
        handleActiveProject={handleActive}
      />
      {view === "none" && <NoProjects handleClick={createNewProject} />}
      {view === "createProject" && (
        <CreateProject cancel={cancel} saveNewProject={saveProject} />
      )}
      {typeof view === "object" && (
        <ShowProject project={view} removeProject={deleteProject} removeTask={deleteTask} cancel={cancel} addTask={addTask}/>
      )}
    </section>
  );
}
