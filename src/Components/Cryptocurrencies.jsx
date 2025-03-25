import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Percentage from './Percentage';
import Chart from './Chart';

function Cryptocurrencies() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const priceUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`;
        const response = await axios.get(priceUrl);
        setCurrencies(response.data);
      } catch (error) {
        console.log("Failed to retrieve data: ", error);
      }
    };
    fetchData();
  }, []);

  function formatToUSD(val) {
    return val.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    }).replace(".00", "");
  }

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Top Cryptocurrency Prices by Market Cap</h1>
        <p className="text-gray-600">
          Powered By <a href='https://www.coingecko.com/' className="text-blue-500">CoinGecko API</a>
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-2">#</th>
              <th className="p-2 text-left">Coin</th>
              <th className="p-2">Price</th>
              <th className="p-2">1h</th>
              <th className="p-2">24h</th>
              <th className="p-2">7d</th>
              <th className="p-2">24h Volume</th>
              <th className="p-2">Market Cap</th>
              <th className="p-2">Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map(coin => (
              <tr key={coin.id} className="border-b hover:bg-gray-50">
                <td className="p-2 text-center">{coin.market_cap_rank}</td>
                <td className="p-2 flex items-center">
                  <img src={coin.image} alt={coin.symbol} className="w-6 h-6 mr-2" />
                  <div>
                    <h4 className="font-medium">{coin.name}</h4>
                    <small className="text-gray-500 uppercase">{coin.symbol}</small>
                  </div>
                </td>
                <td className="p-2 text-center">{formatToUSD(coin.current_price)}</td>
                <Percentage coin={coin.price_change_percentage_1h_in_currency} />
                <Percentage coin={coin.price_change_percentage_24h_in_currency} />
                <Percentage coin={coin.price_change_percentage_7d_in_currency} />
                <td className="p-2 text-center">{formatToUSD(coin.total_volume)}</td>
                <td className="p-2 text-center">{formatToUSD(coin.market_cap)}</td>
                <td className="p-2">
                  <Chart sparkline={coin.sparkline_in_7d} priceChange={coin.price_change_percentage_7d_in_currency} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cryptocurrencies;
