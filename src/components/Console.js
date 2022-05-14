import React, { useEffect,useState,useRef } from 'react';
import '../styles/console.css';

const Console = (data) => {
  async function makeApiCall(url,method,data) {
    const baseUrl = 'https://api.aircall.io/v1/';
    const res = await fetch()
  }
  
  let consoleContent = useRef('Hello');
  useEffect(() => {
    if(data.results != null) {
      const navItem = data.results[0];
      const navSubItem = data.results[1];
      console.log(navItem.type+' ; '+ navSubItem.id);
      if(navItem.type === 'services') {
        if(navSubItem.id === 'cleanNumbers') {
  
        } else if(navSubItem.id === 'getRecordings') {
  
        } else if(navSubItem.id === 'cti') {
          console.log('got here');
        }
      } else if(navItem.type === 'api') {
  
      } else if(navItem.type === 'webhook') {
  
      };
    };
  })
  
  return (
    <>
      <div className='console'>      
        <h1>Hello</h1>
     </div>
    </>
  );
};

export default Console;