import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'


function compare(a,b){
  if(a._id <b._id){
    return 1
  }
  if(a._id >b._id){
    return -1
  }return 0
}
const Summary1A
 = () => {
    const [admin,setAdmin]=useState([]);

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('https://railway-production-8f49.up.railway.app/status/4d')
          res.data.sort(compare)
          const result = res.data.filter((_, index) => index < 6);
                  console.log('result',result);

          setAdmin(  result)
         
         } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])

  return (
    <>
     <h4 className='headers'>Total Monthly Payments</h4>
    
    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>
<h3 className='month'>month of {moment().format('MM YYYY ')}</h3>
              <p className='rentss'> <p> Name:</p> <p>{items.name}</p> </p>
              <p className='rentss'> <p>House Number:</p> <p>{items.houseNo}</p> </p>
              <p className='rentss'> <p>Monthly Rent:</p>  <p>{items.rent}</p></p>
              <p className='rentss'> <p>Monthly Water Charges:</p>  <p>{items.water}</p></p>

              <p className='rentss'> <p>Penalties: </p>   <p>{items.penalties}</p> </p>
              <p className='rentss'> <p>Arrears: </p>   <p>{items.arrears}</p> </p>

              <p className='rentss'> <p>Remarks:</p> <p>{items.remarks}</p> </p> 
              <p className='rentss'> <p>Total Monthly Payments:</p> <p>{items.rent+items.water+items.arrears+items.wifi+items.penalties}</p> </p> 
              <a  href="https://tinypesa.com/petergachau"><h6>continue to pay via mpesa</h6></a>

              </div>
      )
    })}
    </div>
  </>)
}

export default Summary1A
