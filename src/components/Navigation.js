import React from 'react';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/navigation.css';
import Switch from 'react-switch';

import { menuItems } from '../navigationItems';
import MenuItems from './NavigationItems';
import Console from './Console';

const Navigation = () => {
  const result = useState();
  // switch API and webhook
  const [apiSwitch,setApiSwitch] = useState({display:'inline-flex'});
  const [webhookSwitch,setWebhookSwitch] = useState({display:'inline-flex'});
  const [toggleApi,setToggleApi] = useState(true);
  const [toggleWebhook,setToggleWebhook] = useState(true);
  function switchToggle(toggle) {
    if(toggle === 'api') {
      if(toggleApi === false) {
        setToggleApi(true);
        setApiSwitch({display:'inline-flex'});
      } else {
        setToggleApi(false);
        setApiSwitch({display:'none'});
      };
    };
    if(toggle === 'webhook') {
      if(toggleWebhook === false) {
        setToggleWebhook(true);
        setWebhookSwitch({display:'inline-flex'});
      } else {
        setToggleWebhook(false);
        setWebhookSwitch({display:'none'});
      };
    };
  };

  return (
    <>
      <nav className='navigationGrid'>
        <ul className='tabs'>
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} apiToggle={apiSwitch} webhookToggle={webhookSwitch}/>;
          })}
        </ul>
        <div className='toggles'>
          <div className='toggleRow'>
            <div className='toggleItem'><p>API</p></div>
            <Switch className='toggle' onChange={() => switchToggle('api')} checked={toggleApi} />
          </div>
          <div className='toggleRow'>
            <div className='toggleItem'><p><i>Webhook</i></p></div>
            <Switch className='toggle'onChange={() => switchToggle('webhook')} checked={toggleWebhook} />
          </div>
        </div>
      </nav>
    </>
  )
};

export default Navigation;
