import React, { useEffect,useState,useRef } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import '../styles/results.css';

export default function Numbers() {

  async function apiCall(url) {
    const res = await fetch('https://api.aircall.io/v1/numbers'+url,{
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
  const [numbers,setNumbers] = useState([]);
  const [pages,setPages] = useState([null,1,2]);
  const [togglePages,setTogglePages] = useState('');
  const [resultsPerPage,setResultsPerPage] = useState(20);
  const [queryFrom,setQueryFrom] = useState('2020-05-01');
  const [queryTo,setQueryTo] = useState(new Date().toISOString().split('T')[0]);
  const unixFrom = new Date(queryFrom).getTime() / 1000;
  const unixTo = new Date(queryTo).getTime() / 1000;
  const numberIdInput = useRef();
  const [numberId,setNumberId] = useState('');
  const [allRows,setAllRows] = useState('');
  // load next pages of numbers
  useEffect(async () => {
    let numberPage = pages[1];
    if(togglePages === 'next') numberPage = pages[2];
    if(togglePages === 'previous') numberPage = pages[0];
    setNumbers([]);
    setTogglePages('');
    const data = await apiCall(('?per_page='+resultsPerPage+'&page='+numberPage+'&from='+unixFrom+'&to='+unixTo+'&order=asc'));
    console.log([(data.meta.previous_page_link != null) ? data.meta.current_page - 1 : null,data.meta.current_page,(data.meta.next_page_link != null) ? data.meta.current_page+1: null]);
    setPages([(data.meta.previous_page_link != null) ? data.meta.current_page - 1 : null,data.meta.current_page,(data.meta.next_page_link != null) ? data.meta.current_page+1: null]);
    setNumbers(data.numbers);
  },[togglePages,resultsPerPage])
  // get number by ID
  const firstUpdate = useRef(true);
  useEffect(async () => {
    if(firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      const data = await apiCall('/'+numberId);
      setNumbers([data.number]);
    };
  },[numberId]);

  const row = [];
  function toggleComplete(event) {
    setShowUpdateDelete(!showUpdateDelete);
    const rowId = event.target.parentNode.parentNode.id;
    if(row.includes(rowId)) row.pop(rowId)
    else row.push(rowId);
    console.log(row);
  }
  // create number
  const [firstName,setFirstName] = useState('Aircall');
  const [lastName,setLastName] = useState('Number'+new Date().getTime())
  const [email,setEmail] = useState(firstName+'.'+lastName+'@aircall.io');
  useEffect(()=>{
    setEmail(firstName+'.'+lastName+'@aircall.io');
  },[firstName,lastName])
  // update number
  const [showUpdateDelete,setShowUpdateDelete] = useState(false);
  function updateNumber() {

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
              <p>Number ID</p>
              <input style={{gridColumnStart:2,gridColumnEnd:5,width:'14vw'}} type='number' name='numberId' defaultValue={numberId} ref={numberIdInput}/>
              <button style={{gridColumnStart:6}}onClick={() => setNumberId(numberIdInput.current.value)}>Get Number</button>
            </div>
            <h1>Numbers</h1>
          </div>
          {error && <p>{errorMessage}</p>}
          <div className='result nextEach'>
            <div className='results'>
              <input type='checkbox' onClick={() => {if(allRows === '') setAllRows('checked'); else setAllRows('');}}/>
              <p>ID</p>
              <p>Name</p>
              <p>Digits</p>
              <p>Open</p>
              <p>Status</p>
              <p>Time Zone</p>
              <p>Priority</p>
              <p>IVR</p>
              {numbers.map((number) => (
                <React.Fragment key={number.id}>
                  <input type='checkbox' checked={row.checked} onChange={toggleComplete}/>
                  <input type='text' defaultValue={number.id} onChange={updateNumber()}/>
                  <input type='text' defaultValue={number.name} onChange={updateNumber()}/>
                  <input type='text' defaultValue={number.digits} onChange={updateNumber()}/>
                  <input type='checkbox' defaultChecked={(number.open) ? 'checked' : ''} onChange={updateNumber()}/>
                  <select type='text' defaultValue={number.availability_status} onChange={updateNumber()}><option value='available'>open</option><option value='unavailable'>closed</option><option value='custom'>custom</option></select>
                  <input type='text' defaultValue={number.time_zone} onChange={updateNumber()}/>
                  <input type='text' defaultValue={number.priority} onChange={updateNumber()}/>
                  <input type='checkbox' defaultValue={(number.is_ivr)? 'checked' : ''} onChange={updateNumber()}/>
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
                <button style={{gridColumnStart:1,gridColumnEnd:3}}>Create Number</button>
              </form>
            </div>
          </div>
          <div className='operationButtons'>
            {(pages[0] != null) ? <button style={{gridColumnStart:2,gridColumnEnd:3}} onClick={() => setTogglePages('previous')}>Previous Page</button> : null }
            {(showUpdateDelete) ? <button style={{gridColumnStart:4,gridColumnEnd:5}}>Update Number(s)</button> : null }
            {(showUpdateDelete) ? <button style={{gridColumnStart:6,gridColumnEnd:7}}>Delete Number(s)</button> : null }
            {(pages[2] != null) ? <button style={{gridColumnStart:8,gridColumnEnd:9}} onClick={() => setTogglePages('next')}>Next Page</button> : null}                       
          </div>
        </div>
      </div>
    </>
  );
}
