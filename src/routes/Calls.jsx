import React, { useEffect,useState,useRef } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import '../styles/results.css';

export default function Calls() {

  async function apiCall(url) {
    const res = await fetch('https://api.aircall.io/v1/calls'+url,{
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
  const [calls,setCalls] = useState([]);
  const [pages,setPages] = useState([null,1,2]);
  const [togglePages,setTogglePages] = useState('');
  const [resultsPerPage,setResultsPerPage] = useState(20);
  const [queryFrom,setQueryFrom] = useState('2020-05-01');
  const [queryTo,setQueryTo] = useState(new Date().toISOString().split('T')[0]);
  const unixFrom = new Date(queryFrom).getTime() / 1000;
  const unixTo = new Date(queryTo).getTime() / 1000;
  const callIdInput = useRef();
  const [callId,setCallId] = useState('');
  const [allRows,setAllRows] = useState('');
  // load next pages of calls
  useEffect(async () => {
    let callPage = pages[1];
    if(togglePages === 'next') callPage = pages[2];
    if(togglePages === 'previous') callPage = pages[0];
    setCalls([]);
    setTogglePages('');
    const data = await apiCall(('?per_page='+resultsPerPage+'&page='+callPage+'&from='+unixFrom+'&to='+unixTo+'&order=asc'));
    console.log([(data.meta.previous_page_link != null) ? data.meta.current_page - 1 : null,data.meta.current_page,(data.meta.next_page_link != null) ? data.meta.current_page+1: null]);
    setPages([(data.meta.previous_page_link != null) ? data.meta.current_page - 1 : null,data.meta.current_page,(data.meta.next_page_link != null) ? data.meta.current_page+1: null]);
    setCalls(data.calls);
  },[togglePages,resultsPerPage])
  // get call by ID
  const firstUpdate = useRef(true);
  useEffect(async () => {
    if(firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      const data = await apiCall('/'+callId);
      setCalls([data.call]);
    };
  },[callId]);

  const row = [];
  function toggleComplete(event) {
    setShowUpdateDelete(!showUpdateDelete);
    const rowId = event.target.parentNode.parentNode.id;
    if(row.includes(rowId)) row.pop(rowId)
    else row.push(rowId);
    console.log(row);
  }
  // create call
  const [firstName,setFirstName] = useState('Aircall');
  const [lastName,setLastName] = useState('Call'+new Date().getTime())
  const [email,setEmail] = useState(firstName+'.'+lastName+'@aircall.io');
  useEffect(()=>{
    setEmail(firstName+'.'+lastName+'@aircall.io');
  },[firstName,lastName])
  // update call
  const [showUpdateDelete,setShowUpdateDelete] = useState(false);
  function updateCall() {

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
              <p>Call ID</p>
              <input style={{gridColumnStart:2,gridColumnEnd:5,width:'14vw'}} type='number' name='callId' defaultValue={callId} ref={callIdInput}/>
              <button style={{gridColumnStart:6}}onClick={() => setCallId(callIdInput.current.value)}>Get Call</button>
            </div>
            <h1>Calls</h1>
          </div>
          {error && <p>{errorMessage}</p>}
          <div className='result nextEach'>
            <div className='results'>
              <input type='checkbox' onClick={() => {if(allRows === '') setAllRows('checked'); else setAllRows('');}}/>
              <p>ID</p>
              <p>Started</p>
              <p>Duration</p>
              <p>Direction</p>
              <p>Status</p>
              <p>Comments</p>
              <p>Tags</p>
              <p>Caller</p>
              {calls.map((call) => (
                <React.Fragment key={call.id}>
                  <input type='checkbox' checked={row.checked} onChange={toggleComplete}/>
                  <input type='text' defaultValue={call.id} onChange={updateCall()}/>
                  <input type='text' defaultValue={new Date(call.started_at * 1000)} onChange={updateCall()}/>
                  <input type='email' defaultValue={call.duration} onChange={updateCall()}/>
                  <input type='checkbox' defaultChecked={(call.direction === 'inbound') ? 'checked' : ''} onChange={updateCall()}/>
                  <select type='text' defaultValue={call.status} onChange={updateCall()}><option value='available'>available</option><option value='unavailable'>unavailable</option><option value='custom'>custom</option></select>
                  <input type='text' defaultValue={call.comments} onChange={updateCall()}/>
                  <input type='text' defaultValue={call.tags} onChange={updateCall()}/>
                  <input type='text' defaultValue={call.raw_digits} onChange={updateCall()}/>
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
                <button style={{gridColumnStart:1,gridColumnEnd:3}}>Create Call</button>
              </form>
            </div>
          </div>
          <div className='operationButtons'>
            {(pages[0] != null) ? <button style={{gridColumnStart:2,gridColumnEnd:3}} onClick={() => setTogglePages('previous')}>Previous Page</button> : null }
            {(showUpdateDelete) ? <button style={{gridColumnStart:4,gridColumnEnd:5}}>Update Call(s)</button> : null }
            {(showUpdateDelete) ? <button style={{gridColumnStart:6,gridColumnEnd:7}}>Delete Call(s)</button> : null }
            {(pages[2] != null) ? <button style={{gridColumnStart:8,gridColumnEnd:9}} onClick={() => setTogglePages('next')}>Next Page</button> : null}                       
          </div>
        </div>
      </div>
    </>
  );
}
