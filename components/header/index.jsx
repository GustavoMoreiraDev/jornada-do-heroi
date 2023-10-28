import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {

    const [ modal, setModal] = useState(false);
    const handleMenuClick = () => {setModal(!modal)};

    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <Link href={'/'} className="flex items-center flex-shrink-0 text-gray-100 mr-6" alt={'JDH'}>
                    <span className="font-semibold text-xl tracking-tight">JDH</span>
                </Link>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-gray-100 border-gray-200 hover:text-gray-100 hover:border-gray-200" onClick={handleMenuClick}>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3zm0 8a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3zm0 8a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3z" /></svg>
                    </button>
                </div>
                <div className={`w-full block lg:flex lg:items-center lg:w-auto ${modal ? 'block' : 'hidden'}`}>
                    <div className="text-sm lg:flex-grow"></div>
                    <div>
                        <Link href={'/personagens'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-gray-200 mr-4" alt={'JDH'}>
                            Personagens
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;