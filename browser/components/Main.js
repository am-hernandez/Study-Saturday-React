import React, { Component } from "react";
import axios from "axios";
import StudentList from "./StudentList";
import SingleStudent from "./SingleStudent";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
    };
    this.selectStudent = this.selectStudent.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log("fetching students");
    try {
      const { data } = await axios.get("/student");
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  async selectStudent(studentId) {
    try {
      const { data } = await axios.get(`/student/${studentId}`);
      this.setState({ selectedStudent: data });
    } catch (err) {
      console.log(`There was a problem fetching the student!\n ${err}`);
    }
  }

  render() {
    return (
      <div className="container mainContainer">
        <h2>Students</h2>
        <StudentList
          students={this.state.students}
          viewTests={this.viewTests}
          selectStudent={this.selectStudent}
        />
        {this.state.selectedStudent.id ? (
          <SingleStudent
            selectedStudent={this.state.selectedStudent}
            selectStudent={this.selectStudent}
            viewTests={this.viewTests}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
