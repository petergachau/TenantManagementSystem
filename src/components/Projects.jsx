import React from 'react'
import { useSelector } from 'react-redux'

const Projects = ({projectTitle,name}) => {
    const {user}=useSelector((state)=>({...state.auth}))
if (user?.result?.name===name) {
    
}
  
    return (
    <div>{name}</div>
  )
}

export default Projects