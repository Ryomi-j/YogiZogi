import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);
import { Line } from 'react-chartjs-2';
import { IComparisonItem } from './types';

/**
 * @param data : IComparisonItem[]
*/
export const PriceComparisonChart = ({ data }: { data: IComparisonItem[] }) => {
  // mock data 사용시, 가격 추이를 가시적으로 나타내기 위해 추가한 코드
  const priceGap = [0, 150000, 50000]

  const datas = {
    labels: ['Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: '3개월 가격추이',

        // mock data 사용시, 가격 추이를 가시적으로 나타내기 위해 추가한 코드
        data: data.map((el, idx) => (el === undefined ? 0 : el.price - priceGap[idx])),

        // data: data.map((el, idx) => (el === undefined ? 0 : el.price)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <>
      {data ? (
        <Line data={datas} options={options} />
      ) : (
        <div className="w-full h-20 flex items-center justify-center border rounded-xl">
          no Data
        </div>
      )}
    </>
  );
};
