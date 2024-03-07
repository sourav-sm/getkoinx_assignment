import React from "react";

const Body = () => {
    return (
      <div className="flex flex-col sm:(grid grid-cols-10 )">
      <div className="sm:(col-span-7  font-bold) flex flex-wrap gap-4 p-5 ml-5 mb-5 text-xl font-semibold text-slate-500 ">
                <div className="text-blue-500 border-b-4 border-blue-500 pb-1">Overview</div>
                <div>Fundamentals</div>
                <div>News Insights</div>
                <div>Sentiments</div>
                <div>Team</div>
                <div>Technicals</div>
                <div>Tokenomics</div>
            </div>
            <hr className="border-t-4 border-slate-300 mt-5"/>
        </div>
    );
};

export default Body;
