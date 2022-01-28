import logo from './logo.svg';
import './App.css';
import axios from "axios";



   function App(){
      


  // POST request using axios with set headers
  const article = { title: 'amount=1&msisdn=0740408496&account_no=200' };
  const headers = { 
    'Apikey': 'Me3s8tLM8vW',
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  axios.post('https://tinypesa.com/api/v1/express/initialize/', article, { headers });



  }; 

export default App;
