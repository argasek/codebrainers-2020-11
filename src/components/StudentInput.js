import React from 'react';

function StudentInput (props) {
  let fullName = props.fullName !== '' ? props.fullName : 'Please type a name';

  return (
    <input
      value={fullName}
      name={props.inputName}
      type="text"
      style={{
        marginLeft: '1rem',
        padding: props.padding,
        border: props.border,
        borderRadius: '4px',
        fontSize: '150%'
      }}
      onChange={props.onFullNameChange}
    />
  );
}

export default StudentInput;