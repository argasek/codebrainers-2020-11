import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import {otherStudents, students} from './models/Students';


function App () {
  return (
      <div style={{backgroundColor: '#ddd', padding: '1rem'}}>

          <StudentList students={students} />
          <StudentList students={otherStudents}/>
      </div>
  );
}

export default App;
