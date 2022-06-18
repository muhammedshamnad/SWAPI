import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';


function Sidebar() {

    const navigate = useNavigate()
    const gotoHome = () => {
        navigate('/')
    }

    const gotoSaved = () => {
        navigate('/saved')
    }
  return (
    <Layout.Sider>
     <Menu style={{ minHeight: '140vh' }}>
        <Menu.Item onClick={gotoHome}><Typography.Text strong>Home</Typography.Text></Menu.Item>
        <Menu.Item onClick={gotoSaved}><Typography.Text strong >Saved</Typography.Text></Menu.Item>
    </Menu>
    </Layout.Sider>
  );
}

export default Sidebar;
