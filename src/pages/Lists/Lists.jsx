import './Lists.css'
import {Link, useLoaderData} from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
function Lists(){
    const todoLists = useLoaderData();
    const users = [... new Set(todoLists.map(todo => todo.userId))];
    return(
        <div className='Lists'>
            <h1 className='title'>Todos</h1>
            <div style={{width:'100%', height:'4rem'}}>
                <SearchForm></SearchForm>
            </div>
            <div className='list'>
                <ul>
                    {
                        users.map((userId)=>(
                            <li key={userId}>
                                <Link to={`/lists/${userId}`}>List #{userId}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
export default Lists;