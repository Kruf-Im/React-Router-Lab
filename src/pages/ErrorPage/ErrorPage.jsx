import { useRouteError, NavLink } from 'react-router-dom';
import './ErrorPage.css'
export default function ErrorPage(){
    const error = useRouteError();
    return(
        <div className='ErrorPage'>
            <h1 className='errorTitle'>
                Oops! You've encountered an error!
            </h1>
            <p className='errorDescription'>
                {error.message || error.statusText}
            </p>
            <nav>
                <NavLink to="/">Return to Home</NavLink>
            </nav>
        </div>
    );
}