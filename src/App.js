import React, { useEffect, useState } from 'react';
import { Col, Layout, Row } from 'antd';
import TopicMenu from './components/TopicMenu';

import './App.css';

import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Home from './components/Home/Home';
import { Content } from 'antd/es/layout/layout';
import MainContent from './components/MainContent/MainContent';
import Transaction from './components/Transaction/Transaction';
import { BiHomeAlt2, BiBarChartAlt2 } from 'react-icons/bi';
import { MdOutlineExplore } from 'react-icons/md';
import { TbShoppingBag } from 'react-icons/tb';
import { AiOutlineMessage } from 'react-icons/ai';
import RightSideBar from './components/RightSideBar/RightSideBar';
function App() {
   //  const topics = ['Home', 'Analytic', 'Explore', 'Shop', 'Inbox'];

   const { Header, Footer, Sider, Content } = Layout;

   const topics = [
      {
         id: 0,
         name: 'Home',
         icon: <BiHomeAlt2 className='icons' />,
      },
      {
         id: 1,
         name: 'Analytic',
         icon: <BiBarChartAlt2 className='icons' />,
      },
      {
         id: 2,
         name: 'Explore',
         icon: <MdOutlineExplore className='icons' />,
      },
      {
         id: 3,
         name: 'Shop',
         icon: <TbShoppingBag className='icons' />,
      },
      {
         id: 4,
         name: 'Inbox',
         icon: <AiOutlineMessage className='icons' />,
      },
   ];
   const [contentIndex, setContentIndex] = useState(0);
   const [selectedKey, setSelectedKey] = useState('0');
   const changeSelectedKey = (event) => {
      const key = event.key;
      setSelectedKey(key);
      setContentIndex(+key);
   };

   const headerStyle = (React.CSSProperties = {
      color: '#000',
      height: 130,
      backgroundColor: '#fff',
      padding: 0,
      lineHeight: '64px',
   });

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
            <Layout>
               <Header style={headerStyle}>
                  <Home />
               </Header>

               <Row style={{ backgroundColor: '#fff' }}>
                  <Col flex={4}>
                     <MainContent />
                     {/* <Transaction /> */}
                  </Col>
                  <Col flex={2}>
                     <RightSideBar />
                  </Col>
               </Row>
            </Layout>
         </Layout>
      </div>
   );
}

export default App;
