import './Transaction.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { DatePicker, Space } from 'antd';
import { Button, Row, Col, Dropdown } from 'antd';
import { CalendarOutlined, DownOutlined } from '@ant-design/icons';
import { Table } from 'antd';
const { Column } = Table;

const Transaction = () => {
   // const onChange = (date, dateString) => {
   //    console.log(date, dateString);
   // };

   const userData = [
      {
         key: '1',
         Name: 'John',
         status: 'Success',
         date: 'Nov 02,2021',
         invoice: '$100,00',
         people: ['nice', 'developer'],
      },
      {
         key: '2',
         Name: 'John',
         status: 'Success',
         date: 'Nov 02,2021',
         invoice: '$100,00',
         people: ['nice', 'developer'],
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
                  <a onClick={(e) => e.preventDefault()}>
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
               <Table dataSource={userData} pagination={false}>
                  <Column title='Customer' dataIndex='Name' key='Name' />
                  <Column title='Status' dataIndex='status' key='status' />
                  <Column title='Date' dataIndex='date' key='date' />
                  <Column title='Invoice' dataIndex='invoice' key='invoice' />
                  <Column title='People' dataIndex='people' key='people' />
               </Table>
            </div>
         </div>
      </>
   );
};

export default Transaction;
