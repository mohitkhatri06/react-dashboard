import { Avatar, Tooltip } from 'antd';
import { FaUserAlt } from 'react-icons/fa';

const AvatarGroups = ({ maxCounting }) => {
   return (
      <>
         <Avatar.Group
            maxCount={maxCounting}
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

            <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=5'></Avatar>

            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>

            <Avatar style={{ backgroundColor: '#f56a00' }}>R</Avatar>

            <Avatar style={{ backgroundColor: '#e46a80' }}>P</Avatar>

            <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=3'></Avatar>

            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>

            <Avatar style={{ backgroundColor: '#e46a80' }}>P</Avatar>

            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
         </Avatar.Group>
      </>
   );
};

export default AvatarGroups;
