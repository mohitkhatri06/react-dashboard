import './Transaction.css';
import { DatePicker, Form, Space } from 'antd';
import { Dropdown } from 'antd';
import AvatarGroups from '../AvatarGroups/AvatarGroups';
import Table from 'ant-responsive-table';
import TableUser from './TableUser/TableUser';
import { GrFormDown } from 'react-icons/gr';
import TableStatus from './TableStatus/TableStatus';

const Transaction = () => {
   const dataSource = [
      {
         key: '1',
         status: <TableStatus status={'success'} />,
         date: 'Nov 02,2021',
         invoice: '$100,00',
         customer: (
            <TableUser
               cname={'Floyd Johntosan'}
               email={'johntosan@gmail.com'}
            />
         ),
         people: <AvatarGroups maxCounting={2} />,
      },
      {
         key: '2',
         status: <TableStatus status={'pending'} />,
         date: 'Nov 02,2021',
         invoice: '$100,00',
         customer: (
            <TableUser
               cname={'Floyd Johntosan'}
               email={'johntosan@gmail.com'}
            />
         ),
         people: <AvatarGroups maxCounting={2} />,
      },
   ];

   const items = [
      {
         key: '1',
         label: 'Item 1',
      },
      {
         key: '2',
         label: 'Item 2',
      },
      {
         key: '3',
         label: 'Item 3',
      },
   ];
   const columns = [
      {
         title: 'Customer',
         dataIndex: 'customer',
         key: 'customer',
         showOnResponse: true,
         showOnDesktop: true,
      },
      {
         title: 'Status',
         dataIndex: 'status',
         key: 'status',
         showOnResponse: true,
         showOnDesktop: true,
      },
      {
         title: 'Date',
         dataIndex: 'date',
         key: 'date',
         showOnResponse: true,
         showOnDesktop: true,
      },
      {
         title: 'Invoice',
         dataIndex: 'invoice',
         key: 'invoice',
         showOnResponse: true,
         showOnDesktop: true,
      },
      {
         title: 'People',
         dataIndex: 'people',
         key: 'people',
         showOnResponse: true,
         showOnDesktop: true,
      },
   ];

   const months = [
      { id: 0, month: 'January' },
      { id: 1, month: 'February' },
      { id: 2, month: 'March' },
      { id: 3, month: 'April' },
      { id: 4, month: 'May' },
      { id: 5, month: 'June' },
      { id: 6, month: 'July' },
      { id: 7, month: 'August' },
      { id: 8, month: 'September' },
      { id: 9, month: 'October' },
      { id: 10, month: 'November' },
      { id: 11, month: 'December' },
   ];

   const config = {
      rules: [{ type: 'object', required: true, message: 'Month' }],
   };

   return (
      <>
         <div className='transaction-main'>
            <div className='transaction-month'>
               <h2>Transaction History</h2>
               <Form.Item name='month-picker' {...config}>
                  <DatePicker picker='month' />
               </Form.Item>
            </div>
            <div className='d-flex justify-content-between'></div>

            <div className='transaction-drops'>
               <div className='select-recipient'>
                  <Dropdown
                     menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                     }}
                  >
                     <Space>
                        Recipient
                        <GrFormDown />
                     </Space>
                  </Dropdown>
               </div>
               <div className='select-amount'>
                  <Dropdown
                     menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                     }}
                  >
                     <Space>
                        Amount
                        <GrFormDown />
                     </Space>
                  </Dropdown>
               </div>
               <div className='select-status'>
                  <Dropdown
                     menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                     }}
                  >
                     <Space>
                        Status
                        <GrFormDown />
                     </Space>
                  </Dropdown>
               </div>
            </div>

            {/* TABLE START */}
            <div className='table-main'>
               <Table
                  antTableProps={{
                     showHeader: true,
                     columns,
                     dataSource,
                     pagination: false,
                  }}
                  mobileBreakPoint={768}
               />
            </div>
         </div>
      </>
   );
};

export default Transaction;
