import React from 'react';
import students from '../models/Students';

function StudentList() {
    return (
        <table>
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