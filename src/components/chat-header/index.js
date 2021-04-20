import React,{Component} from 'react'
import {Avatar } from 'antd'; 


import './index.less'
import {chatlist} from '../../demoData/chat'
import {getNameShort} from '../../utils/getNameShort'

const current_chatroom=chatlist[0];
/*
* change content though Redux=>currentChatRoom
*/ 
class ChatHeader extends Component{
    
    render(){
        return(
        <div className="chat-header">
               <p> <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf'}}>{getNameShort(current_chatroom.target)}</Avatar>
               &nbsp; talking to: {current_chatroom.target}</p>
        </div>
        )

    }
}

export default ChatHeader;