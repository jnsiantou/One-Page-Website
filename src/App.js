import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import React from "react";
import Header from "./components/Header";
import Features from './components/Features';

function App() {
   //creating IP state
   const [ip, setIP] = useState('');

   //creating function to load ip address from the API
   const getData = async () => {
     const res = await axios.get('https://geolocation-db.com/json/')
     console.log(res.data);
     setIP(res.data.IPv4)
   }
   
   useEffect( () => {
     //passing getData method to the lifecycle method
     getData()
 
   }, [])
  return (
    <><div className="App">
      <h2>Your IP Address is</h2>
      <h4>{ip}</h4>
    </div><div className="App">
        <Header />
        <div className='f-heading'>
          <h1>Features</h1>
          <p>Here are some features of the software</p>
        </div>
        <Features />
      </div></>
  );
}

export default App;
