import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import AircallPhone from 'aircall-everywhere';

export default function CTI() {
  // const aircallPhone = new AircallPhone({
  //   onLogin: (settings) => {
  //     console.log('phone loaded');
  //     //doStuff();
  //   },
  //   onLogout: () => {},
  //   domToLoadPhone: '#phone',
  //   size: 'big',
  // });

  return (
    <>
      <div className='main'>
        <Header className='header'/>
        <Logo className='logo'/>
        <Navigation className='navigation'/>
        <div className='console'>
          <iframe
            allow="microphone; autoplay; clipboard-read; clipboard-write; hid"
            src="https://phone.aircall.io?integration=generic"
            style={{height:'100%',width:'100%'}}
          >
          </iframe>
        </div>
      </div>
    </>
  );
}
