import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerDashboard from "../components/CustomerDashboard";

const UserRouter = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<CustomerDashboard />} />
        </Routes>
    );
}

export default UserRouter;