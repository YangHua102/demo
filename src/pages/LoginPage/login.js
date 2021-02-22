import React, {Component} from 'react'
import './login.less'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default class LoginPage extends Component{
   

      onFinish = (values) => {
        console.log('Success:', values);
      };
    
      onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

     
      validatePwd=(_,value)=>{
          if(!value ){
              return Promise.reject("password can not be empty.")
          }
          if (value.length()<4) {
              return Promise.reject("password length at least 4 bit.")
          }
      }
     render(){
         return(
             <div className="login">
                 <header className="login-header">
                     <h1>Demo</h1>
                 </header>
                 <section className="login-board">
                     <h2>Login</h2>
                     <Form
      name="normal_login"
      className="login-form"
      onFinish={this.onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true, whitespace:true,
            message: 'Please input your Username!',
          },
          {
              min: 4, message:'input at least 4 character'
          }
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
            {
            required: true, 
            message: 'Please input your Password!',
          },
          {
              validator:async (_, value) => {
                if(value.length<4){
                    throw new Error('password must be more than 4 bit');
                }
}
          },
          
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
         
        />
      </Form.Item>
     

      <Form.Item>
        <Button type="primary" htmlType="submit" id="login-Button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
                 </section>
             </div>
         )
     }

}
