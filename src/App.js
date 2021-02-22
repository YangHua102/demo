
import React from 'react';
import './App.less';
import Login from './pages/LoginPage/';
import Dashboard from './pages/DashboardPage/Dashboard'

import {BrowserRouter,Route,Switch} from 'react-router-dom';
export default class App extends React.Component{

 render(){
   return    (
     <BrowserRouter>
     <Switch>

     <Route path='/login' component={Login}/>
     <Route path='/dashboard' component={Dashboard}/>
     </Switch>
      
     </BrowserRouter>
   )

 }
}
