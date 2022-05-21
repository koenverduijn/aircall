import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// Services
import CTI from './routes/CTI';
import CleanNumbers from './routes/CleanNumbers';
import GetRecordings from './routes/GetRecordings';
// APIs
import Users from './routes/Users';
import Teams from './routes/Teams';
import Calls from './routes/Calls';
import Numbers from './routes/Numbers';
import DialerCampaigns from './routes/DialerCampaigns';
import Contacts from './routes/Contacts';
import Tags from './routes/Tags';
import Webhooks from './routes/Webhooks';
import Integrations from './routes/Integrations';
// Webhooks
import User from './routes/User';
import Call from './routes/Call';
import Number from './routes/Number';
import Contact from './routes/Contact';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='services/clean-numbers' element={<CleanNumbers />} />
        <Route path='services/get-recordings' element={<GetRecordings />} />
        <Route path='services/cti' element={<CTI />} />
        <Route path='users' element={<Users />} />        
        <Route path='teams' element={<Teams />} />        
        <Route path='campaigns' element={<DialerCampaigns />} />        
        <Route path='calls' element={<Calls />} />        
        <Route path='numbers' element={<Numbers />} />        
        <Route path='contacts' element={<Contacts />} />        
        <Route path='tags' element={<Tags />} />        
        <Route path='webhooks' element={<Webhooks />} />        
        <Route path='integrations' element={<Integrations />} />
        <Route path='user' element={<User />} />   
        <Route path='call' element={<Call />} />   
        <Route path='number' element={<Number />} />   
        <Route path='contact' element={<Contact />} />   
      </Routes>
    </BrowserRouter>
  </>
  ,
  document.getElementById("root")
);
