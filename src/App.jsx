import { StrictMode } from "react";
import Projects from "./assets/Components/Projects/Projects";
import ProjectsContextProvider from "./assets/storage/ProjectContext";
function  App() {
  return (
    // <StrictMode>
    <ProjectsContextProvider>
      <Projects />
    </ProjectsContextProvider>
    /* </StrictMode> */
  );
}
export default App;
