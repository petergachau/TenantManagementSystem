import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { format } from 'timeago.js'


function compare(a,b){
  if(a._id <b._id){
    return 1
  }
  if(a._id >b._id){
    return -1
  }return 0
}
const VacationsA = () => {
    const [admin,setAdmin]=useState([]);

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('https://railway-production-8f49.up.railway.app/start/vacation/g1')
          res.data.sort(compare)
          const result = res.data.filter((_, index) => index < 6);
          setAdmin(  result)
         
         } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])

  return (
    <>
    <h4 className='headers'>Vacation Notices</h4>
    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>
              <p>updated at {format(items.createdAt)}</p>

              <p className='cardtitles'> <p> Name:   </p> <p>{items.name}</p> </p>
              <p className='cardtitles'> <p>Notice to vacate/response: </p>   <p>{items.reason}</p> </p>
              <p className='cardtitles'> <p>HouseNo:</p> <p>{items.houseNo}</p> </p>
              {/* <p className='cardtitles'> <p>IdNo:</p>  <p>{items.idNo}</p></p> */}
              <p className='cardtitles'> <p>Remarks:</p> <p>{items.contractRenewal}</p> </p> 
              
              </div>
      )
    })}
    </div>
  </>)
}

export default VacationsA