import { Avatar } from 'antd';
import './TableUser.css';
const TableUser = (props) => {
   return (
      <div className='table-user'>
         <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=2' />
         <h5>{props.cname}</h5>
         <p>{props.email}</p>
      </div>
   );
};

export default TableUser;
