import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

interface CryptoData {
    id: string;
    current_price: number;
    market_cap: number;
    price_change_percentage_24h: number;
  }


const Dashboard = () => {
    
    const [stats, setStats] = useState<[CryptoData] | null>(null);
    
        const handledashboardRequest=async()=>{
            try {
                const statsResponse = await axios.get('https://koin-xb-ackend-assignment-9a4snyf6b-coderrahul9904s-projects.vercel.app/koinx/api/v1/dashboard')
                setStats(statsResponse.data);
              
            } catch (error) {
              console.error('Error fetching stats:', error);
            }
        }
    useEffect(() => {
        handledashboardRequest()
      }, []);

  return (
    <>
    <div className=" w-screen flex flex-col justify-between h-screen">
    <Header />
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Crypto Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats?.map((coin) => (
          <div
            key={coin.id}
            className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-2">{coin.id.toUpperCase()}</h2>
            <p>Price: {coin.current_price}</p>
            <p>Market Cap: {coin.market_cap}</p>
            <p>24h Change: {coin['price_change_percentage_24h']}%</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
    </>
  );
};

export default Dashboard;
