import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ComplainC = () => {
    const [admin,setAdmin]=useState([]);

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('https://tenant-app-app.herokuapp.com/stats/projects/complainc')
          setAdmin(  res.data)
          console.log(admin);
         } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])

  return (<>
    <h4 className='headers'>Apartment C all Complains</h4>
    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>

              <p>Name: {items.name}</p>
              
              <p> Complain: {items.complain}</p>
              <p>ApartMent: {items.apartment}</p>
              <p> HouseNo: {items.houseNo}</p>
              <p>IdNo: {items.idNo}</p>
             
              </div>
      )
    })}
    </div>
  </>)
}

export default ComplainC