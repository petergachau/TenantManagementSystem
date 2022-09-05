import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const Projects = () => {
    
        const dispatch=useDispatch()
        const { projects } = useSelector((state) => ({ ...state.project }));
        console.log(projects);
  return (
    <div>
      {projects.map((i)=>{
        return(
          <div>
            {i.name}
          </div>
        )
      })}
    </div>
    
  )
  }
export default Projects
// import React from 'react'

// const Projects = () => {
//   return (
//     <div>Projects</div>
//   )
// }

// export default Projects