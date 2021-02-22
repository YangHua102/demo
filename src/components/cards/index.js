import React from 'react'
import {Row,Col} from 'antd'
import {DCard} from './democards'
import pic1 from '../../asset/pics/pic1.jpg'
import pic2 from '../../asset/pics/pic2.jpg'
import pic3 from '../../asset/pics/pic3.jpg'
import pic4 from '../../asset/pics/pic4.jpg'
export default function DemoCard(props){
   
    const imgStyle={maxWidth:'100%', height:'auto'};
        return (
        <div className="custom-grid">
        <DCard {...props}>
            <Row justify="space-between" align="bottom">
            <Col span={12}>
   
    <img src={pic1} alt="picture1" style={imgStyle}/>

    </Col>
    <Col span={12}>
    <img src={pic2} alt="picture2"  style={imgStyle}/>

    </Col>
    
  </Row>
  <Row justify="space-between" align="bottom"> 
  <Col span={12}>
  <img src={pic3} alt="picture3" style={{maxWidth:'100%', height:'auto'}}/>
    </Col>
    <Col span={12}>
    <img src={pic4} alt="picture4" style={{maxWidth:'100%', height:'auto'}}/>
    </Col>
    
  </Row>
  </DCard>
  </div>  )
    
}