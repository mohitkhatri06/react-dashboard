import { Avatar, Badge, Col, Row } from 'antd';
import './Home.css';
import { Dropdown, Space } from 'antd';

import { BiSearch } from 'react-icons/bi';
import { GoBell } from 'react-icons/go';
import { GrFormDown } from 'react-icons/gr';

const Home = () => {
   const items = [
      {
         key: '1',
         label: (
            <a
               target='_blank'
               rel='noopener noreferrer'
               href='http://localhost:3000/'
            >
               Profile
            </a>
         ),
      },
      {
         key: '2',
         label: (
            <a
               target='_blank'
               rel='noopener noreferrer'
               href='http://localhost:3000/'
            >
               Settings
            </a>
         ),
         disabled: true,
      },
      {
         key: '3',
         label: (
            <a
               target='_blank'
               rel='noopener noreferrer'
               href='http://localhost:3000/'
            >
               Location
            </a>
         ),
         disabled: true,
      },
      {
         key: '4',
         danger: true,
         label: 'Logout',
      },
   ];

   return (
      <div className='home'>
         <div className='home-top-head'>
            <span>
               <Badge count={3} color={'#6e63e5'}>
                  <div className='avatar-wrapper'>
                     <Avatar
                        className='avatar-icon'
                        shape='circle'
                        size={90}
                        src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
                     />
                  </div>
               </Badge>
            </span>
            <div className='home-head-title'>
               <Col>
                  <Row>
                     <h1>Good Evening Team!</h1>
                  </Row>
                  <Row>
                     <p>
                        Have an in-depth look at the metrics whithin your
                        dashboard.
                     </p>
                  </Row>
               </Col>
            </div>

            <div className='home-head-icons'>
               <div className='home-head-search'>
                  <BiSearch size={20} />
               </div>
               <Badge dot color={'#6e63e5'}>
                  <GoBell
                     style={{
                        fontSize: 20,
                     }}
                  />
               </Badge>
            </div>
            <div className='head-profile'>
               <Dropdown
                  menu={{
                     items,
                  }}
               >
                  <Space>
                     <Avatar
                        className='avatar-icon'
                        shape='circle'
                        size={30}
                        src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
                     />
                     Joantosan
                     <GrFormDown />
                  </Space>
               </Dropdown>
            </div>
         </div>
      </div>
   );
};

export default Home;
