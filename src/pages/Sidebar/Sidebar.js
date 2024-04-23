import React from 'react';
import logo from '../../assets/logo/logo.png'

const Sidebar = () => {
    return (
        <div className="bg-gray-800 h-screen w-28 ml-0 text-white flex flex-col">
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <img src={logo} alt="" />
            </div>
            <div className="flex-1">
                <ul>
                    <li className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</li>
                    <li className="p-4 hover:bg-gray-700 cursor-pointer">Projects</li>
                    <li className="p-4 hover:bg-gray-700 cursor-pointer">Team</li>
                    <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;