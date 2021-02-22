import React,{ Component } from "react";
import DemoCard from '../../../components/cards'
import { Card, Avatar } from 'antd';
import './index.less';
const { Meta } = Card;
export default class HomePage extends Component{

    render(){
        return <div className="home">
<DemoCard cardcolor={'blue'}>
 <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
    context
    </DemoCard>
        </div>
    }
}