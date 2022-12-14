import React, { useEffect } from 'react'
import { useState } from 'react'
import {StyledForm} from './StyledForm'
import { Link, useNavigate } from 'react-router-dom';
// import { StyledForm } from './StyledForm'
import { useDispatch, useSelector } from "react-redux";
// import { productsCreate } from '../redux/features/tourSlice';
import {toast} from 'react-toastify'
import { createProject } from '../redux/features/projectSlice';
import FileBase from "react-file-base64";
import { createSummary } from '../redux/features/summarySlice';


 const StudentProjectCreate = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { user } = useSelector((state) => ({ ...state.auth }));
 // console.log(user);
  const {error ,loading}= useSelector((state)=>({...state.project}))
  const [users,setUser]=useState({
  
    name:'',
    houseNo:'',
    
    rent:'',
    wifi:'',
    penalties:'',
    water:'',
    arrears:'' ,
    remarks:''
    
               })
   const handleSubmit= (e)=>{
    
       e.preventDefault()
       if (users){
        const updateddata={...users, name:user?.result.name}
       
       dispatch(createSummary(updateddata,toast))
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
  <>


 
  <StyledForm id='cancelCourse' onSubmit={handleSubmit} style={{marginTop:'7rem'}} className='form'>
  <h2 style={{color:'whitesmoke'}}>Total monthly payments</h2>
    <div className="main-rent-create">
  <div className="rent-split-start">
  <h6 style={{color:'white'}}>Name</h6>

    {/* <input className='form-input' type='text'  placeholder='Apartment Name' onChange={(e)=> setUser({...users , apartment:e.target.value})} required/> */}
    <input className='form-input' type='text'  placeholder='Name' onChange={(e)=> setUser({...users , name:e.target.value})} required/>
    <h6 style={{color:'white'}}>House number</h6>

    <input className='form-input' type='text' placeholder='House number' onChange={(e)=> setUser({...users , houseNo:e.target.value})} required/>
    <h6 style={{color:'white'}}>Monthly rent</h6>

    <input className='form-input' type='number' placeholder='Monthly rent' onChange={(e)=> setUser({...users ,rent:e.target.value})} />
    <h6 style={{color:'white'}}>Water bill</h6>

    <input className='form-input' type='number' placeholder='Water bill' onChange={(e)=> setUser({...users ,water:e.target.value})} />

    </div>
    <div className="rent-split">
    <h6 style={{color:'white'}}>Penalties</h6>

    {/* <input className='form-input' type='number' placeholder='Id Number' onChange={(e)=> setUser({...users ,idNo:e.target.value})} required/> */}
    <input className='form-input' type='number' placeholder='Penalties' onChange={(e)=> setUser({...users ,penalties:e.target.value})} />
    <h6 style={{color:'white'}}>Wifi charges</h6>

      <input className='form-input' type='number' placeholder='Wifi charges' onChange={(e)=> setUser({...users ,wifi:e.target.value})}/>
      <h6 style={{color:'white'}}>Any arrears</h6>

      <input className='form-input' type='number' placeholder='Any arrears' onChange={(e)=> setUser({...users ,arrears:e.target.value})}/>
      <h6 style={{color:'white'}}>Remarks</h6>

      <input className='form-input' type='text' placeholder='Remarks' onChange={(e)=> setUser({...users ,remarks:e.target.value})}/>

      {/* <div className="d-flex justify-content-start">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setUser({ ...users, imageFile: base64 })
                }
              />
              </div> */}
              </div>
              </div>
      <button className='btn' >
      {/* {auth.registerStatus==='pedding' ? 'submitting':'register' } */}
      Submit
    </button>
      
</StyledForm>


      
   
</>
   
  
    

)
}

export default StudentProjectCreate