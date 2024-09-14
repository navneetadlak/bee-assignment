import React from 'react'

const Main = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-4xl mx-auto p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <div className="border-b-4 border-red-500 w-16 mb-4"></div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Approachable Packages</h1>
                        <p className="text-gray-600 mb-6">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                        <a href="#" className="text-green-600 font-bold flex items-center">
                            Learn More <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                    <div className="md:w-1/2 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <div className="bg-green-200 rounded-full p-4 mb-4 inline-block">
                                <img src="https://placehold.co/50x50" alt="Icon of a teacher in front of a blackboard" className="w-12 h-12"/>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Certified Teacher</h2>
                            <div className="border-b-2 border-red-500 w-8 mx-auto mb-2"></div>
                            <p className="text-gray-600">The gradual accumulation of information about</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <div className="bg-green-200 rounded-full p-4 mb-4 inline-block">
                                <img src="https://placehold.co/50x50" alt="Icon of a telescope" className="w-12 h-12"/>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Expert instruction</h2>
                            <div className="border-b-2 border-red-500 w-8 mx-auto mb-2"></div>
                            <p className="text-gray-600">The gradual accumulation of information about</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main