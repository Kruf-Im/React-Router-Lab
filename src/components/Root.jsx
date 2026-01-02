import { Outlet } from 'react-router-dom';
import Header from './Header/Header'
import Footer from './Footer/Footer';

function Root(){
    return(
    <div className="container">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    );
}

export default Root;