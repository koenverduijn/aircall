import React, { useState } from 'react';
import '../styles/webhooks.css';
import PropTypes from 'prop-types';
import { menuItems } from '../navigationItems';
import webhookPayloads from '../data/webhookPayload.json';

function Webhook(object) {
  const [webhookPayload,setWebhookPayload] = useState();
  const objectWebhooks = menuItems.find(i => i.id === object.object);
  function showPayload(e) {
    setWebhookPayload(webhookPayloads.find(w => w.name === e).body);
  };

  return (
    <>
      <div className='diagram'>
        {objectWebhooks.submenu.map((e,index) => (
          (index !== (objectWebhooks.submenu.length - 1)) ? 
            <div className='center' key={e.id}>
              <div className='router' onClick={() => showPayload(e.id)}>
                <svg className={e.id} height={'50'} width={'50'}>
                  <path d='M25 0 L50 25 L25 50 L0 25 Z' fill='none' stroke='grey' />
                </svg>
                <label>{e.name}</label>                  
              </div>
              <svg className='line' height={'50'} width={'50'}>
                <path d='M25 0 L25 25 Z' fill='grey' stroke='grey' />
              </svg> 
            </div> :
            <div className='router' key={e.id} onClick={() => showPayload(e.id)}>               
              <svg className={e.id} height={'50'} width={'50'}>
                <path d='M25 0 L50 25 L25 50 L0 25 Z' fill='none' stroke='grey' />
              </svg>
              <label>{e.name}</label>
            </div>
        ))}
      </div>
      <div className='payload'>
          <pre>{JSON.stringify(webhookPayload,null,2)}</pre>
      </div>
    </>
  )
};

Webhook.propTypes = {
  
}

export default Webhook;