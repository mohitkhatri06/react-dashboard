import { Avatar } from 'antd';
import './TableUser.css';
function TableUser({ cname, email }) {
   return (
      <div className='table-user'>
         <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=2' />
         <div className='name-email'>
            <h3>{cname}</h3>
            <p>{email}</p>
         </div>
      </div>
   );
}

export default TableUser;
