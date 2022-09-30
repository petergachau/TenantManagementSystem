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
const ComplainA = () => {
    const [admin,setAdmin]=useState([]);

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('https://railway-production-8f49.up.railway.app/start/complain/g2')
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
    <h4 className='headers'>Apartment A all Complains</h4>
    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>
               <p>updated at {format(items.createdAt)}</p>

<p className='rentss'><p>Name:</p>  {items.name}</p>
<p className='rentss'><p>HouseNo:</p>   {items.houseNo}</p>
<p className='rentss'><p>Complain/compliment:</p>   {   items.complain}</p>
              </div>
      )
    })}
    </div>
 </> )
}

export default ComplainA