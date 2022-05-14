import React, { useEffect,useState,useRef } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import FileUpload from '../components/FileUpload';
import '../styles/results.css';

export default function Tags() {

  async function apiCall(url) {
    const res = await fetch('https://api.aircall.io/v1/tags'+url,{
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
  const [tags,setTags] = useState([]);
  const [updatedTags,setUpdatedTags] = useState([]);
  const [pages,setPages] = useState([null,1,2]);
  const [togglePages,setTogglePages] = useState('');
  const [resultsPerPage,setResultsPerPage] = useState(20);
  const [queryFrom,setQueryFrom] = useState('2020-05-01');
  const [queryTo,setQueryTo] = useState(new Date().toISOString().split('T')[0]);
  const unixFrom = new Date(queryFrom).getTime() / 1000;
  const unixTo = new Date(queryTo).getTime() / 1000;
  const tagIdInput = useRef();
  const [tagId,setTagId] = useState('');
  const [allRows,setAllRows] = useState('');
  // load next pages of tags
  useEffect(async () => {
    let tagPage = pages[1];
    if(togglePages === 'next') tagPage = pages[2];
    if(togglePages === 'previous') tagPage = pages[0];
    setTags([]);
    setTogglePages('');
    const data = await apiCall(('?per_page='+resultsPerPage+'&page='+tagPage+'&from='+unixFrom+'&to='+unixTo+'&order=asc'));
    console.log([(data.meta.previous_page_link != null) ? data.meta.current_page - 1 : null,data.meta.current_page,(data.meta.next_page_link != null) ? data.meta.current_page+1: null]);
    setPages([(data.meta.previous_page_link != null) ? data.meta.current_page - 1 : null,data.meta.current_page,(data.meta.next_page_link != null) ? data.meta.current_page+1: null]);
    setTags(data.tags);
  },[togglePages,resultsPerPage])
  // get tag by ID
  const firstUpdate = useRef(true);
  useEffect(async () => {
    if(firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      const data = await apiCall('/'+tagId);
      setTags([data.tag]);
    };
  },[tagId]);

  function toggleComplete(event) {
    setShowUpdateDelete(!showUpdateDelete);
    let updatedId = event.target.id;
    updatedId = updatedId.split('_')[0];
    if(updatedTags.includes(updatedId)) setUpdatedTags(updatedTags.filter(item => item !== updatedId));
    else setUpdatedTags(oldTags => [...oldTags,updatedId]);
    console.log(updatedTags);
  };
  // create tag
  const [firstName,setFirstName] = useState('Aircall');
  const [lastName,setLastName] = useState('Tag'+new Date().getTime())
  const [email,setEmail] = useState(firstName+'.'+lastName+'@aircall.io');
  useEffect(()=>{
    setEmail(firstName+'.'+lastName+'@aircall.io');
  },[firstName,lastName])
  // update tag
  const [showUpdateDelete,setShowUpdateDelete] = useState(false);
  function updateTag() {

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
              <p>Tag ID</p>
              <input style={{gridColumnStart:2,gridColumnEnd:5,width:'14vw'}} type='number' name='tagId' defaultValue={tagId} ref={tagIdInput}/>
              <button style={{gridColumnStart:6}}onClick={() => setTagId(tagIdInput.current.value)}>Get Tag</button>
            </div>
            <h1>Tags</h1>
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
              {tags.map((tag) => (
                <React.Fragment key={tag.id}>
                  <input id={tag.id+'_check'} type='checkbox' checked={updatedTags.includes(tag.id)} onChange={toggleComplete}/>
                  <input id={tag.id+'_id'} type='text' defaultValue={tag.id} onChange={updateTag()}/>
                  <input id={tag.id+'_text'} type='text' defaultValue={tag.name} onChange={updateTag()}/>
                  <input id={tag.id+'_email'} type='email' defaultValue={tag.email} onChange={updateTag()}/>
                  <input id={tag.id+'_available'} type='checkbox' defaultChecked={(tag.available) ? 'checked' : ''} onChange={updateTag()}/>
                  <select id={tag.id+'_status'} type='text' defaultValue={tag.availability_status} onChange={updateTag()}><option value='available'>available</option><option value='unavailable'>unavailable</option><option value='custom'>custom</option></select>
                  <input id={tag.id+'_time'} type='text' defaultValue={tag.time_zone} onChange={updateTag()}/>
                  <input id={tag.id+'_language'} type='text' defaultValue={tag.language} onChange={updateTag()}/>
                  <input id={tag.id+'_wup'} type='number' defaultValue={tag.wrap_up_time} onChange={updateTag()}/>
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
                <button style={{gridColumnStart:1,gridColumnEnd:3}}>Create Tag</button>
              </form>
            </div>
          </div>
          <div className='operationButtons'>
            {(pages[0] != null) ? <button style={{gridColumnStart:2,gridColumnEnd:3}} onClick={() => setTogglePages('previous')}>Previous Page</button> : null }
            {(updatedTags.length > 0) ? <button style={{gridColumnStart:4,gridColumnEnd:5}} onClick={console.log(updatedTags)}>Update Tag(s)</button> : null }
            {(updatedTags.length > 0) ? <button style={{gridColumnStart:6,gridColumnEnd:7}}>Delete Tag(s)</button> : null }
            {(pages[2] != null) ? <button style={{gridColumnStart:8,gridColumnEnd:9}} onClick={() => setTogglePages('next')}>Next Page</button> : null}                       
          </div>
        </div>
      </div>
    </>
  );
}
