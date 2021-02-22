import React, {Component} from 'react'
import { Layout } from 'antd';

import {BrowserRouter,Redirect, Route, Switch} from 'react-router-dom'
import LeftNav from '../../../components/left-nav'
import Header from '../../../components/header'
import RightNav from "../../../components/right-nav";

import HomePage from '../HomePage/index'
import UserProfile from '../UserProfilePage'
import ChatBox from '../ChatPage'

const {Footer, Sider, Content } = Layout;

export default class Dashboard extends Component{
    render(){
        //if no user found return to login page

        return(
          <BrowserRouter>
            <Layout style={{height:"100%"}}>
      <Sider>
        <LeftNav/>
      </Sider>
      <Layout>
        <Header/>
        <Content style={{margin:'24px 16px' ,backgroundColor:'#fff'}}>
          <Switch>
          <Route exact path="/home" component={HomePage}/>
          <Route path="/profile" component={UserProfile}/>
          <Route path="/chat" component={ChatBox}/>
          <Redirect to='/home'/>
          </Switch>
        </Content>
        <Footer style={{textAlign:"center",color:"#cccccc"}}>Demo @Yang Hua</Footer>
      </Layout>
      <Sider>
        <RightNav/>
      </Sider>
    </Layout>
    </BrowserRouter>
        )
        
    }
}