import React from 'react';

function StudentItem(props) {
  return (
    <div style={{backgroundColor: '#bbb', margin: '1rem', padding: '1rem'}}>
      <h1>{props.fullName}</h1>
      <h2>Number of beers: ?</h2>
    </div>
  )
}

export default StudentItem;