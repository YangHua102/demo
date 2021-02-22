import React,{Component} from 'react'
import { List, Avatar } from 'antd';

import './index.less'
import {chatlist} from '../../demoData/chat'

const ChatTargeList=({list})=>
    {
        console.log(list);
    return(<List 
    itemLayout="horizontal"
     className="chat-target-list"
     >
     {
         list.map((cl)=>{
            return (<List.Item key={cl.chatroom}>
                <List.Item.Meta
                avatar={(<Avatar
      style={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      {cl.target}
    </Avatar>)} />

            </List.Item>)
         })
     }

    </List>) }
       
    ;
class ChatBoxNav extends Component{

  
   render(){
       return (<ChatTargeList className="chat-nav" list={chatlist}/>)
   }
        }

export default ChatBoxNav;