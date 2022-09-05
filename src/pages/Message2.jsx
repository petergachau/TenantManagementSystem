import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client";
import ReactAudioPlayer from 'react-audio-player';
import audio from '../audio/audio1.wav'
import axios from 'axios';
import moment from 'moment';
import { useSelector } from 'react-redux';
const socket= io.connect('http://localhost:3001')
const getLocalStorage = () => {
  let message = localStorage.getItem('message');
  if (message) {
    return (message = JSON.parse(localStorage.getItem('message')));
  } else {
    return message;
  }
};

const Message = () => {


  const [tours,setTours]=useState([])
  const { user } = useSelector((state) => ({ ...state.auth }));
  const [message,setMessange]=useState(getLocalStorage(null))
  const [messages,setMessanges]=useState(getLocalStorage(null))
  useEffect(() => {
    localStorage.setItem('message', JSON.stringify(message));
  }, [message]);

  // const joinRoom = () => {
  //   if (room !== "") {
  //     socket.emit("join_room", room);
  //   }
  // };

  const sendMessage= ()=>{
    socket.emit("send_messange",{message})
   
    
    
    }
    
    useEffect(()=>{
    socket.on('recied', (data)=>{
    alert('you have a notification')
    setMessanges(data.message)
    
    })
    },[socket])


    useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('http://localhost:5000/stats/chartss')
        setTours(  res.data)
        console.log('hey',tours[1].houseNo);
       } catch (error) {
        console.log(error);
  
  
        
      }
      }
      fetchData()
        },[])
useEffect(()=>{
  if(message){
    return(
      <audio src={audio} controls />

    )
  }
})
const number=+254757198515
    
  return (
    <div style={{marginTop:'7rem'}}>

     {/* <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      /> */}
      {/* <button onClick={joinRoom}> Join Room</button> */}
      <a  href={`https://wa.me/${number}`} target="_blank" rel="noreferrer noopener">Send</a>
    <textarea type="text" onChange={(e)=>setMessange(e.target.value)} />
    
    <button onClick={sendMessage}>Submit</button>
    {/* <p>Messange:{messages}</p>
    {messages ? <audio src={audio} controls autoPlay />: null} */}
    </div>
  )
}

export default Message