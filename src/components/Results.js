import React from 'react';
import '../styles/results.css';
import PropTypes from 'prop-types';

function Results(columns,results) {
  return (
    <>
      <div className='results' style={{display:'grid',gridTemplateColumns:'repeat('+columns.length+',  1fr)'}}>
        <div className='resultsTitle'>
          {columns.map((column) => (
            <div><p>{column.title}</p></div>
          ))}
        </div>
        {results.map((result)=> (
          <div className='resultsRow'>
            {columns.map((column) =>(
              <div><input type={column.type} defaultValue={result[column.field]} /></div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
};

Results.propTypes = {
  columns: PropTypes.array,
  results: PropTypes.array
};
export default Results;