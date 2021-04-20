import React,{ Component } from "react";
import './index.less'
import {Row,Col,Divider,Avatar,} from 'antd'
import { UserOutlined,MailOutlined,PhoneOutlined,ManOutlined,WomanOutlined } from '@ant-design/icons';


import {user} from '../../../demoData/user'

const MetaDescriptionItem = ({ title, content }) =>(
 
    <div className="profile-wrapper">

            <p className="profile-p-label">{title}:  {content}</p>

     
    </div>
  );

  const IconWithDescriptionItem =({icon, content})=>(
    <div>
      <p>{icon} {content}</p>
    </div>
  );

  const LanguageDescriptionItem = ({contents}) => {
    console.log(contents);
      return(<div className="multi-contents-wrapper"> 
   {contents.map((c)=>{
      console.log(c);
     return (
      <MetaDescriptionItem title={c.lang} content={c.grade}/>
     )
    })} </div>)
      
    
    
    
  };
export default class UserProfile extends Component{

    render(){
        return(<div className="user-profile">
          <Row>
          <Col span={8}>
          <Avatar size={64} icon={<UserOutlined />} />
          <p>{user.firstname} {user.lastname}</p>
          </Col>
            <Col span={8}>
              <p>{user.firstname}</p>
           
              <p>{user.lastname}</p>
              <IconWithDescriptionItem icon={<MailOutlined/>} content={user.email}/>
              <IconWithDescriptionItem icon={<PhoneOutlined />} content={user.tel}/>
            </Col>
            <Col span={8}>
              <p>{user.birthday}</p>
              <p>{(user.sex === 'male' ? <ManOutlined/> : <WomanOutlined/>)}</p>
              <p>{user.country}</p>
            </Col>
          </Row>
          <Divider />
          <p className="site-description-item-profile-p">Personal</p>
          <Row>
          <Col span={8}>
          <p className="site-description-item-profile-p">Language:</p>
           <LanguageDescriptionItem contents={user.language}/>
           </Col>
           <Col span={16}>
           <p className="site-description-item-profile-p">Others:</p>
           </Col>
          </Row>
          <Row>

         </Row>
          
          
        </div>)
    }
}