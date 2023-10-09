import React from 'react';
import { Menu } from 'antd';
import './TopicMenu.css';

const TopicMenu = ({ topics, selectedKey, changeSelectedKey }) => {
   const styledTopics = [];

   topics.forEach((topic, index) =>
      styledTopics.push(
         <>
            <Menu.Item key={index} onClick={changeSelectedKey}>
               {/* <Icon icon={topic.icon} /> */}
               {topic.icon}
               {topic.name}
            </Menu.Item>
         </>
      )
   );

   return (
      <Menu mode='inline' selectedKeys={[selectedKey]}>
         {styledTopics}
      </Menu>
   );
};
export default TopicMenu;
