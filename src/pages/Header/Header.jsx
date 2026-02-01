import './Header.css';
import {Link, NavLink} from 'react-router-dom';
import { toggleTheme } from '../../store/uiSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header(){
    const dispatch = useDispatch();
    const theme = useSelector((state)=> state.ui.theme)
    return(
        <div className="Header">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/lists">Task-Lists</NavLink>
                <NavLink to="/bin">Bin</NavLink>
            </nav>
            <div className='verticalLine'></div>
            <div className='themeContainer'>
                <button className='themeSwitch' onClick={()=> dispatch(toggleTheme())}>
                    {theme === "dark" ? '🌑 Dark' : '☀️ Light'}
                </button>
            </div>
        </div>
    );
}

export default Header;