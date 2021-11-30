import React, {Link} from "react-router-dom";

import "./Navigation.css";

function Navigation() {
    return (
        <nav className="test-nav">
            <ul className="menuList">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/useStatePage'>Test_S</Link></li>
                <li><Link to='/useEffectPage'>Test_E</Link></li>
                <li><Link to='/useAxiosPage'>Axios</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;