import React from 'react';
import "./StudentList.css";

class StudentList extends React.Component {

  render() {
    return (
      <table className="student-list" cellSpacing="0" cellPadding="0">
        <thead>
        <tr>
          <th>Full Name</th>
          <th>Number of beers</th>
        </tr>
        </thead>
        <tbody>

        {
          this.props.students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.numberOfBoozeUnits}</td>
            </tr>
          ))
        }

        </tbody>
      </table>
    );
  }

}


function StudentListFn(props) {
    return (
        <table className="student-list" cellSpacing="0" cellPadding="0">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Number of beers</th>
                </tr>
            </thead>
            <tbody>

            {
                props.students.map((student, index) => (
                    <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.numberOfBoozeUnits}</td>
                    </tr>
                ))
            }

            </tbody>
        </table>
    );
}

export default StudentList;