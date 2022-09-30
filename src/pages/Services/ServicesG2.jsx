import axios from 'axios';
import {format} from 'timeago.js'
import React, { useEffect, useState } from 'react'
import moment from 'moment';


const Responses = () => {
  const [admin,setAdmin]=useState([]);
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
        const res= await axios.get('https://railway-production-8f49.up.railway.app/start/services/g2')
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
  return (
    <>
    <h4 className='headers'>Tenant Water  and Other Charges</h4>
    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>
<h3 className='month'>month of {moment().format('MM YYYY ')}</h3>

              <p>Name: {items.name}</p>
              
              <p> House Number: {items.houseNo}</p>
              <p>Arrears: {items.arrears}</p>
              <p>Previous Meter Read: {items.prevReads}</p>
              <p>Current Meter Read: {items.currentraed}</p>
              <p> Unit Consumed : {items.units}</p>
              <p> Water Bill : {items.waters}</p>
              <p> Maintanance Charges: {items.services}</p>
              <p>updated at {format(items.createdAt)}</p>
             
              </div>
      )
    })}
    </div>
 </> 
  )
}

export default Responses