import React from 'react';
import './styles/app.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Console from './components/Console';

function App() {
  return (
    <>
      <div className='main'>
        <Header className='header'/>
        <Logo className='logo'/>
        <Navigation className='navigation'/>
        <Console />
      </div>
    </>
  );
};

export default App;
