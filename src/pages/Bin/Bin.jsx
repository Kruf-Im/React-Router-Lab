import { ArrowUUpLeftIcon } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { restoreTask } from "../../store/tasksSlice";
import '../Lists/List.css'


function Bin(){
    const deletedTasks = useSelector((state)=>state.tasks.deleted);
    const dispatch = useDispatch();

    return (
        <div className="List">
            <h1>Bin 🗑️</h1>
            {deletedTasks.length === 0 ? (<p>Your bin is empty.</p>) : 
            (
                <ul>
                    {deletedTasks.map(task => (
                        <li key={task.id} style={{padding: '10px 20px', color: 'white'}}> {task.title}
                            <button className='right restore' onClick={()=>dispatch(restoreTask(task.id))}>
                                <ArrowUUpLeftIcon size={32} color="#f2f2f2" weight="fill"></ArrowUUpLeftIcon>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <nav>
                <Link to="/lists">Return</Link>
            </nav>
        </div>
    );
}

export default Bin;