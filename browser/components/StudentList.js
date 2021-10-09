import React from "react";

export default function StudentList(props) {
  const { students, selectStudent } = props;
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Tests</th>
        </tr>
        {students.map((student) => {
          return (
            <tr key={student.id}>
              <td>{student.fullName}</td>
              <td onClick={() => selectStudent(student.id)}>Details</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
