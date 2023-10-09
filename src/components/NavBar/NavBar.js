import React from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './NavBar.css';
import logo from './../../assets/logo.png';

const NavBar = ({ menu }) => {
   return (
      <nav className='navbar'>
         <Button className='menu' type='primary' icon={<MenuOutlined />} />
         <Drawer title='Topics' placement='left'>
            {menu}
         </Drawer>
         <a href='/'>
            <img src={logo} className='logo' alt='logo' />
         </a>
      </nav>
   );
};

export default NavBar;
