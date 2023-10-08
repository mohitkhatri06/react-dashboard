import React from 'react';
import { Menu } from 'antd';
import './TopicMenu.css';
import { BiHomeAlt2, BiBarChartAlt2 } from 'react-icons/bi';
import { MdOutlineExplore } from 'react-icons/md';
import { TbShoppingBag } from 'react-icons/tb';
import { AiOutlineMessage } from 'react-icons/ai';

const TopicMenu = ({ topics, selectedKey, changeSelectedKey }) => {
   const styledTopics = [];
   topics.forEach((topic, index) =>
      styledTopics.push(
         <Menu.Item key={index} onClick={changeSelectedKey}>
            {topic.name}
         </Menu.Item>
      )
   );

   return (
      <Menu mode='inline' selectedKeys={[selectedKey]}>
         {styledTopics}
      </Menu>
   );
};
export default TopicMenu;
