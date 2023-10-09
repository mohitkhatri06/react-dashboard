import './TableStatus.css';

const TableStatus = ({ status }) => {
   return <>{status === 'success' ? <div className='success'></div> : <></>}</>;
};

export default TableStatus;
