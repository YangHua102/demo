import React,{ Component } from "react";
import './index.less'
import {withRouter} from 'react-router-dom'
import {timeFormat} from '../../utils/timeFormat'
import menuList from '../../config/basicMenu'
import {Modal} from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {LinkButton} from "../link-button";
class Header extends Component{
    state={
        currentTime:timeFormat(Date.now()),
    }
    getTime=()=>{
        setInterval(()=>{
            const currentTime=timeFormat(Date.now())
            this.setState({currentTime})
        },60000)
    }

    getTitle=()=>{
        const path=this.props.location.pathname
        let title
        menuList.forEach(item=>{
            if(item.key === path){
                title=item.title
            }else if(item.children){
                const cItem=item.children.find(cItem => cItem.key === path)
                if(cItem){
                    title = cItem.title
                }
            }
        })
        return title
    }

    logout=()=>{
        Modal.confirm({
            title: 'Log Out',
            icon: <ExclamationCircleOutlined />,
            content: 'Do you want log out now?',
            onOk:()=> {
              console.log('OK');
              //delete this user's date

              //return to login page
              console.log(this.props);
              this.props.history.replace({pathname:'/login'})
              console.log(this.props);
            }
          })
    }
    componentDidMount(){
        this.getTime();
    }
    render(){
        const {currentTime}=this.state;
        const title=this.getTitle();
        return (
            <div className="header"> 
            <div className="header-top">
                <span>welcome, user</span>
                <LinkButton onClick={this.logout}>log out</LinkButton>
            </div>
            <div className="header-bottom">
                <div className="header-bottom-left">{title}</div>
                <div className="header-bottom-right">
                    <span>{currentTime}</span>
                </div>

            </div>
             </div>
        )
    }
}

export default withRouter(Header)