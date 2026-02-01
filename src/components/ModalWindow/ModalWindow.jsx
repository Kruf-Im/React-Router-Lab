import './ModalWindow.css'

export default function ModalWindow({call, onDestroy, onConfirm}){
    if(!call){
        return null;
    }
    const closeWindow = (event) =>{
        if(event.target.className === 'modal'){
            onDestroy();
        }
    };

    return(
        <div onClick={closeWindow} className="modal">
            <div className="modalCard">
                <p onClick={onDestroy} className="closeButton">X</p>
                <h1>Delete task?</h1>
                <div className="choiceButtons">
                    <button className="yes" onClick={onConfirm}>
                        Yes
                    </button>
                    <button onClick={onDestroy} className="no">
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}