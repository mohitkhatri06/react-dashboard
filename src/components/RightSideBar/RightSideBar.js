import { Button, Divider, Calendar } from 'antd';
import './RightSideBar.css';
import { GrFormDown } from 'react-icons/gr';
import { BsArrowRight } from 'react-icons/bs';
import React from 'react';
import { LiaVideoSolid } from 'react-icons/lia';
import { MdOutlineWatchLater } from 'react-icons/md';
import AvatarGroups from '../AvatarGroups/AvatarGroups';

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
      <div className='main-right-side'>
         <a
            href='http://localhost:3000/'
            style={{ textDecoration: 'none', color: '#6e63e5' }}
         >
            Premium Access
         </a>
         <h1>
            Take Back <br />
            Your Creative
            <br /> Control <AvatarGroups maxCounting={3} />
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
                        <img width={30} src={item.icon} alt='icon' />
                     </div>
                     <div className='meeting-details'>
                        <h4>{item.title}</h4>
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
                  {/* <Divider /> */}
               </div>
            ))}
         </div>
      </div>
   );
};
export default RightSideBar;
