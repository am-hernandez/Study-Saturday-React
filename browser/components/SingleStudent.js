import React from "react";

export default function SingleStudent(props) {
  const { selectedStudent } = props;
  const averageGrade = Math.round(
    selectedStudent.tests
      .map((test) => {
        return parseInt(test.grade);
      })
      .reduce((a, b) => a + b) / selectedStudent.tests.length
  );
  return (
    <div className="container singleStudent">
      <h3>{selectedStudent.fullName}</h3>
      <h3>Average Grade: {averageGrade}%</h3>
      <table>
        <tbody>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
          {selectedStudent.tests.map((test) => {
            return (
              <tr key={test.id}>
                <td>{test.subject}</td>
                <td>{test.grade}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
