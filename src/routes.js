import React from 'react';
import {Switch, Route} from 'react-router-dom'
//import components that we want user to be able to route to
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

export default (
   <Switch>
      {/* When the URL is exactly/contains http://localhost:xxxx/pathHere 
      it will load that component
      You MUST import Link in every single component that you plan having clickable links into.
      For example, at localhost:xxxx, since the path matches EXACTLY for Home
      the Home component will be loaded; therefore, the Home is what you see first 
      The About component will be loaded if the address is localhost:xxxx/about but since 
      it no longer exactly matches '/' the Home component will be unmounted and no longer visible*/}
      <Route component={Home} exact path='/' />
      <Route component={About} path='/about' />
      <Route component={ClassList} path='/classlist/:class' />
      <Route component={Student} path='/student/:id' />
   </Switch>
)