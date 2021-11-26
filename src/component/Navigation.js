import React, {Link} from "react-router-dom";

import "./Navigation.css";

function Navigation() {
    return (
        <nav className="test-nav">
            <ul className="menuList">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;