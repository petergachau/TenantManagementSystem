import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { deleteTour } from "../redux/features/projectSlice";
import {toast} from 'react-toastify'

import axios from 'axios'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMilestone } from '../redux/features/mileSlice';
import { format } from 'timeago.js';
const AdminCaretaker = () => {
    const dispatch=useDispatch()
      const [tours,setTours]=useState([])
// const {tours}=useSelector((state)=>state.project)
// console.log(tours);
function compare(a,b){
  if(a._id <b._id){
    return 1
  }
  if(a._id >b._id){
    return -1
  }return 0
}
useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get('https://railway-production-8f49.up.railway.app/stats/caretaker')
      res.data.sort(compare)
      const result = res.data.filter((_, index) => index < 6);
          setTours(  result)
      console.log('hey',tours);
     } catch (error) {
      console.log(error);


      
    }
    }
    fetchData()
      },[])
      const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this tour ?")) {
          dispatch(deleteMilestone({ id, toast }));
        }
        console.log( 'delet',handleDelete);
      };


      const handleSearch= async (event)=>{
        event.preventDefault()
        let key =event.target.value
        if(key){
         let result= await fetch(`https://railway-production-8f49.up.railway.app/stats/searchs${key}`)
      result=await result.json()
      if(result){
        setTours(result)
        
      } console.log(` `,result);
        }else{
          setTours()
        }
      
      
      }



  return (
    <>
    <h4 className='r'>Maintanance</h4>
  
        
    
    <div className='tenant-admin-page'>
              
      
         {tours && tours?.map((item)=>{
          return(
            <div className='datas'>
                <div></div>
                <h4>{format(item.createdAt)}</h4> 
                <p className='rentss'><p>Locality of Repair/maintanance:</p> <p>{item.general}</p>  </p>

              
             <p className='rentss'> <p>Description of issue: </p> {item.maintance} {}</p> 
             <p className='rentss'> <p>Repair estimates /Quotations:</p>  {item.item}</p>
             <p className='rentss'> <p>Labour charges:</p>  {item.price}</p>
             <p className='rentss'> <p>Work completion:</p>  {item.quantity}</p>
             <p className='rentss'><p>House number:</p>  {item.apartment}</p>
             <p className='rentss'> <p>Remarks:</p>  {item.servedBy}</p>
             <p className='rentss'><p>Phone no of repair person:</p>  {item.phoneNo}</p>
             {/* <p> Amount: {item.amount}</p> 
             <p> HouseNo:{item.houseNo}</p> 
             <p> House: {item.aptType}</p>  */}

            

             <div className="buttons">
             <button className="btn"onClick={() => handleDelete(item._id)}
>
          delete
            </button>
    {/* <button className="btn">
    <Link to ={`/project/${item._id}`}>
      read more
     </Link>
    </button> */}

             </div>
            </div>
          )
         })}

    </div>
  </>)
}

export default AdminCaretaker