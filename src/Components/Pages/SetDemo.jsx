import { useState } from "react";
import { Link } from "react-router-dom";



const SetDemo = () => {
    const [itmes, setItems] = useState([]);

    const handleOptionChange = (option) => {
        if (itmes.includes(option)) {
          setItems(itmes.filter((item) => item !== option));
        } else {
          setItems([...itmes, option]);
        }
      };

// default system 

    return (
        <div className="max-w-screen-xl mx-auto">
            {/* title section  */}
            <div className="flex justify-center mt-16">
                {/* tittle tag */}
                <div>
                    <h1 style={{ fontFamily: 'Mooli, sans-serif' }} className="flex justify-center text-3xl text-white font-semibold">Set Demo</h1>
                    <img src="../../../../public/icons/hr.svg" alt="" />
                </div>
            </div>

            {/*------------------------- information section ------------------------ */}
<div className=" flex justify-center sm: ms-2 sm: me-2 lg:ms-0 lg:me-0 mt-10">


            <div className="mt-5 text-white grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 lg:gap-20">

{/* grid section------1  */}
<div>
                {/* item-1 -------------------------- */}
                <div className="form-control">
                <label
              className={`label cursor-pointer flex ${
                itmes.includes('Chicken Parmesan1') ? 'checked:bg-yellow-500' : ''
              }`}
              onClick={() => handleOptionChange('Chicken Parmesan1')}
            >
                        {/* <input type="radio" name="radio-10" className="radio radio-warning mb-3" /> */}
                        <input type="checkbox" name="radio-10" className="radio radio-warning mb-3" />
                        <div className="flex items-start ms-3 gap-5 font-semibold">
                        <div>
                            <h1 className="label-text text-lg text-[#FFD700]">Chicken Parmesan1 <span> --------------</span></h1>
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
                <div className="form-control">
                    <label
              className={`label cursor-pointer flex  ${
                itmes.includes('Dan Dan Noodles') ? 'checked:yellow-500' : ''
              }`}
              onClick={() => handleOptionChange('Dan Dan Noodles')}
            >
                        <input type="checkbox" name="radio-10" className="radio radio-warning mb-3" />
                        <div className="flex items-start ms-3 gap-5 font-semibold">
                            <div>
                            <h1 className="label-text text-lg text-[#FFD700]">Dan Dan Noodles <span> --------------</span></h1>
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
                <div className="form-control">
                    <label
              className={`label cursor-pointer flex ${
                itmes.includes('Chicken Parmesan2') ? 'checked:yellow-500' : ''
              }`}
              onClick={() => handleOptionChange('Chicken Parmesan2')}
            >
                        <input type="checkbox" name="radio-10" className="radio radio-warning mb-3" />
                        <div className="flex items-start ms-3 gap-5 font-semibold">
                            <div>
                            <h1 className="label-text text-lg text-[#FFD700]">Chicken Parmesan2 <span> --------------</span></h1>
                            <p className="">Maxican</p>
                            </div>
                            <div>
                                <p className="text-[#FFD700]">$10.00</p>
                            </div>
                        </div>
                    </label>
                </div>
                <br />
                {/* item-4 -------------------------- */}
                {/* <div className="form-control">
                    <label className="flex ">
                        <input type="radio" name="radio-6" className="radio radio-warning mb-3" checked />
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
                </div> */}
                <br />
                {/* item-5 -------------------------- */}
                {/* <div className="form-control">
                    <label className="flex ">
                        <input type="radio" name="radio-6" className="radio radio-warning mb-3" checked />
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
                </div> */}
                <br />
</div>
{/* grid section------2  */}
<div>
                {/* item-6 -------------------------- */}
                {/* <div className="form-control">
                    <label className="flex ">
                        <input type="radio" name="radio-6" className="radio radio-warning mb-3" checked />
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
                </div> */}
                <br />
                {/* item-7 -------------------------- */}
                {/* <div className="form-control">
                    <label className="flex ">
                        <input type="radio" name="radio-6" className="radio radio-warning mb-3" checked />
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
                </div> */}
                <br />
                {/* item-8 -------------------------- */}
                {/* <div className="form-control">
                    <label className="flex ">
                        <input type="radio" name="radio-6" className="radio radio-warning mb-3" checked />
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
                </div> */}
                <br />
                {/* item-9 -------------------------- */}
                {/* <div className="form-control">
                    <label className="flex ">
                        <input type="radio" name="radio-6" className="radio radio-warning mb-3" checked />
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
                </div> */}
                <br />
                {/* item-10 -------------------------- */}
                {/* <div className="form-control">
                    <label className="flex ">
                        <input type="radio" name="radio-6" className="radio radio-warning mb-3" checked />
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
                </div> */}
                <br />
</div>
</div>
</div>
<div className="flex justify-center">
<Link to="/wishlist"><button className=" mt-3 hover:bg-[#FFD700]  hover:text-black bg-[#FFD700]  text-[#808080] border-black font-bold px-3 py-1 rounded-md">Add to Wishlist</button></Link>
</div>
        </div>
    );
};

export default SetDemo;