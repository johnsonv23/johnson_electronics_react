import { memo } from 'react';

const Header = () => {
    return (
        <>
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">

                    <div className="flex items-center text-2xl font-bold text-amber-600">
                        <img src="src/assets/images/logo.png" alt="" style={{width:"130px"}}/>
                        <a href="/">Johnson Electronics</a>
                    </div>


                    <nav className="hidden md:flex space-x-6">
                        <a href="/" className="text-gray-700 hover:text-amber-600">Home</a>
                        <a href="/about" className="text-gray-700 hover:text-amber-600">About</a>
                        <a href="/products" className="text-gray-700 hover:text-amber-600">Products</a>
                        <a href="/service" className="text-gray-700 hover:text-amber-600">Services</a>
                        <a href="/contact" className="text-gray-700 hover:text-amber-600">Contact</a>
                    </nav>


                    <div className="hidden md:block">
                        <a href="/" className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700">
                            Get Started
                        </a>
                    </div>


                    <button className="md:hidden text-gray-700 focus:outline-none">

                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
};

export default memo(Header);