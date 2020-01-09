import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Student extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount() {
    // remember that id is passed down via a <Link to=''>, so how do you access that?
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(res => {
      this.setState({studentInfo: res.data});
    })
  }

  render() {
    const {first_name, last_name, grade, email} = this.state.studentInfo
    console.log(this.state);
    return (
      <div className="box">
        <h1>Student {first_name + ' ' + last_name}</h1>
        <h3>Grade: {grade}</h3>
        <h3>Email: {email}</h3>
        <Link to={`/classList/${this.state.studentInfo.class}`}><h4>Go back to classlist</h4></Link>
      </div>
    )
  }
}