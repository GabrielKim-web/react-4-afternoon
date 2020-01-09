import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super();
    
    this.state = {
      students: [],
    }
  }

  componentDidMount() {
    /* Since we are fetching data, let's make a GET request to the API url: http://localhost:3005/students?class= where class equals the current class page. 
    react-router-dom automatically passes down a couple handy props into the routeable components. One of them is called match. 
    It is an object with a bunch of useful information. One of the properties on match is called params. 
    This is where we can see the value of any route parameters. Our route parameter is called class. 
    Therefore, we can access it by using this.props.match.params.class. 
    Take a look at routes.js one more time and you'll see it. */
    Axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
      this.setState({students: res.data});
    })
  }

  render() {
    const{students} = this.state;
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students.map((element, index) => {
          return(
            <div key={index}>
              {/* each student is now a clickable link that takes you to their respective id */}
              <Link to={`/student/${element.id}`}><h3>{element.first_name} {element.last_name}</h3></Link>
            </div>
          )
        })}
        {/* Black Diamond: uhhh lol */}
        <Link to='/'>Back to class selection</Link>
      </div>
    )
  }
}