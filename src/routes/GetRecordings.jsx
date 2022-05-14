import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import FileUpload from '../components/FileUpload';
import { useState } from 'react';
import Promise from 'bluebird';
import JsZip from 'jszip';
import FileSaver from 'file-saver';
import { useEffect } from 'react';

export default function GetRecordings() {
  // download recordings in memory
  const download = url => {
    return fetch(url).then(resp => resp.blob());
  };
  async function downloadByGroup(recordings, files_per_group=5) {
    return Promise.map(
      recordings, 
      async recording => {
        return await download(recording.recordingUrl);
      },
      {concurrency: files_per_group}
    );
  }
  // combine blobs as zip
  async function exportZip(blobs,recordings) {
    setLogArray([...logArray,{log:'Step 5/5: Zipping all recordings'}]);
    const zip = JsZip();
    blobs.forEach((blob, i) => {
      zip.file(`${recordings[i].started}-aircall-recording-${recordings[i].id}.mp3`, blob);
    });
    zip.generateAsync({type: 'blob'}).then(zipFile => {
      const currentDate = new Date().getTime();
      const fileName = `all-aircall-recordings-${currentDate}.zip`;
      return FileSaver.saveAs(zipFile, fileName);
    });
    setLogArray([]);
  };
  async function downloadAndZip(calls) {
    let recordings = [];
    calls.forEach((call,i) => {
      setLogArray([...logArray,{log:'Step 3/5: Grabbing recording from '+(i+1)+'/'+calls.length+' calls'}]);
      let recordingDate = new Date(call.started_at * 1000);
      (call.recording != null) ? recordings.push({id:call.id,started: recordingDate.toISOString().split('T')[0],recordingUrl:call.recording}) : null;
    });
    setLogArray([...logArray,{log:'Step 3/5: Found '+recordings.length+' recordings'}]);
    if(recordings.length < 1) setLogArray([...logArray,{log:'Step 5/5: No recordings found'}]);
    else {
      setLogArray([...logArray,{log:'Step 4/5: Downloading recordings'}]);
      const recordingBlobs = await downloadByGroup(recordings, 20);
      exportZip(recordingBlobs,recordings);
    }
  };
  const auth = 'Basic '+ JSON.parse(window.localStorage.getItem('apiAuth'));
  async function apiCall(url) {
    const res = await fetch('https://api.aircall.io/v1/calls/'+url,{
      method: 'GET',
      headers: { Authorization: auth}
    });
    if(res.status != 200) logArray.push({log:'Step 2/5: Call ID not found'});
    else {
      const data = await res.json();
      return data;
    };
  }
  // handle time frame
  const firstDate = ((new Date().toISOString().split('T')[0]).substring(0,8)+'01');
  const [queryFrom,setQueryFrom] = useState(firstDate);
  const [queryTo,setQueryTo] = useState(new Date().toISOString().split('T')[0]);
  const [callIdInput,setCallIdInput] = useState('');
  const limit = (parseInt(firstDate.substring(5,7)) < 6) ? parseInt(firstDate.substring(0,4) - 1) +'-'+ (((12 + (parseInt(firstDate.substring(5,7)) - 5)) < 10) ? '0'+(12 + (parseInt(firstDate.substring(5,7)) - 5)) : (12 + (parseInt(firstDate.substring(5,7)) - 5))) + '-01' : firstDate.substring(0,5)+'0'+ (parseInt(firstDate.substring(5,7)) - 5) + '-01';
  const showUpload = (new Date(queryFrom).getTime() < new Date(limit).getTime()) ? true : false;
  // handle script
  const [showResults,setShowResults] = useState(false);
  const [logArray, setLogArray] = useState([]);
  const [data, setData] = useState([]);

  const childToParent = (childData) => {
    setData(childData);
    console.log(childData);
  };

  async function getRecordings() {
    setShowResults(true);
    const res = await fetch('https://api.aircall.io/v1/ping',{
      method: 'GET',
      headers: {
        Authorization: auth
      }
    });
    if(res.status != 200) logArray.push({log:'Step 1/5: Error not authenticated'});
    else {
      setLogArray([{log: 'Step 1/5: Authenticated'}]);
      let calls = [];
      // grab data from Looker file
      if(showUpload === true) {
        data.forEach(async (call) => {
          const callData = await apiCall(call['Call ID']);
          calls.push(callData['call']);
        })
        downloadAndZip(calls);
      } else if(callIdInput != '') {
        const callData = await apiCall(callIdInput)
        calls.push(callData['call']);
        downloadAndZip(calls);
      } else {
        const unixFrom = new Date(queryFrom).getTime();
        const unixTo = new Date(queryTo).getTime();
        let nextPageUrl = '';
        let page = 1;
        while (nextPageUrl !== null) {
          const callData = await apiCall('search?per_page=50&page='+page+'&from='+unixFrom+'&to='+unixTo);
          setLogArray([...logArray,{log:'Step 2/5: Retrieving '+(((page * 50)> callData.meta.total) ? callData.meta.total : (page * 50))+'/'+callData.meta.total+' calls'}]);
          nextPageUrl = callData.meta.next_page_link;
          calls = calls.concat(callData.calls);
          page += 1;
        };
        downloadAndZip(calls);
      };
    };
  };
  return (
    <>
      <div className='main'>
        <Header className='header'/>
        <Logo className='logo'/>
        <Navigation className='navigation'/>
        <div className='console'>
        <div className='consoleHeader'>
            <h1>Get Recordings</h1>
          </div>
          <div className='split'>
            <div className='consoleInstructions'>
              <p>To download recordings please:</p>
              <p>Select a time range <code>from</code> and <code>to</code></p>
              <p>If the from is older than {limit} then a file is needed with:</p>
              <p>- Call IDs (not UUID)</p>
              <p>- in JSON file format</p>
              <p>- This can be retrieved only by Aircall employees</p>
              <p>- This can be retrieved from <a href='https://data.looker.aircall.io/looks/155?toggle=fil&qid=waxUnfuWxCqUuTTeY0uYTE' target='_blank'>Looker</a></p>
              <p>- Upload the file</p>
              <p>Press the button <code>Get Recordings</code></p>
              <p>Wait till the taskbar is completed</p>
              <p>You will be prompted with a downloaded zip file</p>
            </div>
            <div className='upload'>
              <div className='dateOptions'>
                <div className='nextEach datePeriod'>
                  <div className='nextEach'>
                    <label htmlFor='recordingsFrom'><p className='verCenter'>Date From (including)</p></label>
                    <input type='date' defaultValue={queryFrom} id='recordingsFrom' min='2020-05-01' max={queryTo} onChange={(event) => setQueryFrom(event.target.value)} required/>
                  </div>
                  <div className='nextEach'>
                    <label htmlFor='recordingsTo'><p className='verCenter'>Date To (including)</p></label>
                    <input type='date' defaultValue={queryTo} id='recordingsTo' min={queryFrom} max={queryTo} onChange={(event) => setQueryTo(event.target.value)} required/>
                  </div>
                </div>
                <div className='nextEach callId'>
                  <div className='nextEach'>
                    <label htmlFor='callId'><p className='verCenter'>Call ID</p></label>
                    <input type='text' id='callId' value={callIdInput} onInput={e => setCallIdInput(e.target.value)}/>
                  </div>
                </div>
              </div>
              {showUpload && <FileUpload fileTypes={'.json'} childToParent={childToParent}/>}
              <button type='submit' onClick={() => getRecordings()}>Get Recordings</button>
            </div>
          </div>
          {showResults &&
          <div className='consoleResults'>
            <table>
              <thead>
                <tr><td><h2>Results</h2></td></tr>
              </thead>
              <tbody>
                {
                  logArray.map((item, i) => (
                    <tr key={i}><td>{item.log}</td></tr>
                  ))
                }
              </tbody>
            </table>            
          </div>}
        </div>
      </div>
    </>
  );
}
