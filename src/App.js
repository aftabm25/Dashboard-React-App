import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Layout/navbar'
import Dashboard from './Components/Dashboard/dashboard'
import ProjectDetails from './Components/Projects/projectdetails'
import SignIn from './Components/Auth/signin'
import SignUp from './Components/Auth/signup'
import CreateProject from './Components/Projects/createproject'

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar/>
       <Switch>
         <Route exact path='/' component={Dashboard} />
         <Route path='/project/:id' component={ProjectDetails}/>
         <Route path='/signin' component={SignIn}/>
         <Route path='/signup' component={SignUp}/>
         <Route path='/createproject' component={CreateProject}/>
       </Switch>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
