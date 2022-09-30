import React, { useEffect } from 'react'
import { useState } from 'react'
import {StyledForm} from './StyledForm'
import { Link, useNavigate,useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
// import { StyledForm } from './StyledForm'
import { useDispatch, useSelector } from "react-redux";
// import { productsCreate } from '../redux/features/tourSlice';
import { createProject, updateTour } from '../redux/features/projectSlice';
import FileBase from "react-file-base64";
import axios from 'axios';

const StudentProjectCreate = () => {
  const {projects}=useSelector((state)=>({...state.project}))
  const notify = () => toast("Wow so easy!");
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [tours,setTours]=useState([])

  const { user } = useSelector((state) => ({ ...state.auth }));


  const {error ,loading}= useSelector((state)=>({...state.project}))
  const [users,setUser]=useState({
    apartment:'',
    name:'',
    houseNo:'',
    amount:'',
    arrears:'',
    idNo:'',
    wifi:'',
    balance:'',
    payment:'',
    currentRead:'',
    createdAt:'',
    lastRead:'',
    waterFee:'',
    datePaid:'',
    phone:'',
    aptType:'',
    penalties:'',
               })
   const handleSubmit= (e)=>{
    
       e.preventDefault()
      //  e.target.reset();
       if (users){
        const updateddata={...users}
       if(!id){
        dispatch(createProject(updateddata,toast))
        navigate('/addproject')
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
 <div style={{marginTop:'7rem', display:'flex' ,gap:'2rem'}} >
 <Link to='/expenses'>
                <button className='btn'>
                   Operational costs
                </button>
            </Link>
            <Link to='/summarys'>
                <button className='btn'>
                 Tenant total payments
                </button>
            </Link>
            </div>
  {/* <ToastContainer /> */}

  <StyledForm id='cancelCourse' onSubmit={handleSubmit} className='form'>
  
  <h2 style={{color:'whitesmoke'}}>{id? 'update your values':'Payment Details Upload'}</h2>
    <div className="main-rent-create">
 
{/* <Projects/> */}
<div className="rent-split-start">
<h6 style={{color:'white'}}>Name</h6>
    {/* <input className='form-input' type='text'  placeholder='Apartment eg A or B or C' onChange={(e)=> setUser({...users , apartment:e.target.value})} required/> */}
    <input className='form-input' type='text'  placeholder='Name' onChange={(e)=> setUser({...users , name:e.target.value})} required/>
    <h6 style={{color:'white'}}>House number</h6>
    <input className='form-input' type='text' placeholder='House number' onChange={(e)=> setUser({...users , houseNo:e.target.value})} required/>
    <h6 style={{color:'white'}}>Monthly rent</h6>
    <input className='form-input' type='number' placeholder=' Monthly rent' onChange={(e)=> setUser({...users , amount:e.target.value})} required/>
    <h6 style={{color:'white'}}>Maintanance</h6>
    <input className='form-input' type='number' placeholder='Maintanance' onChange={(e)=> setUser({...users ,payment:e.target.value})}/>
    <h6 style={{color:'white'}}>Arrears</h6>
    {/* <input className='form-input' type='date' placeholder='date' onChange={(e)=> setUser({...users ,createdAt:e.target.value})} required/> */}
    <input className='form-input' type='number' placeholder='Arrears' onChange={(e)=> setUser({...users ,arrears:e.target.value})} />
    <h6 style={{color:'white'}}>Penalties</h6>
    <input className='form-input' type='number' placeholder='Penalties' onChange={(e)=> setUser({...users ,penalties:e.target.value})} />
    <h6 style={{color:'white'}}>Contract renewal</h6>
    <input className='form-input' type='text' placeholder='Contract renewal' onChange={(e)=> setUser({...users ,aptType:e.target.value})}/>
    <h6 style={{color:'white'}}>Wifi charges</h6>
    <input className='form-input' type='number' placeholder='Wifi Charges' onChange={(e)=> setUser({...users ,wifi:e.target.value})} />

    </div>
    <div className="rent-split">
   
    <h6 style={{color:'white'}}>Current water read</h6>
    <input className='form-input' type='number' placeholder='Current water read' onChange={(e)=> setUser({...users ,currentRead:e.target.value})}/>
    <h6 style={{color:'white'}}>Previous water read</h6>
    <input className='form-input' type='number' placeholder='Previous water read' onChange={(e)=> setUser({...users ,lastRead:e.target.value})}/>
    
    <h6 style={{color:'white'}}>Unit consumed</h6>
    <input className='form-input' type='number' placeholder='Unit consumed' onChange={(e)=> setUser({...users ,idNo:e.target.value})}/>
    <h6 style={{color:'white'}}>Water bill</h6>
    <input className='form-input' type='number' placeholder='Water bill' onChange={(e)=> setUser({...users ,waterFee:e.target.value})}/>
    <h6 style={{color:'white'}}>Tenant phone number</h6>
    <input className='form-input' type='number' placeholder='Tenant phone number' onChange={(e)=> setUser({...users ,phone:e.target.value})}/>
    <h6 style={{color:'white'}}>Comments</h6>
    <input className='form-input' type='text' placeholder='Comments' onChange={(e)=> setUser({...users ,apartment:e.target.value})}/>
    <h6 style={{color:'white'}}>balance</h6>
    <input className='form-input' type='number' placeholder='balance' onChange={(e)=> setUser({...users ,balance:e.target.value})} />
    <h6 style={{color:'white'}}>date</h6>
    <input className='form-input' type='text' placeholder='date of payment eg 17/04/2022' onChange={(e)=> setUser({...users ,datePaid:e.target.value})}/>

{/* 
     mpesa screenshot
              <FileBase
                type="file"
                placeholder='mpesa screenshot'
                multiple={false}
                onDone={({ base64 }) =>
                  setUser({ ...users, imageFile: base64 })
                }
              /> */}
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