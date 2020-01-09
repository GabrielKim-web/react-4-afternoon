import React, { Component } from 'react';
// import HashRouter, can be alias
import {HashRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      // we surrond pretty much our entire application in a HashRouter
      <HashRouter>
        <div>
          <nav className='nav'>
            <div>WestSide University</div> 
            <div className='link-wrap'>
                <Link to="/" className='links'>Home</Link>
                <Link to="/about" className='links'>About</Link> 
            </div>
          </nav>
          {routes}
        </div>
      </HashRouter>
    )
  }
}
