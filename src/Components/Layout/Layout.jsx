import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Layout = () => {

const location = useLocation();
const noHeaderFooter =
 location.pathname.includes('dp') || 
 location.pathname.includes('adminlogin') ||
 location.pathname.includes('AdminCategory') ||
 location.pathname.includes('AdminategoryAdd') ||
 location.pathname.includes('AdminCategoryEdit') ||
 location.pathname.includes('subCategory') ||
 location.pathname.includes('foodItem')

    return (
        <div>
        { noHeaderFooter || <Navbar/> }
        <Outlet/>
        { noHeaderFooter || <Footer/> }
        </div>
    );
};

export default Layout;