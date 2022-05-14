import React, {useState} from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import FileUpload from '../components/FileUpload';

export default function CleanNumbers() {
  const [isCSVFile, setIsCSVFile] = useState('Please provide a .csv or .txt file');
  const [csvArray, setCsvArray] = useState([]);

  const processCSV = (str, delim = ',') => {
    const headers = str.slice(0, str.indexOf('\n')).split(delim);
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');

    const newArray = rows.map(row => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {})
      return eachObject;
    })
    setCsvArray(newArray);
  };

  const changeHandler = () => {
    if (isCSVFile === 'Clean the file') {

    } else {
      const reader = new FileReader();
      reader.onload = function (e) {
        processCSV(e.target.result);
      };
      reader.readAsText(selectedFile);
      setIsCSVFile('Clean the file');
    }
  };

  return (
    <>
      <div className='main'>
        <Header className='header'/>
        <Logo className='logo'/>
        <Navigation className='navigation'/>
        <div className='console'>
          <div className='consoleHeader'>
            <h1>Clean Numbers</h1>
          </div>
          <div className='split'>
            <div className='consoleInstructions'>
              <p>To clean numbers please:</p>
              <p>Create a <code>.csv</code> or <code>.txt</code> file</p>
              <p>The file needs to contain the column headers</p>
              <p>- id</p>
              <p>- phone</p>
              <p>- Optional: mobile_phone</p>
              <p>- Optional: other_phone</p>
              <p>Upload the file</p>
              <p>Press the button <code>clean</code></p>
              <p>Wait till the taskbar is completed</p>
              <p>You will be prompted with a downloaded file</p>
            </div>
            <div className='upload'>
              <FileUpload fileTypes={'.csv,.txt'}/>
              <div>
                <button className='uploadButton' onClick={(e) => {
                  e.preventDefault();
                  if (selectedFile) changeHandler();
                }}>{isCSVFile}</button>
              </div>
              {csvArray.length > 0 ?
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        csvArray.map((item, i) => (
                          <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </> : 
              null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
