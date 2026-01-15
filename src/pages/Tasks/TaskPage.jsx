import './TaskPage.css'
import { useLoaderData, Link } from "react-router-dom";

function TaskPage(){
    const task = useLoaderData();
    return(
        <div className="TaskPage">
            <div className={`Task`}>
                <span className="TaskNumber">Task №{Number(task.id)}</span>
                <h1>{task.title}</h1>
                <div className={`TaskStatus ${task.completed ? 'Done' : 'NotDone'}`}>
                    {task.completed ? "Done" : "Not Done"}
                </div>
            </div>
            <nav>
                <Link to={`/lists/${task.userId}`}>Return to list</Link>
            </nav>
        </div>
    );
}
export default TaskPage;