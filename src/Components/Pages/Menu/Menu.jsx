// import menuBanner from '../../../../public/images/MenuCompoBanner (1).jpg'
import menuPhoto1 from '../../../../public/images/Tandoori-Chicken.jpg'
import menuPhoto2 from '../../../../public/images/Lobster-Chowder.jpeg'
import menuPhoto3 from '../../../../public/images/kimchi-fried-rice-recipe.jpg'
import menuPhoto4 from '../../../../public/images/Kung-Pao-Chicken (1).jpg'
import menuPhoto5 from '../../../../public/images/Fish-Tacos (1).jpg'
import menuPhoto6 from '../../../../public/images/Bibimbap (1).jpg'
import menuPhoto7 from '../../../../public/images/Rasta_Pasta.jpeg'
import menuPhoto8 from '../../../../public/images/Ratatouille (1).jpg'
import menuPhoto9 from '../../../../public/images/beef-wellington (1).jpg'
import aboutPhoto from '../../../../public/images/contactUs.jpg';
import icon1 from '../../../../public/icons/start-filled.svg'
import icon2 from '../../../../public/icons/star-grey.svg'
import {  BsFillCartPlusFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Menu = () => {

    const handleOrderNowClick = () => {
        toast.success('Order Added to Order Tracking!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <div className="">

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
                        Our Menu
                    </h1>
                    <img src="../../../../public/icons/hr.svg" alt="" />
                </div>
            </div>
            {/* information section */}
            <div className='max-w-screen-xl mx-auto mt-20 sm: ms-2 sm: me-2 lg:ms-0 lg:me-0'>
                <div className='mb-5 flex justify-center'>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 ">

                        {/* food items 1 */}
                        <div className='flex items-center gap-5'>
                            <div><img className='w-64 h-40 rounded-xl' src={menuPhoto1} alt="" /></div>
                            <div>
                                <div>
                                    <div>
                                        <h1 className=' text-xl text-yellow-500 font-semibold uppercase mt-5'>TandooriChicken</h1>
                                        <h2 className='text-[#808080] font-semibold'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Iusto, vitae?</h2>
                                        <div className='lg:flex md:flex justify-between sm:block mt-5'>
                                            <div>
                                                <div className='flex'>
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon2} alt="" /> <br />
                                                </div>
                                                <p className='text-yellow-500 text-2xl font-mono font-bold'>$30.00</p>
                                            </div>
                                            <div className='flex items-center gap-5 -mt-3'>
                                                <button onClick={handleOrderNowClick}
                                                    className="hover:bg-[#FFD700] hover:text-black
                             bg-[#FFD700]  text-[#808080] border-black font-bold px-2  py-1 
                             rounded-md mt-3 flex items-center gap-2">
                                                    <span> Add to Cart </span><span> <BsFillCartPlusFill />  </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className=' lg:hidden md:visible sm:visible border-yellow-500 ' />
                        {/* food items 2 */}
                        <div className='flex items-center gap-5'>
                            <div><img className='w-64 h-40 rounded-xl' src={menuPhoto2} alt="" /></div>
                            <div>
                                <div>
                                    <div>
                                        <h1 className=' text-xl text-yellow-500 font-semibold uppercase mt-5'>Lobster Chowder</h1>
                                        <h2 className='text-[#808080] font-semibold'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Iusto, vitae?</h2>
                                        <div className='lg:flex md:flex justify-between sm:block mt-5'>
                                            <div>
                                                <div className='flex'>
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon2} alt="" /> <br />
                                                </div>
                                                <p className='text-yellow-500 text-2xl font-mono font-bold'>$30.00</p>
                                            </div>
                                            <div className='flex items-center gap-5 -mt-3'>
                                                <button onClick={handleOrderNowClick}
                                                    className="hover:bg-[#FFD700] hover:text-black
                             bg-[#FFD700]  text-[#808080] border-black font-bold px-2  py-1 
                             rounded-md mt-3 flex items-center gap-2">
                                                    <span> Add to Cart </span><span> <BsFillCartPlusFill />  </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <hr className='border-yellow-500 mb-10' />

                <div className='mb-5 flex justify-center'>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 ">
                        {/* food items 1 */}
                        <div className='flex items-center gap-5'>
                            <div><img className='w-64 h-40 rounded-xl' src={menuPhoto3} alt="" /></div>
                            <div>
                                <div>
                                    <div>
                                        <h1 className=' text-xl text-yellow-500 font-semibold uppercase mt-5'>TandooriChicken</h1>
                                        <h2 className='text-[#808080] font-semibold'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Iusto, vitae?</h2>
                                        <div className='lg:flex md:flex justify-between sm:block mt-5'>
                                            <div>
                                                <div className='flex'>
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon2} alt="" /> <br />
                                                </div>
                                                <p className='text-yellow-500 text-2xl font-mono font-bold'>$30.00</p>
                                            </div>
                                            <div className='flex items-center gap-5 -mt-3'>
                                                <button onClick={handleOrderNowClick}
                                                    className="hover:bg-[#FFD700] hover:text-black
                             bg-[#FFD700]  text-[#808080] border-black font-bold px-2  py-1 
                             rounded-md mt-3 flex items-center gap-2">
                                                    <span> Add to Cart </span><span> <BsFillCartPlusFill />  </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className=' lg:hidden md:visible sm:visible border-yellow-500' />
                        {/* food items 2 */}
                        <div className='flex items-center gap-5'>
                            <div><img className='w-64 h-40 rounded-xl' src={menuPhoto4} alt="" /></div>
                            <div>
                                <div>
                                    <div>
                                        <h1 className=' text-xl text-yellow-500 font-semibold uppercase mt-5'>Lobster Chowder</h1>
                                        <h2 className='text-[#808080] font-semibold'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Iusto, vitae?</h2>
                                        <div className='lg:flex md:flex justify-between sm:block mt-5'>
                                            <div>
                                                <div className='flex'>
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon2} alt="" /> <br />
                                                </div>
                                                <p className='text-yellow-500 text-2xl font-mono font-bold'>$30.00</p>
                                            </div>
                                            <div className='flex items-center gap-5 -mt-3'>
                                                <button onClick={handleOrderNowClick}
                                                    className="hover:bg-[#FFD700] hover:text-black
                             bg-[#FFD700]  text-[#808080] border-black font-bold px-2  py-1 
                             rounded-md mt-3 flex items-center gap-2">
                                                    <span> Add to Cart </span><span> <BsFillCartPlusFill />  </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-yellow-500 mb-10' />

                <div className='mb-5 flex justify-center'>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 ">
                        {/* food items 1 */}
                        <div className='flex items-center gap-5'>
                            <div><img className='w-64 h-40 rounded-xl' src={menuPhoto5} alt="" /></div>
                            <div>
                                <div>
                                    <div>
                                        <h1 className=' text-xl text-yellow-500 font-semibold uppercase mt-5'>TandooriChicken</h1>
                                        <h2 className='text-[#808080] font-semibold'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Iusto, vitae?</h2>
                                        <div className='lg:flex md:flex justify-between sm:block mt-5'>
                                            <div>
                                                <div className='flex'>
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon2} alt="" /> <br />
                                                </div>
                                                <p className='text-yellow-500 text-2xl font-mono font-bold'>$30.00</p>
                                            </div>
                                            <div className='flex items-center gap-5 -mt-3'>
                                                <button onClick={handleOrderNowClick}
                                                    className="hover:bg-[#FFD700] hover:text-black
                             bg-[#FFD700]  text-[#808080] border-black font-bold px-2  py-1 
                             rounded-md mt-3 flex items-center gap-2">
                                                    <span> Add to Cart </span><span> <BsFillCartPlusFill />  </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className=' lg:hidden md:visible sm:visible border-yellow-500 ' />
                        {/* food items 2 */}
                        <div className='flex items-center gap-5'>
                            <div><img className='w-64 h-40 rounded-xl' src={menuPhoto6} alt="" /></div>
                            <div>
                                <div>
                                    <div>
                                        <h1 className=' text-xl text-yellow-500 font-semibold uppercase mt-5'>Lobster Chowder</h1>
                                        <h2 className='text-[#808080] font-semibold'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Iusto, vitae?</h2>
                                        <div className='lg:flex md:flex justify-between sm:block mt-5'>
                                            <div>
                                                <div className='flex'>
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon2} alt="" /> <br />
                                                </div>
                                                <p className='text-yellow-500 text-2xl font-mono font-bold'>$30.00</p>
                                            </div>
                                            <div className='flex items-center gap-5 -mt-3'>
                                                <button onClick={handleOrderNowClick}
                                                    className="hover:bg-[#FFD700] hover:text-black
                             bg-[#FFD700]  text-[#808080] border-black font-bold px-2  py-1 
                             rounded-md mt-3 flex items-center gap-2">
                                                    <span> Add to Cart </span><span> <BsFillCartPlusFill />  </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-yellow-500 mb-10' />

                <div className='mb-5 flex justify-center'>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 ">
                        {/* food items 1 */}
                        <div className='flex items-center gap-5'>
                            <div><img className='w-64 h-40 rounded-xl' src={menuPhoto7} alt="" /></div>
                            <div>
                                <div>
                                    <div>
                                        <h1 className=' text-xl text-yellow-500 font-semibold uppercase mt-5'>TandooriChicken</h1>
                                        <h2 className='text-[#808080] font-semibold'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Iusto, vitae?</h2>
                                        <div className='lg:flex md:flex justify-between sm:block mt-5'>
                                            <div>
                                                <div className='flex'>
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon2} alt="" /> <br />
                                                </div>
                                                <p className='text-yellow-500 text-2xl font-mono font-bold'>$30.00</p>
                                            </div>
                                            <div className='flex items-center gap-5 -mt-3'>
                                                <button onClick={handleOrderNowClick}
                                                    className="hover:bg-[#FFD700] hover:text-black
                             bg-[#FFD700]  text-[#808080] border-black font-bold px-2  py-1 
                             rounded-md mt-3 flex items-center gap-2">
                                                    <span> Add to Cart </span><span> <BsFillCartPlusFill />  </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className=' lg:hidden md:visible sm:visible border-yellow-500 ' />
                        {/* food items 2 */}
                        <div className='flex items-center gap-5'>
                            <div><img className='w-64 h-40 rounded-xl' src={menuPhoto2} alt="" /></div>
                            <div>
                                <div>
                                    <div>
                                        <h1 className=' text-xl text-yellow-500 font-semibold uppercase mt-5'>Lobster Chowder</h1>
                                        <h2 className='text-[#808080] font-semibold'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Iusto, vitae?</h2>
                                        <div className='lg:flex md:flex justify-between sm:block mt-5'>
                                            <div>
                                                <div className='flex'>
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon2} alt="" /> <br />
                                                </div>
                                                <p className='text-yellow-500 text-2xl font-mono font-bold'>$30.00</p>
                                            </div>
                                            <div className='flex items-center gap-5 -mt-3'>
                                                <button onClick={handleOrderNowClick}
                                                    className="hover:bg-[#FFD700] hover:text-black
                             bg-[#FFD700]  text-[#808080] border-black font-bold px-2  py-1 
                             rounded-md mt-3 flex items-center gap-2">
                                                    <span> Add to Cart </span><span> <BsFillCartPlusFill />  </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-yellow-500 mb-10' />

                <div className='mb-5 flex justify-center'>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 ">
                        {/* food items 1 */}
                        <div className='flex items-center gap-5'>
                            <div><img className='w-64 h-40 rounded-xl' src={menuPhoto8} alt="" /></div>
                            <div>
                                <div>
                                    <div>
                                        <h1 className=' text-xl text-yellow-500 font-semibold uppercase mt-5'>TandooriChicken</h1>
                                        <h2 className='text-[#808080] font-semibold'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Iusto, vitae?</h2>
                                        <div className='lg:flex md:flex justify-between sm:block mt-5'>
                                            <div>
                                                <div className='flex'>
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon2} alt="" /> <br />
                                                </div>
                                                <p className='text-yellow-500 text-2xl font-mono font-bold'>$30.00</p>
                                            </div>
                                            <div className='flex items-center gap-5 -mt-3'>
                                                <button onClick={handleOrderNowClick}
                                                    className="hover:bg-[#FFD700] hover:text-black
                             bg-[#FFD700]  text-[#808080] border-black font-bold px-2  py-1 
                             rounded-md mt-3 flex items-center gap-2">
                                                    <span> Add to Cart </span><span> <BsFillCartPlusFill />  </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className=' lg:hidden md:visible sm:visible border-yellow-500 ' />
                        {/* food items 2 */}
                        <div className='flex items-center gap-5'>
                            <div><img className='w-64 h-40 rounded-xl' src={menuPhoto9} alt="" /></div>
                            <div>
                                <div>
                                    <div>
                                        <h1 className=' text-xl text-yellow-500 font-semibold uppercase mt-5'>Lobster Chowder</h1>
                                        <h2 className='text-[#808080] font-semibold'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Iusto, vitae?</h2>
                                        <div className='lg:flex md:flex justify-between sm:block mt-5'>
                                            <div>
                                                <div className='flex'>
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon1} alt="" />
                                                    <img src={icon2} alt="" /> <br />
                                                </div>
                                                <p className='text-yellow-500 text-2xl font-mono font-bold'>$30.00</p>
                                            </div>
                                            <div className='flex items-center gap-5 -mt-3'>
                                                <button onClick={handleOrderNowClick}
                                                    className="hover:bg-[#FFD700] hover:text-black
                             bg-[#FFD700]  text-[#808080] border-black font-bold px-2  py-1 
                             rounded-md mt-3 flex items-center gap-2">
                                                    <span> Add to Cart </span><span> <BsFillCartPlusFill />  </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className=' lg:hidden md:visible sm:visible border-yellow-500 mb-10' />

            </div>
            <div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default Menu;