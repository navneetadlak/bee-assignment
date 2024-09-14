import React from 'react'

const Team = () => {
    return (
        <div className="flex flex-col items-center py-12">
            <div className="text-center mb-12">
                <p className="text-green-600 font-semibold">Team</p>
                <h1 className="text-3xl font-bold text-gray-900">Get Quality Education</h1>
                <p className="text-gray-500 mt-2">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
            </div>
            <div className="flex space-x-6">
                {Array(4).fill().map((_, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <img className="w-32 h-32 rounded-full mx-auto mb-4" src={`https://placehold.co/150x150`} alt={`Profile picture of team member ${index + 1}`} />
                        <h2 className="text-lg font-semibold text-gray-900">Julian Jameson</h2>
                        <p className="text-gray-500 mb-4">Profession</p>
                        <div className="flex justify-center space-x-4 text-green-600">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team