import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from './Header.module.css';

import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>

                {/* <!--For loggin users--> */}
                {isAuthenticated && (
                    <>
                    <li><Link to="/add-car">Add Car</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <span>User: {userEmail}</span>
                    </>
                )}

                {/* <!--For guest user--> */}
                {!isAuthenticated && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}