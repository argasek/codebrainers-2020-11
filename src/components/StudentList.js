import React from 'react';
import students from '../models/Students';

function StudentList () {
  return (
    <div>{ students.map(student => <p>{student.name}: {student.numberOfBoozeUnits}</p>) }</div>
  );
}

export default StudentList;