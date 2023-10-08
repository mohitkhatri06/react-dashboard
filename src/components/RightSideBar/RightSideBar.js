import { Avatar, Button, Tooltip, Divider, Calendar } from 'antd';
import './RightSideBar.css';
import { FaUserAlt } from 'react-icons/fa';
import { GrFormDown } from 'react-icons/gr';
import { BsArrowRight } from 'react-icons/bs';
import React from 'react';
import { LiaVideoSolid } from 'react-icons/lia';
import { MdOutlineWatchLater } from 'react-icons/md';

const RightSideBar = () => {
   const wrapperStyle = (React.CSSProperties = {
      width: 300,
      height: 320,
   });

   const data = [
      {
         id: 0,
         title: 'Meeting with Client',
         place: 'Google Meet',
         icon: 'https://img.icons8.com/?size=128&id=fH22K8x6Yvz6&format=png',
         time: '12 pm',
      },
      {
         id: 1,
         title: 'Weekly Report',
         place: 'Google Meet',
         icon: 'https://img.icons8.com/?size=128&id=nK5KokYOqcnT&format=png',
         time: '03 pm',
      },
      {
         id: 2,
         title: 'Daily Scrum Meeting',
         place: 'Google Meet',
         icon: 'https://img.icons8.com/?size=128&id=ChugQlss1ohB&format=png',
         time: '05 pm',
      },
   ];

   return (
      <div>
         <a>Premium Access</a>
         <h1>
            Take Back <br />
            Your Creative
            <br /> Control{' '}
            <Avatar.Group
               maxCount={3}
               maxStyle={{ color: '#fff', backgroundColor: '#000' }}
            >
               <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=2' />
               <Avatar
                  style={{ backgroundColor: '#1677ff' }}
                  icon={<FaUserAlt />}
               />
               <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=7' />
               <Tooltip title='Ant User' placement='top'>
                  <Avatar
                     style={{ backgroundColor: '#87d068' }}
                     icon={<FaUserAlt />}
                  />
               </Tooltip>

               <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>

               <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>

               <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>

               <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>

               <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>

               <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>

               <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>

               <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>

               <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
            </Avatar.Group>
         </h1>

         <div>
            <p>
               The Professional Platform <GrFormDown />
            </p>
         </div>
         <div>
            <Button style={{ color: '#6e63e5', width: '80%' }}>
               <span>Upgrade Now {<BsArrowRight />}</span>
            </Button>
         </div>
         <Divider />
         <div style={wrapperStyle}>
            <Calendar fullscreen={false} />
         </div>

         <div className='meetings'>
            {data.map((item) => (
               <div key={item.id}>
                  <div className='meetings-item'>
                     <div className='icon-background'>
                        <img width={30} src={item.icon} />
                     </div>
                     <div className='meeting-details'>
                        <h6>{item.title}</h6>
                        <span style={{ opacity: '50%' }}>
                           <LiaVideoSolid size={20} className='video-icon' />
                           {item.place}
                           <span className='time-container'>
                              <MdOutlineWatchLater
                                 size={20}
                                 className='time-icon'
                              />
                              {item.time}
                           </span>
                        </span>
                     </div>
                  </div>
                  <Divider />
               </div>
            ))}
         </div>
      </div>
   );
};
export default RightSideBar;
