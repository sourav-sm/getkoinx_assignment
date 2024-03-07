import React from "react";
const Body = ()=>{
    return (
      <div className="grid grid-cols-10">
      <div className="col-span-7 flex space-x-11 p-5 ml-5 mb-5 text-xl font-semibold text-slate-500">
        <div className="text-blue-500 border-b-4 border-blue-500 pb-1">Overview</div>
        <div>Fundamentals</div>
        <div>News Insights</div>
        <div>Sentiments</div>
        <div>Team</div>
        <div>Technicals</div>
        <div>Tokenomics</div>
      </div>
      <div className="grid grid-cols-10">
          <hr className="col-span-10 border-t-4 border-slate-300 mt-5"/>
        </div>
      </div>
    )
}
export default Body;