import axios from 'axios'
import jsPDF from 'jspdf';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


const TenantA = () => {
    const [admin,setAdmin]=useState([]);


    const [date,setDate]=useState([])
    const { user } = useSelector((state) => ({ ...state.auth }));
    const X=19
    function compare(a,b){
      if(a._id <b._id){
        return 1
      }
      if(a._id >b._id){
        return -1
      }return 0
    }
    
    
    React.useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('https://railway-production-8f49.up.railway.app/stats/totalrentb');
        res.data.sort(compare)
        setDate(  res.data)
          
        
       
       } catch (error) {
        console.log(error);
    
    
        
      }
      }
      fetchData()
        },[])




    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('https://railway-production-8f49.up.railway.app/stats/projects/g2')
          res.data.sort(compare)
          const result = res.data.filter((_, index) => index < 6);
          setAdmin(  result)
          console.log('admin',admin);
         } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])


          const {name,amount,apartment,houseNo,balance}=admin

          console.log('rebt ', );
            const doc= ()=>{
              var pdf =new jsPDF('landscape', 'px','a4','false');
              
              
              pdf.text(30,10,`month of ${moment().format('MM YYYY ')}`)
              pdf.text(30,30,`name: ${admin[0].name}`)
              pdf.text(30,50,`Amount: ${admin[0].amount}`)
              pdf.text(30,70,`Apartment: ${admin[0].apartment}`)
              pdf.text(30,85,`name: ${admin[0].houseNo}`)
              pdf.text(30,100,`balance: ${admin[1].balance}`)
              
              
              pdf.save('recipt.pdf')
            }

            const rows =  [
              {
               digits:date[0]?._id,
              },
            ]
            const currentMonth1 = moment().month()+1; 

  return (<>


{rows.map((i)=>{
  return(
    
    <>
    
   

    <h4 className='headers'>Payment History</h4>
    <div>{i.digits}</div>

   <div  className='rent-page'>
   {admin.map((items)=>{
     return(
       <div className='rent-card'>
        {/* {admin.length<=6?(
          
        )} */}
       <h3 className='month'>month of {moment().format('MM YYYY ')}</h3>

             {/* <p>Name: {items.name}</p>
             <p> RentPaid: {items.amount}</p>
             <p>ApartMent: {items.apartment}</p>
             <p> HouseNo: {items.houseNo}</p>
             <p>IdNo: {items.idNo}</p>
             <p>WaterFee: {items.waterFee}</p>  */}
             <p className='rentss'> <p > Name:   </p> <p className='spaces'>      {items.name}</p> </p>
             <p className='rentss'> <p>RentPaid: </p>   <p>{items.amount}</p> </p>
             <p className='rentss'> <p>HouseNo:</p>  <p>{ ('') }{items.houseNo}</p> </p>
             <p className='rentss'> <p>Water Bill:</p> <p>{items.waterFee}</p> </p>  
             <p className='rentss'> <p>Wifi:</p> <p>{items.wifi}</p> </p>  
           
             {/* <p className='rentss'> <p>IdNo:</p>  <p>{items.idNo}</p></p> */}
             {/* <p className='rentss'> <p>Fisrt Water Read:</p> <p>{items.currentRead}</p> </p> 
             <p className='rentss'> <p>Last Water Read:</p> <p>{items.lastRead}</p> </p> 
             <p className='rentss'> <p>Date of Payment:</p> <p>{items.datePaid}</p> </p> 
             <p className='rentss'> <p>Type of the rental:</p> <p>{items.aptType}</p> </p> 
             {/* <p className='rentss'> <p>Payment Screenshot:</p> <img className='img' src={items.imageFile} alt="" /> </p>  */}
             <p className='rentss'> <p>Arrears:</p> <p>{items.arrears}</p> </p> 
             <p className='rentss'> <p>Penalties:</p> <p>{items.penalties}</p> </p> 
             {/* <p className='rentss'> <p>Total Balance:</p> <img className='img' src={items.balance} alt="" /> </p>  */}
             <p className='rentss'> <p>Total Balnces:</p> <p>{items.balance}</p> </p> 

             <button onClick={doc} className="btn" id='btnreceipt' >
     Get Receipt
    </button>
         
             </div>
     )
   })}
   </div>

   
 </>
    
  )
})} </> )
}

export default TenantA