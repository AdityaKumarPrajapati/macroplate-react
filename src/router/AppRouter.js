import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../components/Home';
import HOWITWORKS from '../components/HOWITWORKS';
import OurApproach from '../components/OurApproach';
import Login from '../components/Login';
import FixedComponent from '../components/FixedComponent';
import NavBarComponents from '../components/NavBarComponents';
import Footer from '../components/Footer';
import AdminRouter from './AdminRouter';
import UserRouter from './UserRouter';
import { useAuth } from '../components/context/AuthContext'; // Ensure this import is correct

const AppRouter = () => {
    const { user } = useAuth() || {}; // Add default value to avoid destructuring error
    const location = useLocation();

    // Check if the current path is an admin route
    const isAdminRoute = location.pathname.startsWith('/admin');

    // Show header and footer only if the route is not an admin route
    const showHeaderFooter = location.pathname === '/' || (!isAdminRoute && user?.user_type !== 'admin');

    return (
        <>
            {showHeaderFooter && <FixedComponent />}
            {showHeaderFooter && <NavBarComponents />}
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/how-it-works" element={<HOWITWORKS />} />
                    <Route path="/our-approach" element={<OurApproach />} />
                    <Route path="/login" element={<Login />} />
                    {user?.user_type === 'admin' ? (
                        <Route path="/*" element={<AdminRouter />} />
                    ) : (
                        <Route path="/*" element={<UserRouter />} />
                    )}
                </Routes>
            </div>
            {showHeaderFooter && <Footer />}
        </>
    );
}

export default AppRouter;
