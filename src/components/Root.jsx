import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../pages/Header/Header';
import Footer from '../pages/Footer/Footer'
import LoadingOverlay from './LoadingOverlay/LoadingOverlay';
import { useDispatch, useSelector } from 'react-redux';

function Root(){
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    const isLoadingRedux = useSelector((state)=> state.tasks.isLoading);
    const theme = useSelector((state)=> state.ui.theme);
    
    return(
    <div className={`container ${theme}`}>
        {(isLoading || isLoadingRedux) && <LoadingOverlay />}
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    );
}

export default Root;