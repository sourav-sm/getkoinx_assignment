import sentimentPercentage from "../Images/sentimentPercentage.png"
import sentiicon1 from "../Images/sentIcon1.png"
import sentiicon2 from "../Images/sentIcon2.png"

const Sentiment=()=>{
    return (
        <div className="grid grid-cols-10 ml-5">
            <div className="bg-white p-10 col-span-7 rounded-2xl mb-5">
                <h2 className="font-semibold text-3xl mb-3">Sentiment</h2>
                <div>
                    <h2 className="font-medium text-2xl mb-3 text-slate-400">Key Events</h2>
                    <div className="flex gap-3 ">
                        <div className="grid grid-cols-10 bg-slate-200  rounded-lg">
                            <img className="col-span-1" src={sentiicon1} alt="" />
                            <div className="col-span-9">
                                <p className="font-semibold mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde! Ipsa, inventore beatae suscipit aperiam exercitationem quasi in dignissimos placeat illum adipisci minima non vitae quod repudiandae tenetur.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde! Ipsa, inventore beatae suscipit aperiam exercitationem quasi in dignissimos placeat illum adipisci minima non vitae quod repudiandae tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde! Ipsa, inventore beatae suscipit aperiam exercitationem quasi in dignissimos placeat illum adipisci minima non vitae quod repudiandae tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-10 bg-slate-200 rouned-xl">
                            <img className="col-span-1" src={sentiicon2} alt="" />
                            <div className="col-span-9">
                                <p className="font-semibold mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde! Ipsa, inventore beatae suscipit aperiam exercitationem quasi in dignissimos placeat illum adipisci minima non vitae quod repudiandae tenetur.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde! Ipsa, inventore beatae suscipit aperiam exercitationem quasi in dignissimos placeat illum adipisci minima non vitae quod repudiandae tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde! Ipsa, inventore beatae suscipit aperiam exercitationem quasi in dignissimos placeat illum adipisci minima non vitae quod repudiandae tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="font-semibold text-xl mb-3 text-slate-400">Analyst Estimates</h2>
                    <div className="flex gap-10">
                    <div className="text-green-500 bg-slate-300 text-3xl font-bold rounded-full p-10">76%</div>
                    <img src={sentimentPercentage} alt="" />
                </div>
            </div>
           
        </div>
    )
}
export default Sentiment;