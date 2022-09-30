import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Notifications = () => {
  const {user}=useSelector((state)=>({...state.auth}))

  const [users,setUsers]=useState([]);
  const [messages,setMesseges]=useState([]);
  function compare(a,b){
    if(a._id <b._id){
      return 1
    }
    if(a._id >b._id){
      return -1
    }return 0
  }
  const [admin,setAdmin]=useState([]);
  
  useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get('https://railway-production-8f49.up.railway.app/message')
      res.data.sort(compare)
      const result = res.data.filter((_, index) => index < 6);
          setMesseges(  result)
      console.log(admin);
     } catch (error) {
      console.log(error);
      
    }
    }
    fetchData()
      },[])

  useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('https://tenant-app-app.herokuapp.com/usercrud/allusers')
        res.data.sort(compare)
        setAdmin(  res.data)
        console.log(admin);
       } catch (error) {
        console.log(error);
        
      }
      }
      fetchData()
        },[])
    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get(`https://tenant-app-app.herokuapp.com/project`)
          
       
        setUsers(  res.data)
        
        
        } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])
  return (
    <div style={{marginTop:'7rem' ,
  display:'flex',flexDirection:'row',gap:'5rem'}}>
    <div >
      
      Whatsapp
      {users.data?.map((i)=>{
        return(
          <div style={{display:'flex', gap:'3rem'}}>
            <p>{i.houseNo}</p>
                       <a  href={`https://wa.me/${i.phone}`} target="_blank" rel="noreferrer noopener"><h6 style={{color:'white'}}>Whatsapp</h6></a>

          </div>
        )
      })}
      
        Email
        {admin.map((i)=>{
          return(
            <div style={{display:'flex', gap:'3rem'}}>
               <p>{i.houseNo}</p>
          <a href = {`mailto:${i.email}`}>Send Email</a>
            </div>
          )
         
        })}
      </div>
      <div  style={{display:'flex',flexDirection:'row',gap:'1rem',flexWrap:'wrap'}}>
    {messages.map((items)=>{
      return(
        <div className='rent-card' style={{width:'20rem'}}>

              <p className='cardtitles'> <p> Topic:   </p> <p>{items.topic}</p> </p>
              <p className='cardtitles'> <p>issue: </p>   <p>{items.issue}</p> </p>
              
              </div>
      )
    })}
    </div>
      </div>
  )
}

export default Notifications