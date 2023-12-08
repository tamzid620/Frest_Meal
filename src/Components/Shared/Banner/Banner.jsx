import { Link } from 'react-router-dom';
import banner from '../../../../public/images/banner.png'


const Banner = () => {


    return (
        <div style={{ backgroundImage: `url(${banner})` }}
    className=" gap-10 text-lg font-semibold pt-[100px]" >
            <div className='max-w-screen-xl mx-auto flex items-center justify-center py-20'>
                {/* banner heading paragraph-------------- */}
                <div className=" sm: ms-2 sm:me-2 lg:ms-0 lg:me-0">
                    <div className="flex items-center mb-4">
                        <div className="grid sm:grid-cols-2 text-white">
                            <span className=" sm: mb-3 text-white flex items-center"> Welcome to</span><img className=" me-2 w-[100px]" src="../../../../public/icons/logo-svg.png "alt="" />
                        </div>
                        {/* // <img src="./icons/logo-svg.png" alt="" /> */}
                    </div>
                    <div>
                        <h1 style={{ fontFamily: 'Mooli, sans-serif' }} className="text-white text-4xl mb-5 font-bold font">The World Best <span className="text-[#FFD700]">Restaurent</span> Website </h1>
                        <p className='text-white'> When I got to know about freelancing, I felt excited about it and started <br /> to collect information about fiver and upwork portal. I found a lot of <br /> interesting thing that would make me satisfied that if I could create <br /> some skils, than i would make a lot of money</p>
                    </div>
                    <div>
                        <Link to="/menu">
                        <button className="btn bg-[#FFD700] mt-5 text-[#808080] border-black font-bold">Order Now</button>
                        </Link>
                    </div>
                </div>
                {/* banner image----- */}
                <div className="hidden sm:block">
                    <div className="">
                        <img src="./images/straw.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;