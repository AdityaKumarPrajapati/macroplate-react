import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import AdminNavBarComponents from "../admin/components/AdminNavBarComponents";
import AdminDashboard from "../admin/components/AdminDashboard";

const AdminRouter = () => {
    return (
        <Routes>
            <Route path="/admin" element={<AdminNavBarComponents />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                {/* Define other admin routes here */}
                {/* For example: */}
                {/* <Route path="settings" element={<AdminSettings />} /> */}
            </Route>
        </Routes>
    );
}

export default AdminRouter;
