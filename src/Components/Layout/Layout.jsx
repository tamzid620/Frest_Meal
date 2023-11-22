import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Layout = () => {

const location = useLocation();
const noHeaderFooter =
 location.pathname.includes('dp') || 
 location.pathname.includes('adminlogin') ||
 location.pathname.includes('adminCategory') ||
 location.pathname.includes('adminategoryAdd') ||
 location.pathname.includes('adminCategoryEdit') ||
 location.pathname.includes('adminSubCategory') ||
 location.pathname.includes('adminSubCategoryEdit') ||
 location.pathname.includes('adminSubCategoryAdd') ||
 location.pathname.includes('adminFoodItem') 

    return (
        <div>
        { noHeaderFooter || <Navbar/> }
        <Outlet/>
        { noHeaderFooter || <Footer/> }
        </div>
    );
};

export default Layout;