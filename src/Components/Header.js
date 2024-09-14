import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="flex justify-between items-center p-6 bg-[#FDF3F1]">
                <div className="text-2xl font-bold text-gray-900">Brandname</div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#" className="text-[#737373] hover:text-gray-900">Home</a>
                    <a href="#" className="text-[#737373] hover:text-gray-900">Product</a>
                    <a href="#" className="text-[#737373] hover:text-gray-900">Pricing</a>
                    <a href="#" className="text-[#737373] hover:text-gray-900">Contact</a>
                </nav>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-[#396BA7B] hover:text-green-800 py-2">Login</a>
                    <a href="#" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">JOIN US</a>
                </div>
            </header>
            <main className="flex flex-col md:flex-row items-center max-h-full justify-between px-6 py-12 bg-[#FDF3F1]">
                <div className="max-w-lg text-center md:text-left">
                    <p className="text-[#396BA7B] text-lg">Welcome</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-2">Best Learning Opportunities</h1>
                    <p className="text-gray-600 text-lg mt-4">Our goal is to make online education work for everyone</p>
                    <div className="mt-6 space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                        <a href="#" className="bg-[#396BA7B] text-white px-6 py-3 rounded hover:bg-green-700 block md:inline-block">Join Us</a>
                        <a href="#" className="border border-[#396BA7B] text-green-600 px-6 py-3 rounded hover:bg-green-50 block md:inline-block">Learn More</a>
                    </div>
                </div>
                <div className="relative mt-8 md:mt-0">
                    <img src="https://placehold.co/600x800" alt="A smiling student holding books and a backpack" className="relative z-10 w-full md:w-auto" />
                    <div className="absolute top-0 left-0 w-full h-full">
                        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 700">
                            <path fill="#FFEDD5" d="M0 0h600v800H0z"/>
                            <path fill="#FDE68A" d="M0 0h600v800H0z"/>
                            <path fill="#FCD34D" d="M0 0h600v800H0z"/>
                            <path fill="#FBBF24" d="M0 0h600v800H0z"/>
                            <path fill="#F59E0B" d="M0 0h600v800H0z"/>
                            <path fill="#D97706" d="M0 0h600v800H0z"/>
                            <path fill="#B45309" d="M0 0h600v800H0z"/>
                            <path fill="#92400E" d="M0 0h600v800H0z"/>
                            <path fill="#78350F" d="M0 0h600v800H0z"/>
                            <path fill="#6B21A8" d="M0 0h600v800H0z"/>
                            <path fill="#5B21B6" d="M0 0h600v800H0z"/>
                            <path fill="#4C1D95" d="M0 0h600v800H0z"/>
                            <path fill="#4338CA" d="M0 0h600v800H0z"/>
                            <path fill="#3730A3" d="M0 0h600v800H0z"/>
                            <path fill="#312E81" d="M0 0h600v800H0z"/>
                            <path fill="#1E3A8A" d="M0 0h600v800H0z"/>
                            <path fill="#1D4ED8" d="M0 0h600v800H0z"/>
                            <path fill="#2563EB" d="M0 0h600v800H0z"/>
                            <path fill="#3B82F6" d="M0 0h600v800H0z"/>
                            <path fill="#60A5FA" d="M0 0h600v800H0z"/>
                            <path fill="#93C5FD" d="M0 0h600v800H0z"/>
                            <path fill="#BFDBFE" d="M0 0h600v800H0z"/>
                            <path fill="#DBEAFE" d="M0 0h600v800H0z"/>
                            <path fill="#EFF6FF" d="M0 0h600v800H0z"/>
                        </svg>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Header