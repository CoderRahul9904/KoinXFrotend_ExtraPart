import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StatsPage = () => {
  const [coin, setCoin] = useState('');
  const [stats, setStats] = useState(true);
  const [deviation, setDeviation] = useState(null);

  const handleFetchStats = async () => {
    try {
      const statsResponse = await fetch(`/stats?coin=${coin}`);
      const statsData = await statsResponse.json();
      setStats(statsData);

      const deviationResponse = await fetch(`/deviation?coin=${coin}`);
      const deviationData = await deviationResponse.json();
      setDeviation(deviationData);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  return (
    <>
    <div className=' w-screen h-screen flex flex-col justify-between'>
    <Header />
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Crypto Stats</h1>
      <div className="flex flex-col items-center space-y-4">
        <select
          value={coin}
          onChange={(e) => setCoin(e.target.value)}
          className="p-2 border rounded-md w-1/2"
        >
          <option value="">Select Cryptocurrency</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="matic">Matic</option>
        </select>
        <button
          onClick={handleFetchStats}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Fetch Stats
        </button>
        {stats && (
          <div className="bg-white shadow-md p-6 rounded-md w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Latest Stats for {coin}</h2>
            {/* <p>Price: ${stats.price}</p>
            <p>Market Cap: ${stats.marketCap}</p>
            <p>24h Change: {stats['24hChange']}%</p> */}
            <p>Price: X</p>
            <p>Market Cap: y</p>
            <p>24h Change: z</p>
          </div>
        )}
        {deviation && (
          <div className="bg-white shadow-md p-6 rounded-md w-full md:w-2/3 mt-4">
            <h2 className="text-2xl font-bold mb-4">Price Deviation</h2>
            {/* <p>Standard Deviation: {deviation.deviation}</p> */}
            <p>Standard Deviation: 4082.48</p>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </div>
    </>
  );
};

export default StatsPage;
