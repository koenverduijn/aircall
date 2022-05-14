import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";

function methodColor(submenu) {
  let apiMethodColor = '#00b388'
  if (submenu.method === 'POST') apiMethodColor = '#ffb400';
  else if (submenu.method === 'PUT') apiMethodColor = '#097bed';
  else if (submenu.method === 'DELETE') apiMethodColor = '#eb2013';
  else if (submenu.method === 'PATCH') apiMethodColor = '#74787d';
  return apiMethodColor;
};

const SubItems = ({ submenus,items,showItems }) => {  
  const [result,setResult] = useState();
  function showNavigation(items){
    console.log(items.id);
    window.localStorage.setItem('navSubItem',items)
  };
  return (
    <>
      <ul className={items.title +' apiMethod'} style={showItems}>
        {submenus.map((submenu, index) => (
          <li key={index} className='apiMethodItem'>
            <Link to={(items.id === 'services')?'/'+items.id+'/'+submenu.id:'/'+items.id} onClick={showNavigation(items)}><p style={items.type == 'webhook' ? ({fontStyle:'italic',color: methodColor(submenu)}):({color: methodColor(submenu)})}>{submenu.name}</p></Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SubItems;