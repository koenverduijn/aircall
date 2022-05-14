import React, { useEffect,useState,useRef } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import FileUpload from '../components/FileUpload';
import '../styles/results.css';

export default function Teams() {

  async function apiCall(url) {
    const res = await fetch('https://api.aircall.io/v1/teams'+url,{
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
  const [teams,setTeams] = useState([]);
  const [pages,setPages] = useState([null,1,2]);
  const [togglePages,setTogglePages] = useState('');
  const [resultsPerPage,setResultsPerPage] = useState(20);
  const [queryFrom,setQueryFrom] = useState('2020-05-01');
  const [queryTo,setQueryTo] = useState(new Date().toISOString().split('T')[0]);
  const unixFrom = new Date(queryFrom).getTime() / 1000;
  const unixTo = new Date(queryTo).getTime() / 1000;
  const teamIdInput = useRef();
  const [teamId,setTeamId] = useState('');
  const [allRows,setAllRows] = useState('');
  // load next pages of teams
  useEffect(async () => {
    let teamPage = pages[1];
    if(togglePages === 'next') teamPage = pages[2];
    if(togglePages === 'previous') teamPage = pages[0];
    setTeams([]);
    setTogglePages('');
    const data = await apiCall(('?per_page='+resultsPerPage+'&page='+teamPage+'&from='+unixFrom+'&to='+unixTo+'&order=asc'));
    console.log([(data.meta.previous_page_link != null) ? data.meta.current_page - 1 : null,data.meta.current_page,(data.meta.next_page_link != null) ? data.meta.current_page+1: null]);
    setPages([(data.meta.previous_page_link != null) ? data.meta.current_page - 1 : null,data.meta.current_page,(data.meta.next_page_link != null) ? data.meta.current_page+1: null]);
    setTeams(data.teams);
  },[togglePages,resultsPerPage])
  // get team by ID
  const firstUpdate = useRef(true);
  useEffect(async () => {
    if(firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      const data = await apiCall('/'+teamId);
      setTeams([data.team]);
    };
  },[teamId]);

  const row = [];
  function toggleComplete(event) {
    setShowUpdateDelete(!showUpdateDelete);
    const rowId = event.target.parentNode.parentNode.id;
    if(row.includes(rowId)) row.pop(rowId)
    else row.push(rowId);
    console.log(row);
  }
  // create team
  const [firstName,setFirstName] = useState('Aircall');
  const [lastName,setLastName] = useState('Team'+new Date().getTime())
  const [email,setEmail] = useState(firstName+'.'+lastName+'@aircall.io');
  useEffect(()=>{
    setEmail(firstName+'.'+lastName+'@aircall.io');
  },[firstName,lastName])
  // update team
  const [showUpdateDelete,setShowUpdateDelete] = useState(false);
  function updateTeam() {

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
              <p>Team ID</p>
              <input style={{gridColumnStart:2,gridColumnEnd:5,width:'14vw'}} type='number' name='teamId' defaultValue={teamId} ref={teamIdInput}/>
              <button style={{gridColumnStart:6}}onClick={() => setTeamId(teamIdInput.current.value)}>Get Team</button>
            </div>
            <h1>Teams</h1>
          </div>
          {error && <p>{errorMessage}</p>}
          <div className='result nextEach'>
            <div className='results'>
              <input type='checkbox' onClick={() => {if(allRows === '') setAllRows('checked'); else setAllRows('');}}/>
              <p>ID</p>
              <p>Name</p>
              <p>Users</p>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              {teams.map((team) => (
                <React.Fragment key={team.id}>
                  <input type='checkbox' checked={row.checked} onChange={toggleComplete}/>
                  <input type='text' defaultValue={team.id} onChange={updateTeam()}/>
                  <input type='text' defaultValue={team.name} onChange={updateTeam()}/>
                  <input type='text' defaultValue={JSON.stringify(team.users)} onChange={updateTeam()}/>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </React.Fragment>
              ))}
            </div>
            <div className='create'>
              <form className='createForm' action=''>
                <label className='verCenter' htmlFor='name'><p>Name</p></label>
                <input type='text' name='name' id='name' defaultValue={firstName} onInput={(e) => setFirstName(e.target.value)}/>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <FileUpload fileTypes={'.csv,.txt'}/>                
                <button style={{gridColumnStart:1,gridColumnEnd:3}}>Create Team</button>
              </form>
            </div>
          </div>
          <div className='operationButtons'>
            {(pages[0] != null) ? <button style={{gridColumnStart:2,gridColumnEnd:3}} onClick={() => setTogglePages('previous')}>Previous Page</button> : null }
            {(showUpdateDelete) ? <button style={{gridColumnStart:4,gridColumnEnd:5}}>Update Team(s)</button> : null }
            {(showUpdateDelete) ? <button style={{gridColumnStart:6,gridColumnEnd:7}}>Delete Team(s)</button> : null }
            {(pages[2] != null) ? <button style={{gridColumnStart:8,gridColumnEnd:9}} onClick={() => setTogglePages('next')}>Next Page</button> : null}                       
          </div>
        </div>
      </div>
    </>
  );
}
