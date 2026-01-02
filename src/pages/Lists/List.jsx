import './List.css'
import { useLoaderData, Link } from "react-router-dom";

function List(){
    const list = useLoaderData();
    return(
        <div className='List'>
            <h1>{list.listTitle}</h1>
            <ul>
                {list.tasks.map((task, index) => (
                    <li className={task.done ? 'checked' : ''}><Link to={`/lists/${list.listId}/task/${task.taskId}`}>{task.taskSummary}</Link></li>
                ))}
            </ul>
            <nav>
                <Link to='/lists'>Return to lists</Link>
            </nav>
        </div>
    );
}
export default List;