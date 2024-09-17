import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../components/context/AuthContext";

const AdminNavBarComponents = () => {
    const { logout } = useAuth();
    return (
        <div>
            <nav>
                <li className="nav-item">
                    <a className="nav-links" onClick={logout}>LOG OUT</a>
                </li>
                <li className="nav-item">
                    <Link to="/admin/dashboard">Dashboard</Link>
                </li>
            </nav>
            <main>
                <Outlet /> {/* Nested routes will be rendered here */}
            </main>
        </div>
    );
}

export default AdminNavBarComponents;
