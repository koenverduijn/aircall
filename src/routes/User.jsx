import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import '../styles/webhooks.css';
import { menuItems } from '../navigationItems';
import webhookPayloads from '../data/webhookPayload.json';
import Webhook from '../components/Webhook.js';


export default function User() {
  return (
    <>
      <div className='main'>
        <Header className='header'/>
        <Logo className='logo'/>
        <Navigation className='navigation'/>
        <Webhook object={'user'}/>
      </div>
    </>
  )
};