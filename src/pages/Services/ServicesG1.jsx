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
        const res= await axios.get('https://railway-production-8f49.up.railway.app/start/services/g1')
        res.data.sort(compare)
        const result = res.data.filter((_, index) => index < 6);
                  console.log('result',result);

          
        
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

              <p className='rentss'><p>Name: </p> <p>{items.name}</p> </p >
              
              <p className='rentss'><p>houseNo:</p> <p>{items.houseNo}</p> </p >
              <p className='rentss'><p>Arrears:</p><p>{items.arrears}</p> </p>
              <p className='rentss'><p>Previous Meter Read:</p><p>{items.prevReads}</p> </p >
              <p className='rentss'><p>Current Meter Read:</p> <p>{items.currentraed}</p></p>
              <p className='rentss'><p>Unit Consumed : </p><p> {items.units}</p></p >
              <p className='rentss'><p>Water Bill :</p> <p>{items.waters}</p> </p >
              <p className='rentss'><p>Maintanance Charges: </p><p>{items.services}</p> </p >
              <p className='rentss'><p></p>updated at {format(items.createdAt)}</p>
             
              </div>
      )
    })}
    </div>
 </> 
  )
}

export default Responses