import heroright from "../Images/heroright.png"
const Heroright1=()=>{
    return (
        <div className="flex justify-center items-center ">
           <div className="bg-blue-600 text-white p-10 text-center rounded-2xl">
             <div className="text-4xl font-bold mb-3">Get Started with KoinX for Free</div>
             <div className="mb-3 text-lg font-medium">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports</div>
             <img className="mx-auto mb-3" src={heroright} alt="" />
             <button className="text-2xl font-medium bg-white text-black mx-auto  px-5 py-3 rounded-lg cursor flex text-center">Get Started for FREE <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                   </svg>
             </button>
           </div>
        </div>
    )
}
export default Heroright1;