import axios from 'axios';
import {format} from 'timeago.js'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteVacation } from '../redux/features/vacation';
import {toast} from 'react-toastify'


const Responses = () => {
  function compare(a,b){
    if(a._id <b._id){
      return 1
    }
    if(a._id >b._id){
      return -1
    }return 0
  }
  const [admin,setAdmin]=useState([]);
  const dispatch=useDispatch()

  useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('https://railway-production-8f49.up.railway.app/vacation')
        res.data.sort(compare)
        const result = res.data.filter((_, index) => index < 6);
          setAdmin(  result)
        console.log(admin);
       } catch (error) {
        console.log(error);
        
      }
      }
      fetchData()
        },[])

        const handleDelete = (id) => {
          if (window.confirm("Are you sure you want to delete this tour ?")) {
            dispatch(deleteVacation({ id, toast }));
          }
        };


  return (
    <>
     
    <h4 className='headers'>Notices To Vacate/Contract Renewal</h4>

    <Link to='/caretakervacation'>
        <button className="btn">
        Notice to Vacate
        </button>
    </Link>
    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>

<p>updated at {format(items.createdAt)}</p>
<p className='rentss'> <p> Name:   </p> <p>{items.name}</p> </p>
<p className='rentss'> <p> House number:   </p> <p>{items.houseNo}</p> </p>             
<p className='rentss'>  Contract reanewal/notice to vacate:    {items.contractRenewal} </p>              
<p className='rentss'> <p> Remarks:   </p> <p>{items.reason}</p> </p>
<p className='rentss'> <p> Vacation date   </p> <p>{items.remTime}</p> </p>
              
              
              <button className="btn" onClick={() => handleDelete(items._id)}>
                delete
              </button>

             
              </div>
      )
    })}
    </div>
 </> 
  )
}

export default Responses