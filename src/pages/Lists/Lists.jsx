import './Lists.css'
import {Link} from 'react-router-dom';
function Lists(){
    return(
        <div className='Lists'>
            <h1 className='title'>
                My Task-Lists
            </h1>
            <ul>
                <li><Link to='/lists/0'>Monday</Link></li>
                <li><Link to='/lists/1'>Tuesday</Link></li>
                <li><Link to='/lists/2'>Wednesday</Link></li>
            </ul>
        </div>
    );
}
export default Lists;