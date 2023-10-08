import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import TopicMenu from './components/TopicMenu';

import './App.css';

import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Home from './components/Home/Home';
import { Content } from 'antd/es/layout/layout';

function App() {
   //  const topics = ['Home', 'Analytic', 'Explore', 'Shop', 'Inbox'];

   const { Header, Footer, Sider, Content } = Layout;

   const topics = [
      {
         id: 0,
         name: 'Home',
         icon: 'BiHomeAlt2',
      },
      {
         id: 1,
         name: 'Analytic',
         icon: 'BiBarChartAlt2',
      },
      {
         id: 2,
         name: 'Explore',
         icon: 'MdOutlineExplore',
      },
      {
         id: 3,
         name: 'Shop',
         icon: 'TbShoppingBag',
      },
      {
         id: 4,
         name: 'Inbox',
         icon: 'AiOutlineMessage',
      },
   ];
   const [contentIndex, setContentIndex] = useState(0);
   const [selectedKey, setSelectedKey] = useState('0');
   const changeSelectedKey = (event) => {
      const key = event.key;
      setSelectedKey(key);
      setContentIndex(+key);
   };

   const [isMobile, setIsMobile] = useState(false);

   //choose the screen size
   const handleResize = () => {
      if (window.innerWidth < 992) {
         setIsMobile(true);
      } else {
         setIsMobile(false);
      }
   };

   // create an event listener
   useEffect(() => {
      window.addEventListener('resize', handleResize);
   });
   const Menu = (
      <TopicMenu
         topics={topics}
         selectedKey={selectedKey}
         changeSelectedKey={changeSelectedKey}
      />
   );
   return (
      <div className='App'>
         {isMobile && <NavBar menu={Menu} />}
         <Layout>
            <SideBar menu={Menu} />
            <Content>
               <Home />
            </Content>
         </Layout>
      </div>
   );
}

export default App;
