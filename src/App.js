import React from 'react';
import './App.css';
import StudentItem from './components/StudentItem';
import StudentInput from './components/StudentInput';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      exampleStudent: 'Jarosław I wspaniały',
      secondStudent: ''
    };
  }

  onChangeExampleStudent = (event) => {
    this.setState({ exampleStudent: event.target.value });
  };

  onChangeSecondStudent = (event) => {
    this.setState({ secondStudent: event.target.value });
  };

  render () {

    return (
      <div style={{ backgroundColor: '#ddd', padding: '4rem' }}>
        <StudentItem fullName={this.state.exampleStudent}/>
        <StudentItem fullName={this.state.secondStudent}/>
        <StudentItem fullName={this.state.exampleStudent + ' ' + this.state.secondStudent}/>

        <form>
          <StudentInput
            fullName={this.state.exampleStudent}
            onFullNameChange={this.onChangeExampleStudent}
            padding='0.5rem'
          />
          <StudentInput
            fullName={this.state.secondStudent}
            onFullNameChange={this.onChangeSecondStudent}
            padding='2.5rem'
          />
        </form>
      </div>
    );
  }
}

export default App;
