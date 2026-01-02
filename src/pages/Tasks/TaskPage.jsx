import './TaskPage.css'
import { useLoaderData, Link } from "react-router-dom";

function TaskPage(){
    const task = useLoaderData();
    return(
        <div className="TaskPage">
            <div className={`Task`}>
                <span className="TaskNumber">Task №{Number(task.taskId) + 1}</span>
                <h1>{task.taskSummary}</h1>
                <p className="TaskDescription">
                    {task.taskDescription || "No description provided."}
                </p>
                <div className={`TaskStatus ${task.done ? 'Done' : 'NotDone'}`}>
                    {task.done ? "Done" : "Not Done"}
                </div>
            </div>
            <nav>
                <Link to='/lists'>Return to list</Link>
            </nav>
        </div>
    );
}
export default TaskPage;