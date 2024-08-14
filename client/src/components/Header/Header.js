import { Link } from "react-router-dom";
import styles from './Header.module.css';

export const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="catalog">Catalog</Link></li>
                {/* <!--For loggin users--> */}
                <li><Link to="add-car">Add Car</Link></li>
                <li><Link to="test-drive-catalog">Test Drive</Link></li>
                <li><Link to="/">Logout</Link></li>

                {/* <!--For guest user--> */}
                <li><Link to="login">Login</Link></li>
                <li><Link to="register">Register</Link></li>
            </ul>
        </nav>
    );
}