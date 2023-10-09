import { Badge } from 'antd';
import './TableStatus.css';

const TableStatus = ({ status }) => {
   return (
      <div className='status-main'>
         {status === 'success' ? (
            <div className='success'>
               <Badge
                  dot
                  color={'#3dc764'}
                  style={{ marginRight: '0.5rem', marginLeft: '0.5rem' }}
               />
               Success
            </div>
         ) : (
            <div className='pending'>
               {' '}
               <Badge
                  dot
                  color={'#f4ae44'}
                  style={{ marginRight: '0.5rem', marginLeft: '0.5rem' }}
               />
               Pending
            </div>
         )}
      </div>
   );
};

export default TableStatus;
