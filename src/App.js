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

  onChangeFullName = (event) => {
    console.log(event.target.name);

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render () {

    return (
      <div style={{ backgroundColor: '#ddd', padding: '4rem' }}>
        <StudentItem fullName={this.state.exampleStudent}/>
        <StudentItem fullName={this.state.secondStudent}/>
        <StudentItem fullName={this.state.exampleStudent + ' ' + this.state.secondStudent}/>

        <form>
          <StudentInput
            inputName='exampleStudent'
            fullName={this.state.exampleStudent}
            onFullNameChange={this.onChangeFullName}
            padding='0.5rem'
            border='2px solid #00F'
          />
          <StudentInput
            inputName='secondStudent'
            fullName={this.state.secondStudent}
            onFullNameChange={this.onChangeFullName}
            padding='0.5rem'
            border='2px solid #F00'
          />
        </form>
      </div>
    );
  }
}

export default App;
