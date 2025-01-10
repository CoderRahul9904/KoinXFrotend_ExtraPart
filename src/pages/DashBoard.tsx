import Footer from "../components/Footer";
import Header from "../components/Header";


const Dashboard = () => {
  const coins = [
    { name: 'Bitcoin', symbol: 'BTC', price: '40000', marketCap: '800B', change: '3.4%' },
    { name: 'Ethereum', symbol: 'ETH', price: '2500', marketCap: '300B', change: '2.8%' },
    { name: 'Matic', symbol: 'MATIC', price: '1.25', marketCap: '12B', change: '-1.2%' },
  ];

  return (
    <>
    <div className=" w-screen flex flex-col justify-between h-screen">
    <Header />
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Crypto Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {coins.map((coin) => (
          <div
            key={coin.name}
            className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-2">{coin.name}</h2>
            <p>Price: ${coin.price}</p>
            <p>Market Cap: ${coin.marketCap}</p>
            <p>24h Change: {coin.change}</p>
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
