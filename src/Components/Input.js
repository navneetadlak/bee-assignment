import React from 'react'

const Input = () => {
    return (
        <div className="text-center p-6">
            <h2 className="text-green-600 font-semibold mb-2">Newsletter</h2>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Watch our Courses</h1>
            <p className="text-gray-500 mb-6">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
            <div className="flex flex-col sm:flex-row justify-center">
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="p-3 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none w-full sm:w-80 focus:outline-none"
                />
                <button className="bg-green-400 text-white p-3 rounded-b-md sm:rounded-r-md sm:rounded-b-none w-full sm:w-auto">Subscribe</button>
            </div>
        </div>
    );
}

export default Input