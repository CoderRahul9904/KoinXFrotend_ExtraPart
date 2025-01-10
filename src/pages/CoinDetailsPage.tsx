import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CoinDetails = ({ coin }:{coin:any}) => {
  const [stats, setStats] = useState(true);
  const [deviation, setDeviation] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch(`/stats?coin=${coin}`);
      const data = await response.json();
      setStats(data);
    };

    const fetchDeviation = async () => {
      const response = await fetch(`/deviation?coin=${coin}`);
      const data = await response.json();
      setDeviation(data);
    };

    fetchStats();
    fetchDeviation();
  }, [coin]);

  return (
    <>
    <div className=' w-screen h-screen flex flex-col justify-between'>
    <Header />
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{coin} Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Stats</h2>
          {stats ? (
            <div>
              {/* <p>Price: ${stats.price}</p>
              <p>Market Cap: ${stats.marketCap}</p>
              <p>24h Change: {stats['24hChange']}%</p> */}
              <p>Price: x</p>
              <p>Market Cap: y</p>
              <p>24h Change: z</p>
            </div>
          ) : (
            <p>Loading stats...</p>
          )}
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Price Deviation</h2>
          {/* {deviation ? <p>Standard Deviation: {deviation.deviation}</p> : <p>Loading deviation...</p>} */}
          <p>Standard Deviation: 4000.5</p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    </>
  );
};

export default CoinDetails;
