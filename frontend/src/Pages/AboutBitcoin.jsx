import React from "react";
import profit from "../Images/profit.png";
import tax from "../Images/tax.png";

const AboutBitcoin = ()=>{
    return(
        <div className="grid grid-cols-10 ml-5 ">
        <div className="bg-white p-10 col-span-7 rounded-2xl mb-5">
            <h2 className="font-bold text-3xl mb-4">About Bitcoin</h2>
            <h2 className="font-bold text-xl mb-3">What is Bitcoin?</h2>
            <p className="font-normal text-lg mb-4">Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 MBTC and a max supply of 21 M BTC.</p>
            <div>
                <p className="font-bold text-xl mb-3">Lorem ipsum dolor sit amet</p>
                <p className="font-normal text-lg mb-4">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
                  Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
                  Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti laculis lacinia congue ipsum fames amet dul. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                </p>
            </div>
            <div>
                <h2 className="font-bold text-2xl mb-4">Already Holding Bitcoin?</h2>
                <div className="flex gap-5 mb-3"> 
                    <div className="bg-green-600 flex  p-5 gap-10 rounded-xl">
                        <img className="rounded-2xl" src={profit} alt="" />
                        <div className="mt-10">
                            <h2 className="text-white text-2xl font-semibold mb-2">Calculate Your tax liability</h2>
                            <button className="bg-white rounded-lg p-3 text-xl font-medium">Checkout Now</button>
                        </div>
                    </div>
                    <div>
                    <div className="bg-red-400 flex  p-5 gap-10 rounded-xl">
                        <img className="rounded-2xl" src={tax} alt="" />
                        <div className="mt-10">
                            <h2 className="text-white text-2xl font-semibold mb-2">Calculate Your Profits</h2>
                            <button className="bg-white rounded-lg p-3 text-xl font-medium">Checkout Now</button>
                        </div>
                    </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio excepturi repudiandae, est expedita in alias quis aperiam iusto illum sed qui, magnam quo quas molestias maiores mollitia temporibus, cumque rem?</p>
            </div>
        </div>
        </div>
    )
}
export default AboutBitcoin;