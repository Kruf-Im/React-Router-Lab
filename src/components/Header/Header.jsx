import './Header.css';
import {Link, NavLink} from 'react-router-dom';

function Header(){
    return(
        <div className="Header">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/lists">Task-Lists</NavLink>
            </nav>
            <div className='verticalLine'></div>
        </div>
    );
}

export default Header;