import React, { useEffect,useState,useRef } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import FileUpload from '../components/FileUpload';
import '../styles/results.css';

export default function DialerCampaigns() {

  async function apiCall(url,user) {
    const res = await fetch('https://api.aircall.io/v1/dialerCampaigns/'+user+'/'+url,{
        method: 'GET',
        headers: {
          Authorization: auth,
        }
      });
      if(res.status != 200) {
        setError(true);
        setErrorMessage(res.status+' '+res.text());
      } else {
        return await res.json();
      };
  };

  const auth = 'Basic '+ JSON.parse(window.localStorage.getItem('apiAuth'));
  const [error,setError] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');
  const [dialerCampaigns,setDialerCampaigns] = useState([]);
  const [updatedDialerCampaigns,setUpdatedDialerCampaigns] = useState([]);
  const [pages,setPages] = useState([null,1,2]);
  const [togglePages,setTogglePages] = useState('');
  const [resultsPerPage,setResultsPerPage] = useState(20);
  const [queryFrom,setQueryFrom] = useState('2020-05-01');
  const [queryTo,setQueryTo] = useState(new Date().toISOString().split('T')[0]);
  const unixFrom = new Date(queryFrom).getTime() / 1000;
  const unixTo = new Date(queryTo).getTime() / 1000;
  const dialerCampaignIdInput = useRef();
  const [dialerCampaignId,setDialerCampaignId] = useState('');
  const [allRows,setAllRows] = useState('');
  // load next pages of dialerCampaigns
  useEffect(async () => {
    let dialerCampaignPage = pages[1];
    if(togglePages === 'next') dialerCampaignPage = pages[2];
    if(togglePages === 'previous') dialerCampaignPage = pages[0];
    setDialerCampaigns([]);
    setTogglePages('');
    const data = await apiCall(('?per_page='+resultsPerPage+'&page='+dialerCampaignPage+'&from='+unixFrom+'&to='+unixTo+'&order=asc'));
    console.log([(data.meta.previous_page_link != null) ? data.meta.current_page - 1 : null,data.meta.current_page,(data.meta.next_page_link != null) ? data.meta.current_page+1: null]);
    setPages([(data.meta.previous_page_link != null) ? data.meta.current_page - 1 : null,data.meta.current_page,(data.meta.next_page_link != null) ? data.meta.current_page+1: null]);
    setDialerCampaigns(data.dialerCampaigns);
  },[togglePages,resultsPerPage])
  // get dialerCampaign by ID
  const firstUpdate = useRef(true);
  useEffect(async () => {
    if(firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      const data = await apiCall('/'+dialerCampaignId);
      setDialerCampaigns([data.dialerCampaign]);
    };
  },[dialerCampaignId]);

  function toggleComplete(event) {
    setShowUpdateDelete(!showUpdateDelete);
    let updatedId = event.target.id;
    updatedId = updatedId.split('_')[0];
    if(updatedDialerCampaigns.includes(updatedId)) setUpdatedDialerCampaigns(updatedDialerCampaigns.filter(item => item !== updatedId));
    else setUpdatedDialerCampaigns(oldDialerCampaigns => [...oldDialerCampaigns,updatedId]);
    console.log(updatedDialerCampaigns);
  };
  // create dialerCampaign
  const [firstName,setFirstName] = useState('Aircall');
  const [lastName,setLastName] = useState('DialerCampaign'+new Date().getTime())
  const [email,setEmail] = useState(firstName+'.'+lastName+'@aircall.io');
  useEffect(()=>{
    setEmail(firstName+'.'+lastName+'@aircall.io');
  },[firstName,lastName])
  // update dialerCampaign
  const [showUpdateDelete,setShowUpdateDelete] = useState(false);
  function updateDialerCampaign() {

  };
  return (
    <>
      <div className='main'>
        <Header className='header'/>
        <Logo className='logo'/>
        <Navigation className='navigation'/>
        <div className='console'>
          <div className='header nextEach'>
            <div className='parameters'>
              <p>Results</p>
              <input type='number' defaultValue={resultsPerPage} onChange={(e) => setResultsPerPage(e.target.value)}/>
              <p>From</p>
              <input type='date' id='' defaultValue={queryFrom} min='2020-05-01' max={queryTo} onChange={(e) => setQueryFrom(e.target.value)}/>
              <p>To</p>
              <input type='date' id='' defaultValue={queryTo} min={queryFrom} max={new Date().toISOString().split('T')[0]} onChange={(e) => setQueryTo(e.target.value)}/>
              <p>DialerCampaign ID</p>
              <input style={{gridColumnStart:2,gridColumnEnd:5,width:'14vw'}} type='number' name='dialerCampaignId' defaultValue={dialerCampaignId} ref={dialerCampaignIdInput}/>
              <button style={{gridColumnStart:6}}onClick={() => setDialerCampaignId(dialerCampaignIdInput.current.value)}>Get DialerCampaign</button>
            </div>
            <h1>DialerCampaigns</h1>
          </div>
          {error && <p>{errorMessage}</p>}
          <div className='result nextEach'>
            <div className='results'>
              <input type='checkbox' onClick={() => {if(allRows === '') setAllRows('checked'); else setAllRows('');}}/>
              <p>ID</p>
              <p>Full Name</p>
              <p>Email</p>
              <p>Available</p>
              <p>Status</p>
              <p>Time Zone</p>
              <p>Language</p>
              <p>WUP</p>
              {dialerCampaigns.map((dialerCampaign) => (
                <React.Fragment key={dialerCampaign.id}>
                  <input id={dialerCampaign.id+'_check'} type='checkbox' checked={updatedDialerCampaigns.includes(dialerCampaign.id)} onChange={toggleComplete}/>
                  <input id={dialerCampaign.id+'_id'} type='text' defaultValue={dialerCampaign.id} onChange={updateDialerCampaign()}/>
                  <input id={dialerCampaign.id+'_text'} type='text' defaultValue={dialerCampaign.name} onChange={updateDialerCampaign()}/>
                  <input id={dialerCampaign.id+'_email'} type='email' defaultValue={dialerCampaign.email} onChange={updateDialerCampaign()}/>
                  <input id={dialerCampaign.id+'_available'} type='checkbox' defaultChecked={(dialerCampaign.available) ? 'checked' : ''} onChange={updateDialerCampaign()}/>
                  <select id={dialerCampaign.id+'_status'} type='text' defaultValue={dialerCampaign.availability_status} onChange={updateDialerCampaign()}><option value='available'>available</option><option value='unavailable'>unavailable</option><option value='custom'>custom</option></select>
                  <input id={dialerCampaign.id+'_time'} type='text' defaultValue={dialerCampaign.time_zone} onChange={updateDialerCampaign()}/>
                  <input id={dialerCampaign.id+'_language'} type='text' defaultValue={dialerCampaign.language} onChange={updateDialerCampaign()}/>
                  <input id={dialerCampaign.id+'_wup'} type='number' defaultValue={dialerCampaign.wrap_up_time} onChange={updateDialerCampaign()}/>
                </React.Fragment>
              ))}
            </div>
            <div className='create'>
              <form className='createForm' action=''>
                <label className='verCenter' htmlFor='first_name'><p>First Name</p></label>
                <input type='text' name='first_name' id='first_name' defaultValue={firstName} onInput={(e) => setFirstName(e.target.value)}/>
                <label className='verCenter' htmlFor='last_name'><p>Last Name</p></label>
                <input type='text' name='last_name' id='last_name' defaultValue={lastName} onInput={(e) => setLastName(e.target.value)}/>
                <label className='verCenter' htmlFor='email'><p>Email</p></label>
                <input type='text' name='email' id='email' defaultValue={email} onFocus={() =>email}/>
                <label className='verCenter' htmlFor='availability_status'><p>Availability Status</p></label>
                <select type='text' name='availability_status' id='availability_status'defaultValue='available'><option value='available'>available</option><option value='unavailable'>unavailable</option><option value='custom'>custom</option></select>
                <label className='verCenter' htmlFor='is_admin'><p>Admin</p></label>
                <input type='checkbox' name='is_admin' id='is_admin' defaultChecked={true}/>
                <FileUpload fileTypes={'.csv,.txt'}/>                
                <button style={{gridColumnStart:1,gridColumnEnd:3}}>Create DialerCampaign</button>
              </form>
            </div>
          </div>
          <div className='operationButtons'>
            {(pages[0] != null) ? <button style={{gridColumnStart:2,gridColumnEnd:3}} onClick={() => setTogglePages('previous')}>Previous Page</button> : null }
            {(updatedDialerCampaigns.length > 0) ? <button style={{gridColumnStart:4,gridColumnEnd:5}} onClick={console.log(updatedDialerCampaigns)}>Update DialerCampaign(s)</button> : null }
            {(updatedDialerCampaigns.length > 0) ? <button style={{gridColumnStart:6,gridColumnEnd:7}}>Delete DialerCampaign(s)</button> : null }
            {(pages[2] != null) ? <button style={{gridColumnStart:8,gridColumnEnd:9}} onClick={() => setTogglePages('next')}>Next Page</button> : null}                       
          </div>
        </div>
      </div>
    </>
  );
}
