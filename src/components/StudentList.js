import React from 'react';
import students from '../models/Students';
import "./StudentList.css";

function StudentList() {
    return (
        <table className="student-list" cellSpacing="0" cellPadding="0">
            <tbody>
            {
                students.map((student,index) => (
                    <tr key={index}>
                        <td>{student.name}: {student.numberOfBoozeUnits}</td>
                    </tr>
                ))
            }

            </tbody>
        </table>
    );
}

export default StudentList;