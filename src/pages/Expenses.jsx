import React, { useEffect } from 'react'
import { useState } from 'react'
import {StyledForm} from './StyledForm'
import { useNavigate,useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
// import { StyledForm } from './StyledForm'
import { useDispatch, useSelector } from "react-redux";
// import { productsCreate } from '../redux/features/tourSlice';
import { createProject, updateTour } from '../redux/features/projectSlice';
import FileBase from "react-file-base64";
import axios from 'axios';
import { createTenant } from '../redux/features/TenantSlice';
import { createNotice } from '../redux/features/noticeSlice';
import { createExpense } from '../redux/features/expenses';

const StudentProjectCreate = () => {
  const {projects}=useSelector((state)=>({...state.project}))
  const notify = () => toast("Wow so easy!");
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [tours,setTours]=useState([])

  const { user } = useSelector((state) => ({ ...state.auth }));


  const {error ,loading}= useSelector((state)=>({...state.project}))
  const [users,setUser]=useState({
    security:'',
    electricityCharges:'',
    waterCharges:'',
    careTakerSalary:'',
    maintananceSalary:'',
    wifi:'',
    currentraed:'',
    clean:'',
    prevReads:'',
    services:'',
   units:'',
   others:''
               })
   const handleSubmit= (e)=>{
    
       e.preventDefault()
       if (users){
        const updateddata={...users}
       if(!id){
        dispatch(createExpense(updateddata,toast))
       }else{
        dispatch(updateTour({updateddata,id,toast}))
       }
       
       
       }
   }
  const cancelCourse = () => { 
    document.getElementById("create-course-form").reset();
  }
  const {id}=useParams()

  useEffect(()=>{
  const singleuser= projects.find((tour)=>tour._id===id);

setUser({...singleuser})
  },[id])


useEffect(() => {
  // error && toast.error(error);

  return () => {
    
  }
}, [error])


useEffect(()=>{
  async function fetchData(){
  try {
    const res= await axios.get('https://railway-production-8f49.up.railway.app/stats/users')
    setTours(  res.data)
    console.log('hey',tours[0].phone);
   } catch (error) {
    console.log(error);


    
  }
  }
  fetchData()
    },[])

const [number,setNumber]=useState('')
const handleNumber= (e)=>{
  setNumber(number)
  console.log(number);
}
return (
 <>
  {/* <ToastContainer /> */}

  <StyledForm id='cancelCourse' onSubmit={handleSubmit} style={{marginTop:'6rem'}} className='form'>
  
  <h2 style={{color:'whitesmoke'}}>{id? 'update your values':'Operational Costs'}</h2>
    <div className="main-rent-create">
 
{/* <Projects/> */}
<div className="rent-split-start">
<h6 style={{color:'white'}}>security fee</h6>
    <input className='form-input' type='number'  placeholder='Security fee' onChange={(e)=> setUser({...users , security:e.target.value})} required/>
    <h6 style={{color:'white'}}>electricity charges</h6>
    <input className='form-input' type='number'  placeholder='electricity Charges' onChange={(e)=> setUser({...users , electricityCharges:e.target.value})} required/>
    <h6 style={{color:'white'}}>water charges</h6>
    <input className='form-input' type='number' placeholder='water charges' onChange={(e)=> setUser({...users , waterCharges:e.target.value})} required/>
    <h6 style={{color:'white'}}>caretaker salary</h6>
    <input className='form-input' type='number' placeholder=' caretaker salary' onChange={(e)=> setUser({...users ,careTakerSalary:e.target.value})}/>
    
    </div>
    <div className="rent-split">
    <h6 style={{color:'white'}}>maintance charges</h6>
     <input className='form-input' type='number' placeholder=' maintanance Charges' onChange={(e)=> setUser({...users ,maintananceSalary:e.target.value})} required/>
     <h6 style={{color:'white'}}>wifi bill</h6>
    <input className='form-input' type='number' placeholder='wifi bill' onChange={(e)=> setUser({...users ,wifi:e.target.value})} required/>
    <h6 style={{color:'white'}}>cleaning materials</h6>
    <input className='form-input' type='number' placeholder='cleaning materials' onChange={(e)=> setUser({...users ,clean:e.target.value})} required/>
    <h6 style={{color:'white'}}>other charges</h6>
    <input className='form-input' type='number' placeholder='others charges' onChange={(e)=> setUser({...users ,other:e.target.value})} required/>


   </div>
    
    
   
  
    
 
</div>
<button className='btn' onClick>
      {/* {auth.registerStatus==='pedding' ? 'submitting':'register' } */}
      Submit
    </button>


    {/* recommedations 
    <input type="Number" onChange={(e)=>setNumber(e.target.value)}  />
    <button onClick={handleNumber}>send</button>
    <a  href={`https://wa.me/${number}`} target="_blank" rel="noreferrer noopener">Send</a>
       */}
</StyledForm>
   

    </>
  
    

)
}

export default StudentProjectCreate