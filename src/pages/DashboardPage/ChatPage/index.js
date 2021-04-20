import Sider from "antd/lib/layout/Sider";
import React,{ Component } from "react";
import './index.less'
import { Layout } from 'antd';

import ChatBoxNav from '../../../components/chat-leftnav'
import ChatHeader from '../../../components/chat-header'
import ChatContent from "../../../components/chat-content"
import ChatSender from '../../../components/chat-sender'

export default class ChatBox extends Component{
    render(){
        const { Sider, Content,Footer,Header } = Layout;
        return (<div className="chat-box">
   
   <Layout className="chat-box">
      <Sider width={'25%'} className="chat-nav"><ChatBoxNav/></Sider>
      <Layout>
       <Header className="chat-header"><ChatHeader/></Header>
        <Content><ChatContent/></Content>
        <Footer><ChatSender/></Footer>
      </Layout>
    </Layout>
    
        </div>)
    }

}