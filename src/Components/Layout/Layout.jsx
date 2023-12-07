import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/Navbar/NavigationBar';

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
 location.pathname.includes('adminFoodItem') ||
 location.pathname.includes('adminFoodItemEdit') ||
 location.pathname.includes('adminFoodItemAdd') ||
 location.pathname.includes('adminOrderList') ||
 location.pathname.includes('adminOrderDetails') ||
 location.pathname.includes('adminOrderProcessing') ||
 location.pathname.includes('adminOrderDelivery') 

    return (
        <div>
        { noHeaderFooter || <NavigationBar/> }
        <Outlet/>
        { noHeaderFooter || <Footer/> }
        </div>
    );
};

export default Layout;