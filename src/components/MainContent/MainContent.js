import { Card } from 'antd';
import './MainContent.css';
import CardTotalSales from '../CardTotalSales/CardTotalSales';
import Transaction from '../Transaction/Transaction';
const MainContent = () => {
   const data = [
      {
         id: 0,
         icon: 'https://img.icons8.com/?size=512&id=SpeS2RFo1CuR&format=png',
         name: 'Monthly Revenue',
         value: 3.5,
         diff: '+2.4%',
         previousYearOrMonth: 'month',
         previous: '$1.7k',
      },
      {
         id: 1,
         icon: 'https://img.icons8.com/?size=512&id=SpeS2RFo1CuR&format=png',
         name: 'Monthly Revenue',
         value: 3.5,
         diff: '+2.4%',
         previousYearOrMonth: 'month',
         previous: '$1.7k',
      },
      {
         id: 2,
         icon: 'https://img.icons8.com/?size=512&id=SpeS2RFo1CuR&format=png',
         name: 'Monthly Revenue',
         value: 3.5,
         diff: '+2.4%',
         previousYearOrMonth: 'month',
         previous: '$1.7k',
      },
   ];
   return (
      <div className='main-body'>
         <Card className='card-1' bordered={false}>
            {data.map((item) => (
               <div className='card1-content'>
                  <img width={50} height={50} src={item.icon} />
                  <div className='card1-content-text'>
                     <p style={{ fontWeight: '300' }}>{item.name}</p>
                     <div
                        style={{
                           marginLeft: 0,
                           fontSize: '20px',
                           padding: '4px 0 4px 0',
                        }}
                     >
                        <b>${item.value.toFixed(3)}</b>{' '}
                        <span className='previous-differnce'>{item.diff}</span>
                     </div>
                     <p>
                        Previous {item.previousYearOrMonth}{' '}
                        <b>{item.previous}</b>
                     </p>
                  </div>
               </div>
            ))}
         </Card>
         <CardTotalSales />
         <Transaction />
      </div>
   );
};

export default MainContent;
