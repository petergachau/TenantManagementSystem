import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { Link, useLocation } from "react-router-dom";
import { createProject, getProjects, getProjectsByUser } from "../redux/features/projectSlice";
import {StyledForm} from './StyledForm'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createMilestone } from "../redux/features/mileSlice";
// import {AiOutlineArrowRight} from 'react-icons/ai'



const Milestone = () => {
    const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>({...state.auth}))
  const {milestones}=useSelector((state)=>({...state.project}))

  const {projects}=useSelector((state)=>({...state.project}))
  console.log(projects);
const userId =user?.result?._id

const [date,setDate]=useState('')
const [mile,setMilestone]=useState({
  maintance:'',
  general:'',
    item:'',
    quantity:'',
    price:'',
    Name:'',
    servedBy:'',
    phoneNo:'',
    apartment:'',
cost:'',
item:'',
    createdAt:Date

})
useEffect(()=>{
  dispatch(getProjectsByUser(userId))
},[userId])
const handleSubmit= (e)=>{
    e.preventDefault()
    if (mile){
        const updateddata={...mile, name:user?.result.name}
       
       dispatch(createMilestone(updateddata))
    }
}

  return (
   
      <StyledForm style={{marginTop:'8rem'}} onSubmit={handleSubmit}>
    <h3 style={{color:'whitesmoke'}}> Maintenance </h3>
    <div className="main-rent-create">
    <div className="rent-split-start">



    <select name="" id="" onChange={(e)=> setMilestone({...mile, general:e.target.value})}>
        <option value="Locality of Repair/ maintenance">Locality of repair/ maintenance</option>
        <option value="General">General</option>
        <option value="specific house">Specific house</option>
       
      </select>

<div >....</div>
         {/* <input className='form-input' type='number'  placeholder='Labour Charges' onChange={(e)=> setMilestone({...mile , price:e.target.value})} /> */}

      
      
         <h6 style={{color:'white'}}>Description of issue/fault</h6>
<input className='form-input' type='text'  placeholder='Description of issue/fault' onChange={(e)=> setMilestone({...mile , maintance:e.target.value})} />
<h6 style={{color:'white'}}>Repair estimates/quotations</h6>

      <input className='form-input' type='number'  placeholder=' Repair estimates/quotations' onChange={(e)=> setMilestone({...mile , item:e.target.value})} />
      {/* <input className='form-input' type='text'  placeholder='Name of the Item' onChange={(e)=> setMilestone({...mile , item:e.target.value})} /> */}

      <select name="" id="" onChange={(e)=> setMilestone({...mile, quantity:e.target.value})} >
  <option value="Work completed"> Work copmleted</option>
  <option value="yes">yes</option>
  <option value="no">no</option>
</select>
<div >....</div>
       </div>
       
       <div className="rent-split">
       <h6 style={{color:'white'}}>Labour charges</h6>

       <input className='form-input' type='number'  placeholder='Labour charges' onChange={(e)=> setMilestone({...mile , price:e.target.value})} />
       <h6 style={{color:'white'}}>House number</h6>

       <input className='form-input' type='text'  placeholder='House number' onChange={(e)=> setMilestone({...mile , apartment:e.target.value})} /> 
       <h6 style={{color:'white'}}>Remarks</h6>

      <input className='form-input' type='text'  placeholder='Remarks' onChange={(e)=> setMilestone({...mile , servedBy:e.target.value})} /> 
      <h6 style={{color:'white'}}>Phone number of the repair person</h6>

      <input className='form-input' type='number'  placeholder='Phone number of the repair person' onChange={(e)=> setMilestone({...mile , phoneNo:e.target.value})} />
      
      </div>
</div>
      <button className='btn'>
      {/* {auth.registerStatus==='pedding' ? 'submitting':'register' } */}
      Submit
    </button>
    <div className="icon">
      view
        <Link to='/mileProject'>
          go
           {/* <AiOutlineArrowRight/> */}
        </Link>
        </ div>
      </StyledForm>
      
 
    
  )
}


export default Milestone