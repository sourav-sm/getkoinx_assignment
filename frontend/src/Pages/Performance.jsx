import React from "react";
import performance from "../Images/performance.png"
import sentiicon1 from "../Images/sentIcon1.png"
import sentiicon2 from "../Images/sentIcon2.png"

const Performance=()=>{

    return (
        <div className="grid grid-cols-10 ml-5">
            <div className="bg-white p-10 col-span-7 rounded-2xl mb-5">
                <h2 className="font-semibold text-3xl mb-3">Performance</h2>
                <img className="mb-5" src={performance} alt="" />
                <h2 className="font-semibold text-3xl mb-5 mt-3 text-slate-500">Fundamentals</h2>
                <div className="grid grid-cols-2 gap-10">
                    <ul className="">
                        <li className="grid grid-cols-2  mb-3">
                            <p className="text-slate-400 text-xl">Bitcoin Price</p>
                            <p className="text-xl font-medium">$16,815.46</p>
                        </li>
                        <li className="grid grid-cols-2  mb-3">
                            <p className="text-slate-400 text-xl">24h Low/24h High</p>
                           <p className="text-xl font-medium">$16,382.07/16,874.12</p>
                        </li>
                        <li className="grid grid-cols-2  mb-3">
                            <p className="text-slate-400 text-xl">7d Low/7d High</p>
                            <p className="text-xl font-medium">$16,382.07/16,874.12</p>
                        </li>
                        <li className="grid grid-cols-2  mb-3">
                            <p className="text-slate-400 text-xl">Trading Volume</p>
                            <p className="text-xl font-medium">$23,249,202,782</p>
                        </li>
                        <li className="grid grid-cols-2  mb-3">
                            <p className="text-slate-400 text-xl">Rank</p>
                            <p className="text-xl font-medium">#1</p>
                        </li>
                    </ul>
                    <ul className="">
                        <li className="grid grid-cols-2  mb-3">
                            <p className="text-slate-400 text-xl">Market Cap</p>
                            <p className="text-xl font-medium">$323.507,290,047</p>
                        </li>
                        <li className="grid grid-cols-2  mb-3">
                            <p className="text-slate-400 text-xl">Market Cap Dominance</p>
                           <p className="text-xl font-medium">38.343%</p>
                        </li>
                        <li className="grid grid-cols-2  mb-3">
                            <p className="text-slate-400 text-xl">Volume/Market Cap</p>
                            <p className="text-xl font-medium">0.0718</p>
                        </li>
                        <li className="grid grid-cols-2  mb-3">
                            <p className="text-slate-400 text-xl">All-Time High</p>
                            <p className="text-lg font-medium">
                                <div className="flex gap-2">
                                <p>$23,249,202,782</p>
                                <p className="text-red-500">-75.6%</p>
                                </div>
                            <p className="text-sm font-medium">Nov 10,2021(about 1 year)</p>
                            </p>
                        </li>
                        <li className="grid grid-cols-2  mb-3">
                            <p className="text-slate-400 text-xl">All-Time High</p>
                            <p className="text-lg font-medium ">
                                <div className="flex gap-2">
                                <p>$67.81</p>
                                <p className="text-green-500">24729.1%</p>
                                </div>
                            <p className="text-sm font-medium">Jul 06,2013 (over 9 years)</p>
                            </p>
                        </li>
                    </ul>

                </div>
               
            </div>
           
        </div>
    )
}
export default Performance;