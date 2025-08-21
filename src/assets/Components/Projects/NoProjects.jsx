import logo from  "../../Images/logo.png"
import Btn from '../NewProject/Btn'
import { useProjectContext } from '../../storage/ProjectContext'
const NoProjects = () => {
  const {setView} = useProjectContext();
  return (
    <div className='w-full h-full flex items-center justify-center gap-3 flex-col '>
        <img src={logo} className='w-30'></img>
        <h2 className='text-2xl font-bold text-[var(--heading-text-light)] tracking-tight '>No Project Selected</h2>
        <p className=' text-[var(--para-text-light)] tracking-wide'>Select a project or get started with a new one</p>
        <Btn handleClick={()=> setView("createProject")} classname={"px-5 py-2  mt-4 text-[var(--heading-text-dark)] bg-[var(--bg-light-dark)] hover:bg-[var(--bg-md-dark)]  "} >Create New Project</Btn>
    </div>
 )
}

export default NoProjects
