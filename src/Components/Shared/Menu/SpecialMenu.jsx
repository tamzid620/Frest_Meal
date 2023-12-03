import {BsHeartFill } from "react-icons/bs";
import { toast } from "react-toastify";
import Aos from 'aos'
import 'aos/dist/aos.css'


const  SpecialMenu = () => {
    
    Aos.init();

    const handleWishlist = () => {
        toast.success('Item added to Wishlist!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    return (
        <div className="max-w-screen-xl mx-auto" data-aos="flip-right">
            {/* title section  */}
            <div className="flex justify-center mt-16">
                {/* tittle tag */}
                <div>
                    <h1 style={{ fontFamily: 'Mooli, sans-serif' }} className="flex justify-center text-3xl text-white font-semibold">Special Menu</h1>
                    <img src="../../../../public/icons/hr.svg" alt="" />
                </div>
            </div>

            {/*------------------------- information section ------------------------ */}
<div className=" flex justify-center sm: ms-2 sm: me-2 lg:ms-0 lg:me-0 mt-10">


            <div className="mt-5 text-white grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 lg:gap-20">

{/* grid section------1  */}
<div>
                {/* item-1 -------------------------- */}
                <div>
                    <label className="flex ">
                    <input type="checkbox" name="radio-10" className="radio radio-warning mb-3" />
                        <div className="flex items-start ms-3 gap-5 font-semibold">
                            <div>
                            <h1 className="text-lg text-[#FFD700]">Chicken Parmesan <span> --------------</span></h1>
                            <p className="">Maxican</p>
                            </div>
                            <div>
                                <p className="text-[#FFD700]">$10.00</p>
                            </div>
                        </div>
                    </label>
                </div>
                <br />
                {/* item-2 -------------------------- */}
                <div>
                    <label className="flex ">
                    <input type="checkbox" name="radio-10" className="radio radio-warning mb-3" />
                        <div className="flex items-start ms-3 gap-5 font-semibold">
                            <div>
                            <h1 className="text-lg text-[#FFD700]">Dan Dan Noodles <span> --------------</span></h1>
                            <p className="">Maxican</p>
                            </div>
                            <div>
                                <p className="text-[#FFD700]">$06.00</p>
                            </div>
                        </div>
                    </label>
                </div>
                <br />
                {/* item-3 -------------------------- */}
                <div>
                    <label className="flex ">
                    <input type="checkbox" name="radio-10" className="radio radio-warning mb-3" />
                        <div className="flex items-start ms-3 gap-5 font-semibold">
                            <div>
                            <h1 className="text-lg text-[#FFD700]">Chicken Parmesan <span> --------------</span></h1>
                            <p className="">Italian</p>
                            </div>
                            <div>
                                <p className="text-[#FFD700]">$10.00</p>
                            </div>
                        </div>
                    </label>
                </div>
                <br />
                {/* item-4 -------------------------- */}
                <div>
                    <label className="flex ">
                    <input type="checkbox" name="radio-10" className="radio radio-warning mb-3" />
                        <div className="flex items-start ms-3 gap-5 font-semibold">
                            <div>
                            <h1 className="text-lg text-[#FFD700]">Chicken Parmesan <span> --------------</span></h1>
                            <p className="">Maxican</p>
                            </div>
                            <div>
                                <p className="text-[#FFD700]">$10.00</p>
                            </div>
                        </div>
                    </label>
                </div>
                <br />
                {/* item-5 -------------------------- */}
                <div>
                    <label className="flex ">
                    <input type="checkbox" name="radio-10" className="radio radio-warning mb-3" />
                        <div className="flex items-start ms-3 gap-5 font-semibold">
                            <div>
                            <h1 className="text-lg text-[#FFD700]">Chicken Parmesan <span> --------------</span></h1>
                            <p className="">Maxican</p>
                            </div>
                            <div>
                                <p className="text-[#FFD700]">$10.00</p>
                            </div>
                        </div>
                    </label>
                </div>
                <br />
</div>
{/* grid section------2  */}
<div>
                {/* item-6 -------------------------- */}
                <div>
                    <label className="flex ">
                    <input type="checkbox" name="radio-10" className="radio radio-warning mb-3" />
                        <div className="flex items-start ms-3 gap-5 font-semibold">
                            <div>
                            <h1 className="text-lg text-[#FFD700]">Chicken Parmesan <span> --------------</span></h1>
                            <p className="">Maxican</p>
                            </div>
                            <div>
                                <p className="text-[#FFD700]">$10.00</p>
                            </div>
                        </div>
                    </label>
                </div>
                <br />
                {/* item-7 -------------------------- */}
                <div>
                    <label className="flex ">
                    <input type="checkbox" name="radio-10" className="radio radio-warning mb-3" />
                        <div className="flex items-start ms-3 gap-5 font-semibold">
                            <div>
                            <h1 className="text-lg text-[#FFD700]">Dan Dan Noodles <span> --------------</span></h1>
                            <p className="">Maxican</p>
                            </div>
                            <div>
                                <p className="text-[#FFD700]">$06.00</p>
                            </div>
                        </div>
                    </label>
                </div>
                <br />
                {/* item-8 -------------------------- */}
                <div>
                    <label className="flex ">
                    <input type="checkbox" name="radio-10" className="radio radio-warning mb-3" />
                        <div className="flex items-start ms-3 gap-5 font-semibold">
                            <div>
                            <h1 className="text-lg text-[#FFD700]">Chicken Parmesan <span> --------------</span></h1>
                            <p className="">Maxican</p>
                            </div>
                            <div>
                                <p className="text-[#FFD700]">$10.00</p>
                            </div>
                        </div>
                    </label>
                </div>
                <br />
                {/* item-9 -------------------------- */}
                <div>
                    <label className="flex ">
                    <input type="checkbox" name="radio-10" className="radio radio-warning mb-3" />
                        <div className="flex items-start ms-3 gap-5 font-semibold">
                            <div>
                            <h1 className="text-lg text-[#FFD700]">Chicken Parmesan <span> --------------</span></h1>
                            <p className="">Maxican</p>
                            </div>
                            <div>
                                <p className="text-[#FFD700]">$10.00</p>
                            </div>
                        </div>
                    </label>
                </div>
                <br />
                {/* item-10 -------------------------- */}
                <div>
                    <label className="flex ">
                    <input type="checkbox" name="radio-10" className="radio radio-warning mb-3" />
                        <div className="flex items-start ms-3 gap-5 font-semibold">
                            <div>
                            <h1 className="text-lg text-[#FFD700]">Chicken Parmesan <span> --------------</span></h1>
                            <p className="">Maxican</p>
                            </div>
                            <div>
                                <p className="text-[#FFD700]">$10.00</p>
                            </div>
                        </div>
                    </label>
                </div>
                <br />
</div>
</div>
</div>
<div className="flex justify-center">
    <button  onClick={handleWishlist} 
    className="flex items-center mt-3 hover:bg-[#FFD700] 
     hover:text-black bg-[#FFD700]  text-[#808080]
      border-black font-bold px-3 py-1 rounded-md">Add to Wishlist <span className="ms-1"><BsHeartFill/></span>
      </button>
</div>
        </div>
    );
};

export default SpecialMenu;