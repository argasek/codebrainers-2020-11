import React from 'react';

function StudentInput (props) {
  return (
    <input
      value={props.fullName}
      type="text"
      style={{
        marginLeft: '1rem',
        padding: props.padding,
        border: '2px solid #00F',
        borderRadius: '4px',
        fontSize: '150%'
      }}
      onChange={props.onFullNameChange}
    />
  );
}

export default StudentInput;