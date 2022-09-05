import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
const AdminTotalRent = () => {
  function compare(a,b){
    if(a._id <b._id){
      return 1
    }
    if(a._id >b._id){
      return -1
    }return 0
  }
      const [tours,setTours]=useState([])
// const {tours}=useSelector((state)=>state.project)
// console.log(tours);
useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get('http://localhost:5000/stats/vacations')
      res.data.sort(compare)
      setTours(  res.data)
      console.log('hey',tours);
     } catch (error) {
      console.log(error);


      
    }
    }
    fetchData()
      },[])



      const handleSearch= async (event)=>{
        event.preventDefault()
        let key =event.target.value
        if(key){
         let result= await fetch(`http://localhost:5000/project/search${key}`)
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
    <h4 className='r'>Vacations</h4>
    <div className='search'>      
      <input type="text" placeholder='Search by house number' onChange={handleSearch} />
</div>        
    
    <div className='tenant-admin-page'>
              
         {tours && tours?.map((item)=>{
          return(
            <div className='datas'>
              <h4>{format(item.createdAt)}</h4> 

              <p>Name: {item.name}</p>
             <p> Aparment: {item.apartment}</p> 
             <p> HouseNo: {item.houseNo}</p> 
             <p> Reason: {item.reason}</p> 
             <p> Vaction Date: {item.remTime}</p> 
             <div className="buttons">
              {/* <button className="btn">delete</button>
              <button className="btn">view</button> */}

             </div>
            </div>
          )
         })}

    </div>
 </> )
}

export default AdminTotalRent