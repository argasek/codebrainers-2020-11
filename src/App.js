import React from 'react';
import './App.css';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      fullName: ''
    };
  }
  setFullName () {

  };

  render () {

    return (
      <div style={{ backgroundColor: '#ddd', padding: '4rem' }}>
        <input type="text" />
      </div>
    );
  }
}

export default App;
