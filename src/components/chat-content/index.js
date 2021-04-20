import React,{Component} from 'react'


import './index.less'
import {chatlist} from '../../demoData/chat'

const current_chatroom=chatlist[0];
const current_user='max';

const ChatList=({contents})=>{
    console.log(contents);
    return(
    contents.map((cont)=>{
        if (cont.sender === current_user) {
            return(
            <div className="chat-owner">
                <p>You said:</p>
                <p className="messages">{cont.message}</p>
            </div>)
        } else {
            return(
                <div className="chat-target">
                    <p>{cont.sender} said:</p>
                    <p className="messages">{cont.message}</p>
                </div>
            )
        }
    })
    )
  
};
/*
* change content though Redux=>currentChatRoom
*/ 
class ChatContent extends Component{
    
    render(){
        return(
            <div className="chat-content">
            <ChatList contents={current_chatroom.content}/></div>
        )

    }
}

export default ChatContent;