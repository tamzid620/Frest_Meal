import orderTrackingPhoto1 from '../../../../public/images/Tandoori-Chicken.jpg'
import aboutPhoto from '../../../../public/images/contactUs.jpg';
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';


const Cart = () => {
  return (
    <div className="">
      {/* title section */}
            {/* title section */}
            <div
                style={{
                    backgroundImage: `url(${aboutPhoto})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '350px',
                    // marginTop:'30px'
                }}
                className="flex justify-center"
            >
                {/* title tag */}
                <div className="bg-black opacity-70 w-full h-full flex flex-col justify-center items-center">
                    <h1
                        style={{ fontFamily: 'Mooli, sans-serif' }}
                        className="text-3xl text-white font-semibold "
                    >
                        Cart
                    </h1>
                    <img src="../../../../public/icons/hr.svg" alt="" />
                </div>
            </div>

      {/* information section */}
      <div className="max-w-screen-xl mx-auto flex justify-center mt-20">
        <div className=" grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">

            {/* selected items */}
            <div
              className="border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 rounded-xl h-[115px] lg:w-[500px] md:w-[500px] sm: w-[358px] text-yellow-500 bg- overflow-y-auto flex items-center mb-5">

              <img className='rounded-xl lg:w-[150px] md:w-[150px] sm: w-[100px] me-5 ms-2' src={orderTrackingPhoto1} alt="" />

              <div className='item flex justify-between items-center'>
                <div className='-mt-5'>
                  <h1 className=' text-md text-yellow-500 font-semibold uppercase mt-5'>Tandoori Chicken</h1>
                  <h2 className='text-[#808080] font-semibold'>Price: <span>$30.00</span></h2>
                  <h2 className='text-[#808080] font-semibold'>Tax: <span>$05.00</span></h2>
                  <h2 className='text-[#808080] font-semibold'>Delivery Charge: <span>$05.00</span></h2>
                </div>
                <button className='w-[50px] h-[50px] lg:ms-20 md:ms-20 border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black'>
                  <MdDeleteForever className='w-[50px] h-[30px]' />
                </button>

              </div>
            </div>

        </div>
      </div>
        {/* order now button  */}
        <div className="flex justify-center mt-5">
             <Link to="/order"> <button  className=" hover:bg-[#FFD700] hover:text-black 
 bg-[#FFD700]  text-[#808080] border-black
  font-bold px-3 py-1 rounded-md ">
                Order Now
              </button></Link>
            </div>
    </div>
  );
};

export default Cart;
