import { useDispatch, useSelector } from 'react-redux';
import './List.css'
import { useLoaderData, Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { deleteTask, fetchTasksByUserId, setFilter, setLoading, setTasks } from '../../store/tasksSlice';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { setModalOpen } from '../../store/uiSlice';

function List(){
    const data = useLoaderData();
    const {listId} = useParams();
    const dispatch = useDispatch();
    const items = useSelector((state)=> state.tasks.items);
    const currentFilter = useSelector((state)=> state.tasks.currentFilter);
    const isModalOpen = useSelector((state)=> state.ui.isModalOpen)
    const [deleteTaskId, setDeleteTaskId] = useState(null);


    useEffect(()=>{
        dispatch(fetchTasksByUserId(listId));
    }, [listId, dispatch]);

    const filteredTasks = items.filter(task=>{
        if(currentFilter === 'done') return task.completed;
        if(currentFilter === 'todo') return !task.completed;
        return true;
    });

    const confirmDelete = () =>{
        if(deleteTaskId){
            dispatch(deleteTask(deleteTaskId));
            dispatch(setModalOpen(false));
            setDeleteTaskId(null);
        }
    }

    return(
        <div className='List'>
            <ModalWindow
                call={isModalOpen}
                onDestroy={()=> dispatch(setModalOpen(false))}
                onConfirm={()=> confirmDelete()}/>
            <h1>List #{data.userId}</h1>
            <div className='filterButtons'>
                <button className={currentFilter === "all" ? 'active' : ''} onClick={()=>dispatch(setFilter('all'))}>All</button>
                <button className={currentFilter === "done" ? 'active' : ''}  onClick={()=>dispatch(setFilter('done'))}>Done</button>
                <button className={currentFilter === "todo" ? 'active' : ''}  onClick={()=>dispatch(setFilter('todo'))}>To Do</button>
            </div>
            {filteredTasks.length === 0 ? (<p>The list is empty.</p>) : 
            ( <ul>
                {filteredTasks.map((task) => (
                    <li className={task.completed ? 'checked' : ''} key={task.id}>
                        <Link to={`/lists/${data.userId}/task/${task.id}`}>{task.title}</Link>
                        <button className='right delete' onClick={()=>{
                            setDeleteTaskId(task.id);
                            dispatch(setModalOpen(true));}  
                        }>X</button>
                    </li>
                ))}
            </ul>
            )}
            <nav>
                <Link to='/lists'>Return</Link>
            </nav>
        </div>
    );
}
export default List;