import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {

    const [ modal, setModal] = useState(false);
    const handleMenuClick = () => {setModal(!modal)};

    return (
        <header className="bg-gray-100">
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
                    <Image className="h-8 w-8 mr-2" src="https://flowbite.com/docs/images/logo.svg" width={200} height={100} alt="Flowbite Logo" />
                    <span className="font-semibold text-xl tracking-tight">Flowbite</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-gray-900 hover:border-gray-900" onClick={handleMenuClick}>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3zm0 8a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3zm0 8a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3z" /></svg>
                    </button>
                </div>
                <div className={`w-full block lg:flex lg:items-center lg:w-auto ${modal ? 'block' : 'hidden'}`}>
                    <div className="text-sm lg:flex-grow"></div>
                    <div>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900 mr-4">Docs</a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900 mr-4">Examples</a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900">Blog</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;