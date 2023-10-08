import { Card } from 'antd';
import './CardTotalSales.css';
import { BarChart } from '../BarChart/BarChart';
import Transaction from '../Transaction/Transaction';

const CardTotalSales = () => {
   return (
      <>
         <Card className='card' bordered={true}>
            <div className='container'>
               <div className='container-data'>
                  <h4>Total Sales & Cost</h4>
                  <span>Last 60 days</span>
                  <span>
                     <h2>$956.82k</h2>
                     <>+5.4%</>
                  </span>
                  <span>
                     <p>+8.20k</p>
                     <p>vs prev. 60 days</p>
                  </span>
               </div>
            </div>
            <div className='container'>
               <div className='container-data'>
                  <BarChart />
               </div>
            </div>
         </Card>
      </>
   );
};
export default CardTotalSales;
