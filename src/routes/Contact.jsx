import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Webhook from '../components/Webhook';

export default function Contact() {
  return (
    <>
      <div className='main'>
        <Header className='header'/>
        <Logo className='logo'/>
        <Navigation className='navigation'/>
        <Webhook object={'contact'}/>        
      </div>
    </>
  )
};