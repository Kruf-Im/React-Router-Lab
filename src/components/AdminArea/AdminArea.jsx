import './AdminArea.css'
import { useNavigate } from "react-router-dom";

function AdminArea(){
    const navigate = useNavigate();
    return(
        <div className='AdminArea'>
            <h1>Admin Panel</h1>
            <button className='exitButton' onClick={() => {
                navigate("/");
            }}>
                Exit
            </button>
        </div>
    );
}
export default AdminArea;