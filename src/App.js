import React from 'react';
import './App.css';
import StudentItem from './components/StudentItem';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exampleStudent: 'Jarosław I wspaniały'
    };
  }

  render () {

    console.log(this.state.exampleStudent);

    function onChange(event) {
      // exampleStudent = event.target.value;
      console.log('Zaszła zmiana!', event.target.value);
    }

    return (
      <div style={{ backgroundColor: '#ddd', padding: '4rem' }}>
        <StudentItem fullName={this.state.exampleStudent} />
        <StudentItem fullName={'Basia'}/>
        <form>
          <input
            value={this.state.exampleStudent}
            type="text"
            style={{ marginLeft: '1rem', padding: '0.5rem', border: '2px solid #00F', borderRadius: '4px', fontSize: '150%' }}
            onChange={onChange}
          />
          <input
            type="text"
            style={{ margin: '1rem', padding: '0.5rem', border: '2px solid #F00', borderRadius: '4px', fontSize: '150%' }}
            onChange={onChange}
          />
        </form>
      </div>
    );
  }
}

export default App;
