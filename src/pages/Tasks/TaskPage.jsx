import { useDispatch, useSelector } from 'react-redux';
import './TaskPage.css'
import { useLoaderData, Link } from "react-router-dom";
import { toggleStatus } from '../../store/tasksSlice';
import { useEffect } from 'react';

function TaskPage(){
    const dataTask = useLoaderData();
    const dispatch = useDispatch();
    const task = useSelector(state => state.tasks.items.find(t=>t.id == dataTask.id));
    return(
        <div className="TaskPage">
            <div className={`Task`}>
                <span className="TaskNumber">Task №{Number(task.id)}</span>
                <h1>{task.title}</h1>
                <div className={`TaskStatus ${task.completed ? 'Done' : 'NotDone'}`} onClick={()=>dispatch(toggleStatus(task.id))}>
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