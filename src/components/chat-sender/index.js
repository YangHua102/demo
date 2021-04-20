import React,{Component} from 'react'


import './index.less'
import {LinkButton} from '../link-button'


class ChatSender extends Component{
    
    render(){
        return(
        <div className="message-sender">
        <textarea className="message-box" placeholder="Type your message" rows="3">

        </textarea>
        <div className="send-button"><LinkButton>SEND</LinkButton></div>

        </div>
        )

    }
}

export default ChatSender;