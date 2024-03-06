import HeroLeft from "../Images/heroLeft.png"
import hero_logo from "../Images/hero_logo.png"
import { useState,useEffect } from "react";

const Heroleft=()=>{
    const[bitcoinPrice,SetBitcoinPrice] = useState({
        inr:0,
        usd:0,
        inrChange:0,
        useChange:0
    })
    useEffect(()=>{
        const fetchBitcoinPrice = async ()=>{
            const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true';

            try{
                const response=await fetch(url);
                if(!response.ok) throw new Error("Network response was not ok");

                const data=await response.json();

                //update state with fetch data
                SetBitcoinPrice({
                    inr:data.bitcoin.inr,
                    usd:data.bitcoin.usd,
                    inrChange:data.bitcoin.inr_24h_change,
                    usdChange:data.bitcoin.usd_24h_change,
                });
            } catch(error){
                console.error('failed to fetch bitcoin price : ',error);
            }
        };
        //call the fetch function
        fetchBitcoinPrice();
    },[]);



    return (
        <div className="bg-white rounded-2xl p-5">
             <img className="h-20" src={hero_logo} alt="" />
             <div>
                <p className="font-bold text-4xl flex gap-3"> ${bitcoinPrice.usd.toLocaleString()} 
                  <p className="text-base font-medium">( {bitcoinPrice.usdChange.toFixed(2)}%)</p>
                  <p className="text-base font-normal">(24H)</p>
                </p>
                <p className="font-bold text-2xl"> ₹{bitcoinPrice.inr.toLocaleString()}</p>
             </div>
             <img src={HeroLeft} alt="" />
        </div>
       )
}
export default Heroleft;