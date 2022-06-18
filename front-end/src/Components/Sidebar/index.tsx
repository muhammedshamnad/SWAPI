import React from 'react';
import { Layout, Menu } from 'antd';
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
        <Menu.Item onClick={gotoHome}>Home</Menu.Item>
        <Menu.Item onClick={gotoSaved}>Saved</Menu.Item>
    </Menu>
    </Layout.Sider>
  );
}

export default Sidebar;
