import { Card } from 'antd';
import './CardTotalSales.css';
import { BarChart } from '../BarChart/BarChart';
import { BiSolidUpArrow } from 'react-icons/bi';

const CardTotalSales = () => {
   return (
      <>
         <Card className='card2' bordered={true}>
            <div className='container'>
               <div className='container-data'>
                  <div>
                     <h3>Total Sales & Cost</h3>
                     <span className='text-opacity'>Last 60 days</span>
                  </div>

                  <div className='differnce-with-val'>
                     <h2
                        style={{
                           color: '#6e63e5',
                           fontWeight: 800,
                           fontSize: '2rem',
                        }}
                     >
                        $956.82k
                     </h2>
                     <span className='differnce-arrow'>
                        <BiSolidUpArrow size={9} /> +5.4%
                     </span>
                  </div>
                  <span>
                     <p>
                        {' '}
                        <span style={{ color: '#45ca6b' }}>+8.20k</span>
                        <span className='text-opacity'> vs prev. 60 days</span>
                     </p>
                  </span>
               </div>
            </div>
            <div className='container-data'>
               <BarChart />
            </div>
         </Card>
      </>
   );
};
export default CardTotalSales;
