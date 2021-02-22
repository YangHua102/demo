import {
    WechatOutlined,
    EditOutlined,
    HomeOutlined,
    
  } from '@ant-design/icons';
const basicMenu=[

    {
        title:'home',
        key:'/home',
        icon:<HomeOutlined />
    },
    {
        title:'User Profile',
        key:'/profile',
        icon:<EditOutlined />
    },
    {
        title:'chat',
        key:'/chatroom',
        icon:<WechatOutlined />,
        children:[
            {
                title:'chat list',
                key:'/chat',
                
            }
        ]
    }
]

export default basicMenu;