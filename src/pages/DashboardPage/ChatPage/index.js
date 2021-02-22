import Sider from "antd/lib/layout/Sider";
import React,{ Component } from "react";
import './index.less'
import { Layout } from 'antd';
import {BrowserRouter,Redirect, Route, Switch} from 'react-router-dom'

import ChatBoxNav from '../../../components/chat-leftnav'


export default class ChatBox extends Component{
    render(){
        const { Sider, Content,Footer,Header } = Layout;
        return (<div className="chat-box">
   
   <Layout className="chat-box">
      <Sider width={'15%'} className="chat-nav"><ChatBoxNav/></Sider>
      <Layout>
       
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    
        </div>)
    }

}