import React, { useEffect } from 'react'
import { useState } from 'react'
import {StyledForm} from './StyledForm'
import { useNavigate } from 'react-router-dom';
// import { StyledForm } from './StyledForm'
import { useDispatch, useSelector } from "react-redux";
// import { productsCreate } from '../redux/features/tourSlice';
import {toast} from 'react-toastify'
import { createProject } from '../redux/features/projectSlice';
import FileBase from "react-file-base64";
import { createComplain } from '../redux/features/complain';
import { createCareTakercomplain } from '../redux/features/Caretakercomment';
import { createMessage } from '../redux/features/messageSlice';


const AdminMessage = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { user } = useSelector((state) => ({ ...state.auth }));
// console.log(user);
  const {error ,loading}= useSelector((state)=>({...state.project}))
  const [users,setUser]=useState({
   
    topic:'',
    
    issue:'',
    
      
    
               })
   const handleSubmit= (e)=>{
    
       e.preventDefault()
       if (users){
        const updateddata={...users, name:user?.result.name}
       
       dispatch(createMessage(updateddata,toast))
       navigate('/')
       }
   }
  const cancelCourse = () => { 
    document.getElementById("create-course-form").reset();
  }
useEffect(() => {
  // error && toast.error(error);

  return () => {
    
  }
}, [error])


return (
 
  <StyledForm id='cancelCourse' onSubmit={handleSubmit}  className='form'>

  <div className="main-rent-create">
  <div className="rent-split-start">
    {/* <input className='form-input' type='text'  placeholder='Apartment Name' onChange={(e)=> setUser({...users , apartment:e.target.value})} required/> */}
    <input className='form-input' type='text'  placeholder='Topic' onChange={(e)=> setUser({...users , topic:e.target.value})} required/>
    <input className='form-input' type='text' placeholder='Issue' onChange={(e)=> setUser({...users , issue:e.target.value})} required/>
    </div>
   
              </div>
      <button className='btn' >
      {/* {auth.registerStatus==='pedding' ? 'submitting':'register' } */}
     Submit
    </button>
    <a  href={`https://wa.me/0757198515`} target="_blank" rel="noreferrer noopener">Quick Message</a>

</StyledForm>
   

   
  
    

)
}

export default AdminMessage