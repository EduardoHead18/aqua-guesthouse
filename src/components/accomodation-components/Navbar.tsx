import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black text-3xl font-bold">
                    <a href="#">AQUA GUESTHOUSE</a>
                </div>
                <div className="block lg:hidden">
                    <button className="text-white focus:outline-none" onClick={() => setOpen(!open)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:justify-end lg:flex lg:items-center lg:w-auto ${open ? 'block' : 'hidden'}`}>
                    <ul className="lg:flex lg:space-x-4">
                        <li><a href="#" className="block text-black px-2 py-1">ACCOMODATIONS</a></li>
                        <li><a href="#" className="block text-black px-2 py-1">ABOUT</a></li>
                        <li><a href="#" className="block text-black px-2 py-1">ACTIVITIES</a></li>
                        <li><a href="#" className="block text-black px-2 py-1">USD</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;