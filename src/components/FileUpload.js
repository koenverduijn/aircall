import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/fileUpload.css';
import FileLogo from '../assets/csv.svg';

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const FileUpload = ({fileTypes,childToParent}) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  function fileUpload(e) {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    fileReader.onload = (e) => {
      childToParent(e.target.result);
    };
  };

  return (
    <>
      <div className='uploadFile'>
        <div></div>
        <img className='fileIcon' src={FileLogo} />
        <div className='fileDetails'>
          <input
            type='file'
            className='file'
            id='file'
            accept={fileTypes}
            onChange={fileUpload}
            content={'Select some files'}

          />
          <label htmlFor='file' className='fileText'>
          {isFilePicked ? (
            <div className='fileStats'>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{' '}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p>Select or Drop a File</p>
          )}
          </label>
        </div>
      </div>
    </>
  );
};

FileUpload.propTypes = {
  fileTypes: PropTypes.string,
};

export default FileUpload;
