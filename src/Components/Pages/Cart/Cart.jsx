import orderTrackingPhoto1 from '../../../../public/images/Tandoori-Chicken.jpg'
import orderTrackingPhoto4 from '../../../../public/images/Lobster-Chowder.jpeg'
import orderTrackingPhoto2 from '../../../../public/images/kimchi-fried-rice-recipe.jpg'
import orderTrackingPhoto3 from '../../../../public/images/Bibimbap (1).jpg'
import aboutPhoto from '../../../../public/images/contactUs.jpg';
import { MdDeleteForever } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";


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
                    marginTop:'30px'
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
      <div className="max-w-screen-xl mx-auto flex justify-between mt-20">
        <div className=" grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm: ms-2 sm: me-2 md:ms-20 lg:ms-10 lg:me-10">
          {/* selected items */}
          <div>
            {/* selected items-1 */}
            <div
              className="border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 rounded-xl h-[115px] lg:w-[650px] md:w-[650px] sm: w-[358px] text-yellow-500 bg- overflow-y-auto flex items-center mb-14">

              <img className='rounded-xl lg:w-[150px] md:w-[150px] sm: w-[100px] me-5 ms-2' src={orderTrackingPhoto1} alt="" />

              <div className='item flex justify-between items-center'>
                <div className='-mt-5'>
                  <h1 className=' text-md text-yellow-500 font-semibold uppercase mt-5'>Tandoori Chicken</h1>
                  <h2 className='text-[#808080] font-semibold'>Price: <span>$30.00</span></h2>
                  <h2 className='text-[#808080] font-semibold'>Tax: <span>$05.00</span></h2>
                  <h2 className='text-[#808080] font-semibold'>Delivery Charge: <span>$05.00</span></h2>
                </div>
                <button className='w-[50px] h-[50px] lg:ms-52 md:ms-52 border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black'>
                  <MdDeleteForever className='w-[50px] h-[30px]' />
                </button>

              </div>
            </div>
            {/* selected items-2 */}
            <div
              className="border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 rounded-xl h-[115px] lg:w-[650px] md:w-[650px] sm: w-[358px] text-yellow-500 bg- overflow-y-auto flex items-center mb-10">

              <img className='rounded-xl lg:w-[150px] md:w-[150px] sm: w-[100px] me-5 ms-2' src={orderTrackingPhoto2} alt="" />

              <div className='item flex justify-between items-center'>
                <div className='-mt-5'>
                  <h1 className=' text-md text-yellow-500 font-semibold uppercase mt-5'>Tandoori Chicken</h1>
                  <h2 className='text-[#808080] font-semibold'>Price: <span>$30.00</span></h2>
                  <h2 className='text-[#808080] font-semibold'>Tax: <span>$05.00</span></h2>
                  <h2 className='text-[#808080] font-semibold'>Delivery Charge: <span>$05.00</span></h2>
                </div>
                <button className='w-[50px] h-[50px] lg:ms-52 md:ms-52 border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black'>
                  <MdDeleteForever className='w-[50px] h-[30px]' />
                </button>

              </div>
            </div>
            {/* selected items-3 */}
            <div
              className="border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 rounded-xl h-[115px] lg:w-[650px] md:w-[650px] sm: w-[358px] text-yellow-500 bg- overflow-y-auto flex items-center mb-10">

              <img className='rounded-xl lg:w-[150px] md:w-[150px] sm: w-[100px] me-5 ms-2' src={orderTrackingPhoto3} alt="" />

              <div className='item flex justify-between items-center'>
                <div className='-mt-5'>
                  <h1 className=' text-md text-yellow-500 font-semibold uppercase mt-5'>Tandoori Chicken</h1>
                  <h2 className='text-[#808080] font-semibold'>Price: <span>$30.00</span></h2>
                  <h2 className='text-[#808080] font-semibold'>Tax: <span>$05.00</span></h2>
                  <h2 className='text-[#808080] font-semibold'>Delivery Charge: <span>$05.00</span></h2>
                </div>
                <button className='w-[50px] h-[50px] lg:ms-52 md:ms-52 border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black'>
                  <MdDeleteForever className='w-[50px] h-[30px]' />
                </button>

              </div>
            </div>

            {/* selected items-4 */}
            <div
              className="border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 rounded-xl h-[115px] lg:w-[650px] md:w-[650px] sm: w-[358px] text-yellow-500 bg- overflow-y-auto flex items-center mb-10">

              <img className='rounded-xl lg:w-[150px] md:w-[150px] sm: w-[100px] h-[100px] me-5 ms-2' src={orderTrackingPhoto4} alt="" />

              <div className='item flex justify-between items-center'>
                <div className='-mt-5'>
                  <h1 className=' text-md text-yellow-500 font-semibold uppercase mt-5'>Tandoori Chicken</h1>
                  <h2 className='text-[#808080] font-semibold'>Price: <span>$30.00</span></h2>
                  <h2 className='text-[#808080] font-semibold'>Tax: <span>$05.00</span></h2>
                  <h2 className='text-[#808080] font-semibold'>Delivery Charge: <span>$05.00</span></h2>
                </div>
                <button className='w-[50px] h-[50px] lg:ms-52 md:ms-52 border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black'>
                  <MdDeleteForever className='w-[50px] h-[30px]' />
                </button>

              </div>
            </div>

          </div>


          {/* payment details */}
          <div
            className="rounded-xl shadow-xl shadow-yellow-500  lg:w-[450px] lg:h-[350px] md:w-[650px] md:h-[350px] sm: w-[358px] sm: h-[350px] sm: mt-10 text-yellow-500 sticky top-14 z-1 sm:mt-20 md:mt-20 lg:mt-0 lg:ms-36 md:ms-0">
            <div className='ms-2 me-2'>
              <h1 className="border border-yellow-500 p-2 rounded-xl font-semibold text-3xl text-white mb-3 flex justify-center">Order Details</h1>
              <h1 className='font-bold text-lg text-gray-500 mb-2'>Selected items: <span className='text-yellow-500'> 04</span></h1>
              <h1 className='font-bold text-lg text-gray-500 mb-2'>Total Price: <span className='text-yellow-500'>$90</span></h1>
              <h1 className='font-bold text-lg text-gray-500 mb-2'> Total Delivery Charge: <span className='text-yellow-500'> $15</span></h1>
              <h1 className='font-bold text-lg text-gray-500 mb-2'>Total Tax: <span className='text-yellow-500'> $15</span></h1>
              <hr className='border border-yellow-500 mb-2' />
              <h1 className='font-bold text-lg text-gray-500 mb-2'>Total: <span className='text-yellow-500'> $15</span></h1>
              <h1 style={{ fontFamily: 'Mooli, sans-serif' }} className="border border-yellow-500 p-2 rounded-xl font-semibold text-2xl text-yellow-500 mb-3 mt-8 flex justify-center items-center hover:bg-yellow-500 hover:text-black">PAY NOW <BsFillCreditCardFill className='ms-5' /></h1>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
