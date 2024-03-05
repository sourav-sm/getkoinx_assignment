import React from "react";
import { useState } from "react";

const Navbar=()=>{
        const  [nav,setNav]=useState(false)
        
        const handleNav = () =>{
            setNav(!nav)
        }

   return(
    <div className="grid grid-cols-2 p-5 bg-white ">
      <div>Koinx</div>
      <div className="grid grid-cols-4 font-mono text-xl font-bold">
        <div className="px-4 py-2">Crypto Taxes</div>
        <div className="px-4 py-2">Free Tools</div>
        <div className="px-4 py-2">Resource Center</div>
        {/* <button className="bg-blue-600 text text-white rounded-md">Get Started</button> */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Get Started</button>

      </div>
    </div>
 )
}
export default Navbar;