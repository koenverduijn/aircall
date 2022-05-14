import React from "react";
import { useState, useEffect } from "react";
import SubItems from "./NavigationSubItems";
import { menuItems } from '../navigationItems';
import { Link } from "react-router-dom";

const MenuItems = ({ items,apiToggle,webhookToggle }) => {
  function showSubItems(items) {
    setHideSubItems(true);
    window.localStorage.setItem('nav',items.title);
    for(let n=0;n<menuItems.length;n++) {
      if(items.title != menuItems[n].title) {
      };
    }
    toggleSubItems.display == 'none' ? (setSubItems({display:''})) : (setSubItems({display:'none'}));
  };
  useEffect(() => {
    const navStatus = window.localStorage.getItem('nav');
  },[setSubItems]);
  const [toggleSubItems,setSubItems] = useState({display:'none'});
  const [hideSubItems,setHideSubItems] = useState(false);
  return (
    <>
      {(items.id === 'services') ?
        <li className={items.type + 'Tab'} style={items.type != 'webhook' ? (items.type == 'api' ? (apiToggle) : ({fontWeight:'bold'})) : (webhookToggle)} onClick={() => {
          showSubItems(items);
        }}>
          <img src={items.logo} alt={items.title + 'logo'} />
          <p style={items.type == 'webhook' ? ({fontStyle:'italic'}):({})}>{items.title}</p>
        </li> :
        <Link to={'/'+items.id} className={items.type + 'Tab'} style={items.type != 'webhook' ? (items.type == 'api' ? (apiToggle) : ({fontWeight:'bold'})) : (webhookToggle)} onClick={() => {
          showSubItems(items);
        }}>
          <img src={items.logo} alt={items.title + 'logo'} />
          <p style={items.type == 'webhook' ? ({fontStyle:'italic'}):({})}>{items.title}</p>
        </Link>
      }
      {(items.submenu != null && hideSubItems) ? (
        <SubItems key='' submenus={items.submenu} items={items} showItems={toggleSubItems}/>
      ) : (
        <>
        </>
      )}
    </>
  );
};

export default MenuItems;
