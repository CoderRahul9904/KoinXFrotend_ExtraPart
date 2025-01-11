import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';


interface CryptoData {
    _id: string;
    coinType: string;
    price: number;
    marketCap: number;
    change24h: number;
    timestamp: string;
    __v: number;
  }


interface DeviatedData{
    coin: string;
    deviation: number
}

const CoinDetails = () => {
    const [coin, setCoin] = useState('');
    const [deviation, setDeviation] = useState<DeviatedData | null>(null);
    const [stats, setStats] = useState<CryptoData | null>(null);

    const handleFetchStats = async () => {
        try {
            const statsResponse = await axios.get('https://koin-xb-ackend-assignment-9a4snyf6b-coderrahul9904s-projects.vercel.app/koinx/api/v1/stats',{params:{coinType:coin}})
            setStats(statsResponse.data);
            setDeviation(null)
          } catch (error) {
            console.error('Error fetching stats:', error);
          }
    };

    const fetchDeviation = async () => {
        try {
            const deviatedResponse = await axios.get('https://koin-xb-ackend-assignment-9a4snyf6b-coderrahul9904s-projects.vercel.app/koinx/api/v1/deviation',{params:{coinType:coin}})
            setDeviation(deviatedResponse.data);
          } catch (error) {
            console.error('Error fetching stats:', error);
          }
    };



    return (
        <>
            <div className=' w-screen h-screen flex flex-col justify-between'>
                <Header />
                <div className="container mx-auto py-8">
                    <h1 className="text-3xl font-bold mb-4">{coin} Details</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-6 shadow-md rounded-lg">
                            <h2 className="text-2xl font-bold mb-2">Stats</h2>
                            <div className="flex flex-col items-center space-y-4">
                                <select
                                    value={coin}
                                    onChange={(e) => setCoin(e.target.value)}
                                    className="p-2 border rounded-md w-1/2"
                                >
                                    <option value="">Select Cryptocurrency</option>
                                    <option value="bitcoin">Bitcoin</option>
                                    <option value="ethereum">Ethereum</option>
                                    <option value="matic-network">Matic-Network</option>
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
                                        <p>Price: {stats.price}</p>
                                        <p>Market Cap: {stats.marketCap}</p>
                                        <p>24h Change: {stats['change24h']}%</p>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded-lg">
                            <h2 className="text-2xl font-bold mb-2">Price Deviation</h2>
                            {deviation && <p>Standard Deviation: {deviation.deviation}</p> }
                            {(!deviation) &&  <button
                                    onClick={fetchDeviation}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                                >
                                    Fetch Deviation
                                </button>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default CoinDetails;
