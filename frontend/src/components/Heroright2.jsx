import React from "react";
import { useState,useEffect } from "react";

const Heroright2=()=>{
                const[trendingcoins,setTrendingcoins]=useState([]);

                useEffect(()=>{
                        const fetchTrendingCoins = async ()=>{
                                try{
                                        const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
                                        const data=await response.json();

                                        const top3Trendingcoins=data.coins.slice(0,3);
                                        setTrendingcoins(top3Trendingcoins);
                                }catch(error){
                                        console.log("error fertching trending coins "+ error);
                                }
                        };
                        fetchTrendingCoins();
                },[]);
 
        return (
    <div className="bg-white p-5 rounded-2xl ">
            <div className="font-semibold text-3xl mb-3">Trending Coins(24h)</div>
            <div className="font-semibold text-lg ">
            <ul >
              {trendingcoins.map((coin, index) => (
               <li className="flex gap-3 mb-3" key={index}>
               <img className="h-7" src={coin.item.small} alt="" />{coin.item.name} ({coin.item.symbol}) 
               <p className={coin.item.data.price_change_percentage_24h.usd >= 0 ? 'text-green-500 ml-11' : 'text-red-500 ml-11' }>
                 {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
               </p>
               </li>
                ))}
            </ul>
           </div>
    </div>
   )
}
export default Heroright2;