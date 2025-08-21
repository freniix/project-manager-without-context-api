import NoProjects from "./NoProjects";
import ProjectRouter from "../Project-route/ProjectRouter";
import CreateProject from "../CreateProject/CreateProject";
import ShowProject from "../ShowProjects/ShowProject";
import { useProjectContext } from "../../storage/ProjectContext";
export default function Projects() {
  const {view} = useProjectContext();
  return (
    <section className="w-full h-full">
      <ProjectRouter />
      {view === "none" && <NoProjects />}
      {view === "createProject" && <CreateProject />}
      {typeof view === "object" && <ShowProject />}
    </section>
  );
}
