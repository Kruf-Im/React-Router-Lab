import './List.css'
import { useLoaderData, Link } from "react-router-dom";

function List(){
    const data = useLoaderData();

    return(
        <div className='List'>
            <h1>List #{data.userId}</h1>
            <ul>
                {data.tasks.map((task, index) => (
                    <li className={task.completed ? 'checked' : ''} key={task.id}>
                        <Link to={`/lists/${data.userId}/task/${task.id}`}>{task.title}</Link>
                    </li>
                ))}
            </ul>
            <nav>
                <Link to='/lists'>Return</Link>
            </nav>
        </div>
    );
}
export default List;