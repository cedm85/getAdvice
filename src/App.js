import axios from 'axios'
import React, { useState, useEffect } from 'react';


const baseURL = 'https://api.adviceslip.com/advice'

export default function App() {
  const [getAdvice, setGetAdvice] = useState ()

 const getUpdate = () => {
  axios.get(baseURL)
  .then( (response)=> {
    setGetAdvice(response.data.slip.advice);
  }); 
 }

 useEffect(getUpdate, []);
 if (!getAdvice) return null;

  return (
    <div className='app'>
      <div className='card'>
       <h1 className='heading'>{getAdvice}</h1>
       <button className='button' onClick={getUpdate}> Give Me an Advice </button>       </div>
    </div>
  )
}