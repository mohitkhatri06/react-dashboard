import './Transaction.css';
import { Space } from 'antd';
import { Button, Row, Col, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import AvatarGroups from '../AvatarGroups/AvatarGroups';
import Table from 'ant-responsive-table';
import TableUser from './TableUser/TableUser';

//const { Column } = Table;

const Transaction = () => {
   // const onChange = (date, dateString) => {
   //    console.log(date, dateString);
   // };

   const dataSource = [
      {
         key: '1',
         status: 'Success',
         date: 'Nov 02,2021',
         invoice: '$100,00',
         cutomer: (
            <TableUser
               cname={'Floyd Johntosan'}
               email={'johntosan@gmail.com'}
            />
         ),
         people: <AvatarGroups maxCounting={2} />,
      },
      {
         key: '2',
         status: 'Success',
         date: 'Nov 02,2021',
         invoice: '$100,00',
         cutomer: (
            <TableUser
               cname={'Floyd Johntosan'}
               email={'johntosan@gmail.com'}
            />
         ),
         people: <AvatarGroups maxCounting={2} />,
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
   return (
      <>
         <div className='transaction-main'>
            <div>
               <h3>Transaction History</h3>
               <Dropdown menu={{ months }}>
                  <a
                     onClick={(e) => e.preventDefault()}
                     href='http://localhost:3000/'
                  >
                     <Space>{months.month}</Space>
                  </a>
               </Dropdown>
            </div>
            <div className='d-flex justify-content-between'>
               {/* <input type='date' /> */}
               {/* <button type='button' className='calendar-button'>
                  Month
               </button> */}
               {/* <DatePicker onChange={onChange} picker='month' /> */}
               {/* <Button
                  type='primary'
                  shape='rectangle'
                  icon={<CalendarOutlined />}
               /> */}
            </div>
            <Row>
               <Col>
                  <Dropdown>
                     <Button>
                        <Space>
                           Recepient
                           <DownOutlined />
                        </Space>
                     </Button>
                  </Dropdown>
                  <Dropdown>
                     <Button>
                        <Space>
                           Amount
                           <DownOutlined />
                        </Space>
                     </Button>
                  </Dropdown>
                  <Dropdown>
                     <Button>
                        <Space>
                           Status
                           <DownOutlined />
                        </Space>
                     </Button>
                  </Dropdown>
               </Col>
            </Row>
            {/* TABLE START */}
            <div>
               {/* <Table dataSource={userData} pagination={false}>
                  <Column title='Customer' dataIndex='Name' key='Name' />
                  <Column title='Status' dataIndex='status' key='status' />
                  <Column title='Date' dataIndex='date' key='date' />
                  <Column title='Invoice' dataIndex='invoice' key='invoice' />
                  <Column title='People' dataIndex='people' key='people' />
               </Table> */}
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
