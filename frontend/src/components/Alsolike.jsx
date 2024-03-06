// import React, { useEffect, useState } from 'react';

// const YourComponent = () => {
//   const [trendingCoins, setTrendingCoins] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     // Fetch trending coins data from API
//     const fetchTrendingCoins = async () => {
//       try {
//         const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
//         const data = await response.json();
//         setTrendingCoins(data.coins);
//       } catch (error) {
//         console.error('Error fetching trending coins:', error);
//       }
//     };

//     fetchTrendingCoins();
//   }, []);
//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? trendingCoins.length - 1 : prevIndex - 1));
//   };

//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === trendingCoins.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="bg-white p-10 ">
//       <h2 className="font-semibold text-4xl mb-10">You May Also Like</h2>
//       <div className="grid grid-rows-2">
//         <div className="flex gap-3 space-x-10 overflow-x-auto">
//           {trendingCoins.slice(1).map((coin) => (
//        <div key={coin.item.id} className="grid grid-row-3">
//         <div className="flex gap-3">
//           <img className="h-7" src={coin.item.thumb} alt={coin.item.name} /> {/* Use thumb instead of small */}
//           <p>{coin.item.symbol}</p>
//           <p className={coin.item.data.price_change_percentage_24h.usd >= 0 ? 'text-green-500' : 'text-red-500'}>
//             {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
//         </p>
//         </div>
//            <p className="font-medium text-3xl">{coin.item.data.price}</p>
//            <img src={coin.item.data.sparkline} alt="Price Graph" />
//        </div>
//         ))}
//         </div>
//       </div>

//       {/* trending coins section */}
//       <h2 className="font-semibold text-4xl mb-10">Trending Coins</h2>
//       <div className="grid grid-rows-2">
//         <div className="flex gap-3 space-x-10">
//           {trendingCoins.slice(1).map((coin) => (
//        <div key={coin.item.id} className="grid grid-row-3">
//         <div className="flex gap-3">
//           <img className="h-7" src={coin.item.thumb} alt={coin.item.name} /> {/* Use thumb instead of small */}
//           <p>{coin.item.symbol}</p>
//           <p className={coin.item.data.price_change_percentage_24h.usd >= 0 ? 'text-green-500' : 'text-red-500'}>
//             {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
//         </p>
//         </div>
//            <p className="font-medium text-3xl">{coin.item.data.price}</p>
//            <img src={coin.item.data.sparkline} alt="Price Graph" />
//        </div>
//         ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;
import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch trending coins data from API
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
        const data = await response.json();
        setTrendingCoins(data.coins);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? trendingCoins.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === trendingCoins.length - 1 ? 0 : prevIndex + 1));
  };

  const filteredCoins = trendingCoins.filter(coin => coin.item.symbol !== "COQ" && coin.item.symbol !== "PEPE");

  return (
    <div className="bg-white p-10 ">
      <h2 className="font-semibold text-4xl mb-10">You May Also Like</h2>
      <div className="grid grid-rows-2">
        <div className="flex gap-3 space-x-10 overflow-x-auto">
          {filteredCoins.map((coin) => (
       <div key={coin.item.id} className="grid grid-row-3">
        <div className="flex gap-3">
          <img className="h-7" src={coin.item.thumb} alt={coin.item.name} /> {/* Use thumb instead of small */}
          <p>{coin.item.symbol}</p>
          <p className={coin.item.data.price_change_percentage_24h.usd >= 0 ? 'text-green-500' : 'text-red-500'}>
            {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
        </p>
        </div>
           <p className="font-medium text-3xl">{coin.item.data.price}</p>
           <img src={coin.item.data.sparkline} alt="Price Graph" />
       </div>
        ))}
        </div>
      </div>

      {/* trending coins section */}
      <h2 className="font-semibold text-4xl mb-10">Trending Coins</h2>
      <div className="grid grid-rows-2">
        <div className="flex gap-3 space-x-10 overflow-x-auto">
          {filteredCoins.map((coin) => (
       <div key={coin.item.id} className="grid grid-row-3">
        <div className="flex gap-3">
          <img className="h-7" src={coin.item.thumb} alt={coin.item.name} /> {/* Use thumb instead of small */}
          <p>{coin.item.symbol}</p>
          <p className={coin.item.data.price_change_percentage_24h.usd >= 0 ? 'text-green-500' : 'text-red-500'}>
            {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
        </p>
        </div>
           <p className="font-medium text-3xl">{coin.item.data.price}</p>
           <img src={coin.item.data.sparkline} alt="Price Graph" />
       </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
