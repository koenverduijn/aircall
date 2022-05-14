import React, { useEffect,useState,useRef } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import FileUpload from '../components/FileUpload';
import '../styles/results.css';

export default function Users() {

  async function apiCall(url) {
    const res = await fetch('https://api.aircall.io/v1/users'+url,{
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
  const [users,setUsers] = useState([]);
  const [updatedUsers,setUpdatedUsers] = useState([]);
  const [pages,setPages] = useState([null,1,2]);
  const [togglePages,setTogglePages] = useState('');
  const [resultsPerPage,setResultsPerPage] = useState(20);
  const [queryFrom,setQueryFrom] = useState('2020-05-01');
  const [queryTo,setQueryTo] = useState(new Date().toISOString().split('T')[0]);
  const unixFrom = new Date(queryFrom).getTime() / 1000;
  const unixTo = new Date(queryTo).getTime() / 1000;
  const userIdInput = useRef();
  const [userId,setUserId] = useState('');
  const [allRows,setAllRows] = useState('');
  // load next pages of users
  useEffect(async () => {
    let userPage = pages[1];
    if(togglePages === 'next') userPage = pages[2];
    if(togglePages === 'previous') userPage = pages[0];
    setUsers([]);
    setTogglePages('');
    const data = await apiCall(('?per_page='+resultsPerPage+'&page='+userPage+'&from='+unixFrom+'&to='+unixTo+'&order=asc'));
    console.log([(data.meta.previous_page_link != null) ? data.meta.current_page - 1 : null,data.meta.current_page,(data.meta.next_page_link != null) ? data.meta.current_page+1: null]);
    setPages([(data.meta.previous_page_link != null) ? data.meta.current_page - 1 : null,data.meta.current_page,(data.meta.next_page_link != null) ? data.meta.current_page+1: null]);
    setUsers(data.users);
  },[togglePages,resultsPerPage])
  // get user by ID
  const firstUpdate = useRef(true);
  useEffect(async () => {
    if(firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      const data = await apiCall('/'+userId);
      setUsers([data.user]);
    };
  },[userId]);

  function toggleComplete(event) {
    setShowUpdateDelete(!showUpdateDelete);
    let updatedId = event.target.id;
    updatedId = updatedId.split('_')[0];
    if(updatedUsers.includes(updatedId)) setUpdatedUsers(updatedUsers.filter(item => item !== updatedId));
    else setUpdatedUsers(oldUsers => [...oldUsers,updatedId]);
    console.log(updatedUsers);
  };
  // create user
  const [firstName,setFirstName] = useState('Aircall');
  const [lastName,setLastName] = useState('User'+new Date().getTime())
  const [email,setEmail] = useState(firstName+'.'+lastName+'@aircall.io');
  useEffect(()=>{
    setEmail(firstName+'.'+lastName+'@aircall.io');
  },[firstName,lastName])
  // update user
  const [showUpdateDelete,setShowUpdateDelete] = useState(false);
  function updateUser() {

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
              <p>User ID</p>
              <input style={{gridColumnStart:2,gridColumnEnd:5,width:'14vw'}} type='number' name='userId' defaultValue={userId} ref={userIdInput}/>
              <button style={{gridColumnStart:6}}onClick={() => setUserId(userIdInput.current.value)}>Get User</button>
            </div>
            <h1>Users</h1>
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
              {users.map((user) => (
                <React.Fragment key={user.id}>
                  <input id={user.id+'_check'} type='checkbox' checked={updatedUsers.includes(user.id)} onChange={toggleComplete}/>
                  <input id={user.id+'_id'} type='text' defaultValue={user.id} onChange={updateUser()}/>
                  <input id={user.id+'_text'} type='text' defaultValue={user.name} onChange={updateUser()}/>
                  <input id={user.id+'_email'} type='email' defaultValue={user.email} onChange={updateUser()}/>
                  <input id={user.id+'_available'} type='checkbox' defaultChecked={(user.available) ? 'checked' : ''} onChange={updateUser()}/>
                  <select id={user.id+'_status'} type='text' defaultValue={user.availability_status} onChange={updateUser()}><option value='available'>available</option><option value='unavailable'>unavailable</option><option value='custom'>custom</option></select>
                  <input id={user.id+'_time'} type='text' defaultValue={user.time_zone} onChange={updateUser()}/>
                  <input id={user.id+'_language'} type='text' defaultValue={user.language} onChange={updateUser()}/>
                  <input id={user.id+'_wup'} type='number' defaultValue={user.wrap_up_time} onChange={updateUser()}/>
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
                <button style={{gridColumnStart:1,gridColumnEnd:3}}>Create User</button>
              </form>
            </div>
          </div>
          <div className='operationButtons'>
            {(pages[0] != null) ? <button style={{gridColumnStart:2,gridColumnEnd:3}} onClick={() => setTogglePages('previous')}>Previous Page</button> : null }
            {(updatedUsers.length > 0) ? <button style={{gridColumnStart:4,gridColumnEnd:5}} onClick={console.log(updatedUsers)}>Update User(s)</button> : null }
            {(updatedUsers.length > 0) ? <button style={{gridColumnStart:6,gridColumnEnd:7}}>Delete User(s)</button> : null }
            {(pages[2] != null) ? <button style={{gridColumnStart:8,gridColumnEnd:9}} onClick={() => setTogglePages('next')}>Next Page</button> : null}                       
          </div>
        </div>
      </div>
    </>
  );
}
