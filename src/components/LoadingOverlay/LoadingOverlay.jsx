import './LoadingOverlay.css'
function LoadingOverlay(){
    return(
        <div className="overlay">
            <div className="upperBar">
                <span className="loaderText">Loading...</span>
            </div>
        </div>
    );
}
export default LoadingOverlay;