import React from 'react';
import { Divider, Layout } from 'antd';
import './SideBar.css';
import logo from './../../assets/logo.png';

const SideBar = ({ menu }) => {
   return (
      <Layout.Sider
         className='sidebar'
         breakpoint={'lg'}
         theme='light'
         collapsedWidth={0}
         trigger={null}
      >
         <a href='/'>
            <img src={logo} className='logo' alt='logo' />
         </a>
         {menu}
      </Layout.Sider>
   );
};

export default SideBar;
