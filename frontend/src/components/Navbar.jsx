import React, { useState } from "react";
import logo from "../Images/logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const menu = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    );

    const cross = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    );

    return (
        <div className="sm:grid sm:grid-cols-2 flex justify-between md:flex  md:items-center p-5 bg-white">
            <img className="h-12 w-25" src={logo} alt="" />
            <div className="hidden md:grid md:grid-cols-4 font-mono text-xl font-bold">
                <div className="px-4 py-2">Crypto Taxes</div>
                <div className="px-4 py-2">Free Tools</div>
                <div className="px-4 py-2">Resource Center</div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Get Started</button>
            </div>
            <button className="md:hidden   text-black md:mt-0" onClick={handleNav}>
                {nav ? cross : menu}
            </button>
            {nav && (
                <div className=" bg-white md:bg-transparent md:col-span-4 md:mt-0 md:flex md:justify-end">
                    <div className="md:flex md:space-x-4 md:items-center">
                        <div className="px-4 py-2">Crypto Taxes</div>
                        <div className="px-4 py-2">Free Tools</div>
                        <div className="px-4 py-2">Resource Center</div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Get Started</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

