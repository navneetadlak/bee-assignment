import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-4 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div>
                        <h5 className="font-bold text-gray-900 mb-2">Company Info</h5>
                        <ul className="text-gray-600">
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-900 mb-2">Legal</h5>
                        <ul className="text-gray-600">
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-900 mb-2">Features</h5>
                        <ul className="text-gray-600">
                            <li>Business Marketing</li>
                            <li>User Analytic</li>
                            <li>Live Chat</li>
                            <li>Unlimited Support</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-900 mb-2">Resources</h5>
                        <ul className="text-gray-600">
                            <li>IOS & Android</li>
                            <li>Watch a Demo</li>
                            <li>Customers</li>
                            <li>API</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-900 mb-2">Get In Touch</h5>
                        <ul className="text-gray-600">
                            <li><i className="fas fa-phone-alt text-green-600"></i> (480) 555-0103</li>
                            <li><i className="fas fa-map-marker-alt text-green-600"></i> 4517 Washington Ave. Manchester, Kentucky 39495</li>
                            <li><i className="fas fa-envelope text-green-600"></i> debra.holt@example.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-4 mt-8">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    Made With Love By Navneet Adlak All Right Reserved
                </div>
                <div className="container mx-auto px-4 text-center mt-4">
                    <a href="#" className="text-green-600 mx-2"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-green-600 mx-2"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-green-600 mx-2"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer