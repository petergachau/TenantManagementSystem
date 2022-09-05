import React from 'react'
import { useSelector } from 'react-redux';
import StudentProjectCreate from './StudentProjectCreate'
import Projects from './Projects'
import StudentsProjects from './StudentsProjects';
const Dash = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));

  return (
    <div style={{margin:'15rem'}}>Dashboard
    <StudentProjectCreate/>
    <Projects/>
    {/* <StudentsProjects/> */}
  {/* {username} */}
    </div>
  )
}

export default Dash