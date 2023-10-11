import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Layout = () => {

const location = useLocation();
const noHeaderFooter = location.pathname.includes('adminpanel') || location.pathname.includes('setdemo')  ;

    return (
        <div>
        { noHeaderFooter || <Navbar/> }
        <Outlet/>
        { noHeaderFooter || <Footer/> }
        </div>
    );
};

export default Layout;