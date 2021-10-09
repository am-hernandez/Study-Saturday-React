import React from "react";

export default function SingleStudent(props) {
  const { selectedStudent } = props;
  const averageGrade =
    selectedStudent.tests
      .map((test) => {
        return parseInt(test.grade);
      })
      .reduce((a, b) => a + b) / selectedStudent.tests.length;
  return (
    console.log(averageGrade),
    (
      <div>
        <h2>{selectedStudent.fullName}</h2>
        <h2>Average Grade: {averageGrade}%</h2>
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
    )
  );
}
