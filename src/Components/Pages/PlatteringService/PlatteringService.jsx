import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import aboutPhoto from '../../../../public/images/contactUs.jpg';


const PlatteringService = () => {
  const [activeTab, setActiveTab] = useState(1);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* title section */}
      <div
        style={{
          backgroundImage: `url(${aboutPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px',
          // marginTop: '30px'
        }}
        className="flex justify-center"
      >
        {/* title tag */}
        <div className="bg-black opacity-70 w-full h-full flex flex-col justify-center items-center">
          <h1
            style={{ fontFamily: 'Mooli, sans-serif' }}
            className="text-3xl text-white font-semibold "
          >
            Choose Your Packages
          </h1>
          <img src="../../../../public/icons/hr.svg" alt="" />
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center mt-10 gap-5">
        <button
          className={`tab-button ${activeTab === 1 ? 'active' : ''} border border-yellow-500 bg-transparent text-yellow-500
                        hover:border-white hover:text-white 
       font-bold px-3 py-1 rounded-md `}
          onClick={() => handleTabChange(1)}>platter by person
        </button>
        <button
          className={`tab-button ${activeTab === 2 ? 'active' : ''} border border-yellow-500 bg-transparent text-yellow-500
                        hover:border-white hover:text-white 
       font-bold px-3 py-1 rounded-md `}
          onClick={() => handleTabChange(2)}>platter by Occasion
        </button>
      </div>


      {/* Slider section */}
      {activeTab === 1 && (
        <div className="slider1 text-yellow-500 mt-10  sm: ms-6 sm: me-6 lg:ms-10 lg:me-10 ">
              {/* per person platter section  */}
              <div className="w-full h-full flex flex-col justify-center items-center my-10">
                <h1
                  style={{ fontFamily: 'Mooli, sans-serif' }}
                  className="text-3xl text-white font-semibold ">Per Person Platter </h1>
                <img src="../../../../public/icons/hr.svg" alt="" />
              </div>
          <Slider  {...sliderSettings}>
            <div className="text-center flex justify-center">

              <div className='grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5'>
                <div className='border rounded-xl border-yellow-500 py-3' style={{ textAlign: 'center' }}>
                  <h2 style={{ fontFamily: 'Mooli, sans-serif' }} className="text-2xl font-semibold">Package # 1</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr className='w-56 border border-yellow-500 my-2' />
                  </div>
                  <div className="mt-2">
                    <div className="overflow-x-auto">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr >
                            <th></th>
                            <th className='font-semibold text-white'>Item</th>
                            <th className='font-semibold text-white'>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr className='border border-yellow-500'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Blue</td>
                          </tr>
                          {/* row 2 */}
                          <tr className='border border-yellow-500'>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Purple</td>
                          </tr>
                          {/* row 3 */}
                          <tr className='border border-yellow-500'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Red</td>
                          </tr>
                          {/* row 3 */}
                          <tr >
                            <th></th>
                            <td>Total: </td>
                            <td>$1000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button
                    className="hover:bg-[#FFD700] hover:text-black bg-[#FFD700] text-[#808080] border-black font-bold px-3 py-1 rounded-md">
                    Book Now
                  </button>
                </div>
                <div className='border rounded-xl border-yellow-500 py-3' style={{ textAlign: 'center' }}>
                  <h2 style={{ fontFamily: 'Mooli, sans-serif' }} className="text-2xl font-semibold">Package # 2</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr className='w-56 border border-yellow-500 my-2' />
                  </div>
                  <div className="mt-2">
                    <div className="overflow-x-auto">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr >
                            <th></th>
                            <th className='font-semibold text-white'>Item</th>
                            <th className='font-semibold text-white'>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr className='border border-yellow-500'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Blue</td>
                          </tr>
                          {/* row 2 */}
                          <tr className='border border-yellow-500'>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Purple</td>
                          </tr>
                          {/* row 3 */}
                          <tr className='border border-yellow-500'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Red</td>
                          </tr>
                          {/* row 3 */}
                          <tr >
                            <th></th>
                            <td>Total: </td>
                            <td>$1000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button
                    className="hover:bg-[#FFD700] hover:text-black bg-[#FFD700] text-[#808080] border-black font-bold px-3 py-1 rounded-md">
                    Book Now
                  </button>
                </div>


              </div>
            </div>
            <div className="text-center flex justify-center">
              <div className='grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5'>
                <div className='border rounded-xl border-yellow-500 py-3' style={{ textAlign: 'center' }}>
                  <h2 style={{ fontFamily: 'Mooli, sans-serif' }} className="text-2xl font-semibold">Package # 3</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr className='w-56 border border-yellow-500 my-2' />
                  </div>
                  <div className="mt-2">
                    <div className="overflow-x-auto">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr >
                            <th></th>
                            <th className='font-semibold text-white'>Item</th>
                            <th className='font-semibold text-white'>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr className='border border-yellow-500'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Blue</td>
                          </tr>
                          {/* row 2 */}
                          <tr className='border border-yellow-500'>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Purple</td>
                          </tr>
                          {/* row 3 */}
                          <tr className='border border-yellow-500'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Red</td>
                          </tr>
                          {/* row 3 */}
                          <tr >
                            <th></th>
                            <td>Total: </td>
                            <td>$1000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button
                    className="hover:bg-[#FFD700] hover:text-black bg-[#FFD700] text-[#808080] border-black font-bold px-3 py-1 rounded-md">
                    Book Now
                  </button>
                </div>
                <div className='border rounded-xl border-yellow-500 py-3' style={{ textAlign: 'center' }}>
                  <h2 style={{ fontFamily: 'Mooli, sans-serif' }} className="text-2xl font-semibold">Package # 4</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr className='w-56 border border-yellow-500 my-2' />
                  </div>
                  <div className="mt-2">
                    <div className="overflow-x-auto">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr >
                            <th></th>
                            <th className='font-semibold text-white'>Item</th>
                            <th className='font-semibold text-white'>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr className='border border-yellow-500'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Blue</td>
                          </tr>
                          {/* row 2 */}
                          <tr className='border border-yellow-500'>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Purple</td>
                          </tr>
                          {/* row 3 */}
                          <tr className='border border-yellow-500'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Red</td>
                          </tr>
                          {/* row 3 */}
                          <tr >
                            <th></th>
                            <td>Total: </td>
                            <td>$1000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button
                    className="hover:bg-[#FFD700] hover:text-black bg-[#FFD700] text-[#808080] border-black font-bold px-3 py-1 rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center flex justify-center">
              <div className='grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5'>
                <div className='border rounded-xl border-yellow-500 py-3' style={{ textAlign: 'center' }}>
                  <h2 style={{ fontFamily: 'Mooli, sans-serif' }} className="text-2xl font-semibold">Package # 5</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr className='w-56 border border-yellow-500 my-2' />
                  </div>
                  <div className="mt-2">
                    <div className="overflow-x-auto">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr >
                            <th></th>
                            <th className='font-semibold text-white'>Item</th>
                            <th className='font-semibold text-white'>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr className='border border-yellow-500'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Blue</td>
                          </tr>
                          {/* row 2 */}
                          <tr className='border border-yellow-500'>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Purple</td>
                          </tr>
                          {/* row 3 */}
                          <tr className='border border-yellow-500'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Red</td>
                          </tr>
                          {/* row 3 */}
                          <tr >
                            <th></th>
                            <td>Total: </td>
                            <td>$1000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button
                    className="hover:bg-[#FFD700] hover:text-black bg-[#FFD700] text-[#808080] border-black font-bold px-3 py-1 rounded-md">
                    Book Now
                  </button>
                </div>
                <div className='border rounded-xl border-yellow-500 py-3' style={{ textAlign: 'center' }}>
                  <h2 style={{ fontFamily: 'Mooli, sans-serif' }} className="text-2xl font-semibold">Package # 6</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr className='w-56 border border-yellow-500 my-2' />
                  </div>
                  <div className="mt-2">
                    <div className="overflow-x-auto">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr >
                            <th></th>
                            <th className='font-semibold text-white'>Item</th>
                            <th className='font-semibold text-white'>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr className='border border-yellow-500'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Blue</td>
                          </tr>
                          {/* row 2 */}
                          <tr className='border border-yellow-500'>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Purple</td>
                          </tr>
                          {/* row 3 */}
                          <tr className='border border-yellow-500'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Red</td>
                          </tr>
                          {/* row 3 */}
                          <tr >
                            <th></th>
                            <td>Total: </td>
                            <td>$1000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button
                    className="hover:bg-[#FFD700] hover:text-black bg-[#FFD700] text-[#808080] border-black font-bold px-3 py-1 rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Add more slider items as needed */}
          </Slider>
          {/* </Slider> */}
        </div>
      )}

      {activeTab === 2 && (
        <div className="slider1 text-yellow-500 mt-10  sm: ms-6 sm: me-6 lg:ms-10 lg:me-10 ">
              {/* Occasion platter section  */}
              <div className="w-full h-full flex flex-col justify-center items-center my-10">
                <h1
                  style={{ fontFamily: 'Mooli, sans-serif' }}
                  className="text-3xl text-white font-semibold ">Occasion Platter </h1>
                <img src="../../../../public/icons/hr.svg" alt="" />
              </div>
          <Slider  {...sliderSettings}>
            <div className="text-center flex justify-center">

              <div className='grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5'>
                <div className='border rounded-xl border-yellow-500 py-3' style={{ textAlign: 'center' }}>
                  <h2 style={{ fontFamily: 'Mooli, sans-serif' }} className="text-2xl font-semibold">Package # 1</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr className='w-56 border border-yellow-500 my-2' />
                  </div>
                  <div className="mt-2">
                    <div className="overflow-x-auto">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr >
                            <th></th>
                            <th className='font-semibold text-white'>Item</th>
                            <th className='font-semibold text-white'>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr className='border border-yellow-500'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Blue</td>
                          </tr>
                          {/* row 2 */}
                          <tr className='border border-yellow-500'>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Purple</td>
                          </tr>
                          {/* row 3 */}
                          <tr className='border border-yellow-500'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Red</td>
                          </tr>
                          {/* row 3 */}
                          <tr >
                            <th></th>
                            <td>Total: </td>
                            <td>$1000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button
                    className="hover:bg-[#FFD700] hover:text-black bg-[#FFD700] text-[#808080] border-black font-bold px-3 py-1 rounded-md">
                    Book Now
                  </button>
                </div>
                <div className='border rounded-xl border-yellow-500 py-3' style={{ textAlign: 'center' }}>
                  <h2 style={{ fontFamily: 'Mooli, sans-serif' }} className="text-2xl font-semibold">Package # 2</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr className='w-56 border border-yellow-500 my-2' />
                  </div>
                  <div className="mt-2">
                    <div className="overflow-x-auto">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr >
                            <th></th>
                            <th className='font-semibold text-white'>Item</th>
                            <th className='font-semibold text-white'>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr className='border border-yellow-500'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Blue</td>
                          </tr>
                          {/* row 2 */}
                          <tr className='border border-yellow-500'>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Purple</td>
                          </tr>
                          {/* row 3 */}
                          <tr className='border border-yellow-500'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Red</td>
                          </tr>
                          {/* row 3 */}
                          <tr >
                            <th></th>
                            <td>Total: </td>
                            <td>$1000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button
                    className="hover:bg-[#FFD700] hover:text-black bg-[#FFD700] text-[#808080] border-black font-bold px-3 py-1 rounded-md">
                    Book Now
                  </button>
                </div>


              </div>
            </div>
            <div className="text-center flex justify-center">
              <div className='grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5'>
                <div className='border rounded-xl border-yellow-500 py-3' style={{ textAlign: 'center' }}>
                  <h2 style={{ fontFamily: 'Mooli, sans-serif' }} className="text-2xl font-semibold">Package # 3</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr className='w-56 border border-yellow-500 my-2' />
                  </div>
                  <div className="mt-2">
                    <div className="overflow-x-auto">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr >
                            <th></th>
                            <th className='font-semibold text-white'>Item</th>
                            <th className='font-semibold text-white'>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr className='border border-yellow-500'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Blue</td>
                          </tr>
                          {/* row 2 */}
                          <tr className='border border-yellow-500'>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Purple</td>
                          </tr>
                          {/* row 3 */}
                          <tr className='border border-yellow-500'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Red</td>
                          </tr>
                          {/* row 3 */}
                          <tr >
                            <th></th>
                            <td>Total: </td>
                            <td>$1000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button
                    className="hover:bg-[#FFD700] hover:text-black bg-[#FFD700] text-[#808080] border-black font-bold px-3 py-1 rounded-md">
                    Book Now
                  </button>
                </div>
                <div className='border rounded-xl border-yellow-500 py-3' style={{ textAlign: 'center' }}>
                  <h2 style={{ fontFamily: 'Mooli, sans-serif' }} className="text-2xl font-semibold">Package # 4</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr className='w-56 border border-yellow-500 my-2' />
                  </div>
                  <div className="mt-2">
                    <div className="overflow-x-auto">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr >
                            <th></th>
                            <th className='font-semibold text-white'>Item</th>
                            <th className='font-semibold text-white'>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr className='border border-yellow-500'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Blue</td>
                          </tr>
                          {/* row 2 */}
                          <tr className='border border-yellow-500'>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Purple</td>
                          </tr>
                          {/* row 3 */}
                          <tr className='border border-yellow-500'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Red</td>
                          </tr>
                          {/* row 3 */}
                          <tr >
                            <th></th>
                            <td>Total: </td>
                            <td>$1000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button
                    className="hover:bg-[#FFD700] hover:text-black bg-[#FFD700] text-[#808080] border-black font-bold px-3 py-1 rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center flex justify-center">
              <div className='grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5'>
                <div className='border rounded-xl border-yellow-500 py-3' style={{ textAlign: 'center' }}>
                  <h2 style={{ fontFamily: 'Mooli, sans-serif' }} className="text-2xl font-semibold">Package # 5</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr className='w-56 border border-yellow-500 my-2' />
                  </div>
                  <div className="mt-2">
                    <div className="overflow-x-auto">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr >
                            <th></th>
                            <th className='font-semibold text-white'>Item</th>
                            <th className='font-semibold text-white'>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr className='border border-yellow-500'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Blue</td>
                          </tr>
                          {/* row 2 */}
                          <tr className='border border-yellow-500'>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Purple</td>
                          </tr>
                          {/* row 3 */}
                          <tr className='border border-yellow-500'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Red</td>
                          </tr>
                          {/* row 3 */}
                          <tr >
                            <th></th>
                            <td>Total: </td>
                            <td>$1000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button
                    className="hover:bg-[#FFD700] hover:text-black bg-[#FFD700] text-[#808080] border-black font-bold px-3 py-1 rounded-md">
                    Book Now
                  </button>
                </div>
                <div className='border rounded-xl border-yellow-500 py-3' style={{ textAlign: 'center' }}>
                  <h2 style={{ fontFamily: 'Mooli, sans-serif' }} className="text-2xl font-semibold">Package # 6</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr className='w-56 border border-yellow-500 my-2' />
                  </div>
                  <div className="mt-2">
                    <div className="overflow-x-auto">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr >
                            <th></th>
                            <th className='font-semibold text-white'>Item</th>
                            <th className='font-semibold text-white'>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr className='border border-yellow-500'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Blue</td>
                          </tr>
                          {/* row 2 */}
                          <tr className='border border-yellow-500'>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Purple</td>
                          </tr>
                          {/* row 3 */}
                          <tr className='border border-yellow-500'>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Red</td>
                          </tr>
                          {/* row 3 */}
                          <tr >
                            <th></th>
                            <td>Total: </td>
                            <td>$1000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button
                    className="hover:bg-[#FFD700] hover:text-black bg-[#FFD700] text-[#808080] border-black font-bold px-3 py-1 rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Add more slider items as needed */}
          </Slider>
          {/* </Slider> */}
        </div>
      )}

    </div>
  );
};

export default PlatteringService;
