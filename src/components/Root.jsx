import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header/Header'
import Footer from './Footer/Footer';
import LoadingOverlay from './LoadingOverlay/LoadingOverlay';

function Root(){
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return(
    <div className="container">
        {isLoading && <LoadingOverlay />}
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    );
}

export default Root;