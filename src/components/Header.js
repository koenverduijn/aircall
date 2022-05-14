import React from 'react';
import { useState } from 'react';
import { Buffer } from 'buffer';
import '../styles/header.css';
import { useEffect } from 'react';

const Header = () => {
  
  // handle status button
  const defaultButtonText = 'Not Connected';
  const [btnStyle, setStyle] = useState({backgroundColor:'white',color:'#74787d'});
  const [buttonText, setText] = useState(window.localStorage.getItem('apiStatus') || defaultButtonText);
  function btnText(action) {
    if(buttonText === 'Connected' && action === 'mouseOver') {
      setText('Disconnect');
      setStyle({backgroundColor:'orange',color:'white'});
    };     
    if(buttonText === 'Disconnect' && action === 'mouseOut') {
      setText('Connected');
      setStyle({backgroundColor:'green',color:'white'});
    };
    if(buttonText === 'Not Connected' && action == 'mouseOver') {
      setText('Connect');
      setStyle({backgroundColor:'orange',color:'white'});
    };
    if(buttonText === 'Connect' && action == 'mouseOut') {
      setText('Not Connected');
      setStyle({backgroundColor:'white',color:'#74787d'});
    };
  };

  // api connection
  let [companyName, setCompanyName] = useState();
  let [companyUsers, setCompanyUsers] = useState();
  let [companyNumbers, setCompanyNumbers] = useState();
  const defaultApiId = '24898b290d8f892eae993aa4fb5e4fff';
  const defaultApiToken = '6bd69dc3aeb32a276b00c5a4b9607723';
  const [apiId,setApiId] = useState(defaultApiId);
  const [apiToken,setApiToken] = useState(defaultApiToken);

  useEffect(() => {
    if(window.localStorage.getItem('companyStats') != null) {
      setCompanyName(JSON.parse(window.localStorage.getItem('companyStats')).company.name);
      setCompanyUsers(JSON.parse(window.localStorage.getItem('companyStats')).company.users_count);
      setCompanyNumbers(JSON.parse(window.localStorage.getItem('companyStats')).company.numbers_count);  
    };
    const apiStatus = window.localStorage.getItem('apiStatus');
    if(apiStatus === 'Connected') setStyle({backgroundColor:'green',color:'white'});
  },[])
  async function aircallAPIping() {
    window.localStorage.setItem('apiAuth',JSON.stringify(Buffer.from(apiId+':'+apiToken).toString('base64')));
    if(buttonText === 'Connect') {
      // GET Ping Pong
      const encodedAuth = Buffer.from(apiId+':'+apiToken).toString('base64');
      const resPing = await fetch('https://api.aircall.io/v1/ping', {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${encodedAuth}`,
        }
      });
      const pingData = await resPing.json();
      if(pingData.ping === 'pong') {
        setText('Connected');
        window.localStorage.setItem('apiStatus','Connected');
        setStyle({backgroundColor:'green',color:'white'});
        const resCompany = await fetch('https://api.aircall.io/v1/company', {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${encodedAuth}`,
          }
        });
        const companyData = await resCompany.json();
        window.localStorage.setItem('companyStats',JSON.stringify(companyData))
        companyName = setCompanyName(companyData.company.name);
        companyUsers = setCompanyUsers(companyData.company.users_count);
        companyNumbers = setCompanyNumbers(companyData.company.numbers_count);
      } else {
        setText('Check API ID / Token');
        window.localStorage.setItem('apiStatus','Check API ID / Token');
        setStyle({backgroundColor:'red',color:'white'});
      };
    } else if(buttonText === 'Disconnect') {
      setText('Not Connected');
      window.localStorage.setItem('apiStatus','Not Connected');
      window.localStorage.removeItem('companyStats');
      setStyle({backgroundColor:'white',color:'#74787d'});
      setCompanyName();
      setCompanyNumbers();
      setCompanyUsers();
    }
    
  };
  
  return (
    <>
      <div className='headerGrid'>
        <div className='titleDiv'>
          <h4 className='titleItem'>Company: <span className='accent'>{companyName}</span></h4>
          <div className='titleItem'>
            <p>Users: <span className='accent'>{companyUsers}</span></p>
            <p>Numbers: <span className='accent'>{companyNumbers}</span></p>
          </div>
        </div>
        <div className='loginDiv'>
          <div className='loginColumns'>
            <div className='loginRow'>
              <label className='inputLabel' htmlFor='apiId'>API ID</label>
              <input className='inputValue' type='text' name='apiId' value={apiId} onChange={e => setApiId(e.target.value)}/>
            </div>
            <div className='loginRow'>
              <label className='inputLabel' htmlFor='apiToken'>API Token</label>
              <input className='inputValue' type='password' name='apiToken' value={apiToken} onChange={e => setApiToken(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className='connectDiv'>
          <button className='btnConnect'
                  onMouseOver={() => btnText('mouseOver')}
                  onMouseOut={() => btnText('mouseOut')}
                  onClick={() => aircallAPIping()}
                  style={btnStyle}>
                    {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
