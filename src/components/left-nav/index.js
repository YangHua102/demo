import React,{ Component } from "react";
import './index.less'
import {UserOutlined}  from '@ant-design/icons';
import {Link,withRouter} from 'react-router-dom'

import { Menu } from 'antd';

import menuList from '../../config/basicMenu'

const { SubMenu } = Menu;

class LeftNav extends Component{
    state = {
        collapsed: false,
      };
      getMenuNods=(menuList)=>{
        return menuList.map(item =>{

          //<Menu.Item> or <SubMenu>
          if(!item.children){
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                 <Link to={item.key}/>
                 
                 {item.title}
              </Menu.Item>
             
            )
          }else{
            return (
              <SubMenu key={item.key}
              icon={item.icon}
              title={item.title}>
                {this.getMenuNods(item.children)}
              </SubMenu>
            )
          }
        
        })
      }
    render(){
      const path=this.props.location.pathname
        return(<div className="left-nav">
            <Link to='/dashboard' className="left-nav-header">
            <UserOutlined style={{ fontSize: '16px', color: '#08c',margin:'5px' }}/>
                <h1>Demo Dashboard</h1>
            </Link>
            <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[path]}
          defaultOpenKeys={['/chatroom']}
          inlineCollapsed={this.state.collapsed}
        >

        {this.getMenuNods(menuList)}
       
          
        </Menu>
    
        </div>) 
    }
}

export default withRouter(LeftNav)