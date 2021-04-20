import React,{Component} from 'react'
 import {Avatar } from 'antd'; 
import {CheckCircleTwoTone,CloseCircleTwoTone  } from '@ant-design/icons';

import './index.less'
import {chatlist} from '../../demoData/chat'
import {getNameShort} from '../../utils/getNameShort'

    const ChatList=({list})=>{
      return (
        <div className="chat-list">
          <div className="chat-room-list">
          <ul className="list-content">
            {list.map((l)=>{
              return(
              <li className="chat-list-member" key={l.chatroom}>
              <div className="chat-avatar"><Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', size:'small' }}>{getNameShort(l.target)}</Avatar></div>
                <div className="chat-targe-name">
                  <a>{l.target}</a>
                </div>
                <div className="chat-target-status">
                  <div className="chat-online-status">
                  {(l.status === 'online') ? (<p><CheckCircleTwoTone twoToneColor="#52c41a" /> online</p>) :(<p><CloseCircleTwoTone  twoToneColor="#eb2f96" /> offline</p>)}</div>
                </div>
              </li>
            )})}
            </ul>
          </div>
        </div>
      )
    }
class ChatBoxNav extends Component{

  
   render(){
       return (<ChatList className="chat-nav" list={chatlist}/>)
   }
        }

export default ChatBoxNav;