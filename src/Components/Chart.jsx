import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';

function Chart({ sparkline, priceChange }) {
  const [chartOptions] = useState({
    series: [{
      data: [...sparkline.price],
    }],
    chart: {
      type: "area",
      height: 150,
      sparkline: { enabled: true },
      animations: { enabled: false },
      tooltip: { enabled: false },
      stroke: { width: 1 },
      colors: [priceChange <= 0 ? '#ff3131' : '#25df3e']
    }
  });

  return (
    <div className="w-full p-2">
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="area" height={40} />
    </div>
  );
}

export default Chart;
