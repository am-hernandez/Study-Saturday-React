import React, { Component } from "react";
import axios from "axios";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }
  async componentDidMount() {
    try {
      const response = await axios.get("/student");
      const students = response.data;
      this.setState({ students: students });
    } catch (err) {
      console.error("Failed to retrieve students", err);
    }
  }
  // need a way to fetch students from routes using axios
  // take student data and add to state (setState)

  // actual code that will render that info

  render() {
    return (
      <div>
        <ul>
          {this.state.students.map((student) => {
            return <li key={student.id}>{student.fullName}</li>;
          })}
        </ul>
      </div>
    );
  }
}
