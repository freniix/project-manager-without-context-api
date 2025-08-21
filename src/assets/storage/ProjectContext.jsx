import { createContext, useContext, useState } from "react";

const ProjectContext = createContext({
  projects: [],
  view: "",
  setView: () => {},
  saveProject: () => {},
  deleteProject: () => {},
  addTask: () => {},
  deleteTask: () => {},
});

export default function ProjectsContextProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [view, setView] = useState("none");
//
  function saveProject(newProject) {
    setProjects((prevProjects) => [...prevProjects, { ...newProject }]);
    setView("none");
  }

  function deleteProject(title) {
    setProjects((cur) => cur.filter((project) => project.title !== title));
    setView("none");
  }
  function deleteTask(title, index) {
    setProjects((prev) => {
      const copy = prev.map((project) =>
        project.title === title
          ? {
              ...project,
              tasks: [...project.tasks.filter((_, i) => index !== i)],
            }
          : project
      );
      return copy;
    });

    setView((cur) => {
      const updated = {
        ...cur,
        tasks: [...cur.tasks.filter((_, i) => i !== index)],
      };
      return updated;
    });
  }
  function addTask(title, task) {
    setProjects((cur) => {
      const newProject = cur.map((project) =>
        project.title === title
          ? {
              ...project,
              tasks: [...project.tasks, task],
            }
          : project
      );
      setView(() => newProject.find((item) => item.title === title));
      return newProject;
    });
  }

  const value = {
    projects,
    view,
    setView,
    saveProject,
    deleteProject,
    deleteTask,
    addTask,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export function useProjectContext() {
  return useContext(ProjectContext);

}
