import React from 'react';
import Navbar from '../pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/Sidebar/Sidebar';

const Main = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar />
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;