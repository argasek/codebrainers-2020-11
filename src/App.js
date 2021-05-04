import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import { codebrainersStudents, otherStudents } from './models/Students';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      codebrainersStudents: codebrainersStudents,
      otherStudents: otherStudents
    };
  }

  clearStudents = (event) => {
    this.setState({
      [event.target.name]: []
    })
  }

  sortStudentsByBeers = (event) => {
    const sortedStudents = this.state[event.target.name].sort((firstStudent, secondStudent) => firstStudent.beers - secondStudent.beers);
    this.setState({ [event.target.name]: sortedStudents })
  }

  render () {

    return (
      <div style={{ backgroundColor: '#ddd', padding: '4rem' }}>

        <StudentList students={this.state.codebrainersStudents} />
        <button name='codebrainersStudents' onClick={this.clearStudents}>Clear student list</button>
        <button name='codebrainersStudents' onClick={this.sortStudentsByBeers}>Sort by beers</button>

        <StudentList students={this.state.otherStudents} />
        <button name='otherStudents' onClick={this.clearStudents}>Clear student list</button>

      </div>
    );
  }
}

export default App;
