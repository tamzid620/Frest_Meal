import menuPhoto1 from "../../../../public/images/Tandoori-Chicken.jpg";
import aboutPhoto from "../../../../public/images/contactUs.jpg";
import icon1 from "../../../../public/icons/start-filled.svg";
import icon2 from "../../../../public/icons/star-grey.svg";
import { BsFillCartPlusFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Rating from 'react-rating';


const Menu = () => {

const [menus, setMenus] =useState([])

useEffect(()=> {
    axios.get('https://backend.ap.loclx.io/api/food-item-list')
    .then(res => {
        setMenus(res.data.foodItem);
      })
      .catch(error => {
        console.error("Error fetching menu data:", error);
      });
},[])
console.log(menus);

  const handleOrderNowClick = () => {
    toast.success("Order Added to Order Tracking!", {
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          // marginTop: '30px'
        }}
        className="flex justify-center"
      >
        {/* title tag */}
        <div className="bg-black opacity-70 w-full h-full flex flex-col justify-center items-center">
          <h1
            style={{ fontFamily: "Mooli, sans-serif" }}
            className="text-3xl text-white font-semibold "
          >
            Our Menu
          </h1>
          <img src="../../../../public/icons/hr.svg" alt="" />
        </div>
      </div>
      {/* information section */}
      <div className="max-w-screen-xl mx-auto mt-20 sm: ms-2 sm: me-2 lg:ms-0 lg:me-0">
        <div className="mb-5 flex justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 ">

          <div className="flex items-center gap-5">
              <div>
                <img className="w-64 h-40 rounded-xl" src={menuPhoto1} alt="" />
              </div>
              <div>
                <div>
                  <div>
                    <h1 className=" text-xl text-yellow-500 font-semibold uppercase mt-5">
                      TandooriChicken
                    </h1>
                    <h2 className="text-[#808080] font-semibold">
                      Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                      elit. Iusto, vitae?
                    </h2>
                    <div className="lg:flex md:block sm:block justify-between mt-5">
                      <div>
                        <div className="flex">
                          <img src={icon1} alt="" />
                          <img src={icon1} alt="" />
                          <img src={icon1} alt="" />
                          <img src={icon1} alt="" />
                          <img src={icon2} alt="" /> <br />
                        </div>
                        <p className="text-yellow-500 text-2xl font-mono font-bold">
                          $30.00
                        </p>
                      </div>
                      <div className="flex items-center gap-5 -mt-3">
                        <button
                          onClick={handleOrderNowClick}
                          className="hover:bg-[#FFD700] hover:text-black
                             bg-[#FFD700]  text-[#808080] border-black font-bold px-2  py-1 
                             rounded-md mt-3 flex items-center gap-2"
                        >
                          <span> Add to Cart </span>
                          <span>
                            {" "}
                            <BsFillCartPlusFill />{" "}
                          </span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <hr className=" lg:hidden md:visible sm:visible border-yellow-500 " />

            {
            menus.map(menuItem => (
              <div key={menuItem.id} className="flex items-center gap-5">
                <div>
                  <img className="w-52 h-40 rounded-xl" src={menuItem.imgLink} alt={menuItem.foodName} />
                </div>
                <div>
                  <div>
                    <h1 className="text-xl text-yellow-500 font-semibold uppercase mt-5">
                      {menuItem.foodName}
                    </h1>
                    <h2 className="text-[#808080] font-semibold">
                      {menuItem.description}
                    </h2>
                    <div className="lg:flex md:block sm:block justify-between mt-5">
                      <div>
                        <div className="flex">
                        <Rating
                            emptySymbol={<img src={icon2} alt="empty star" className="icon" />}
                            fullSymbol={<img src={icon1} alt="filled star" className="icon" />}
                            fractions={2}
                            initialRating={menuItem.rating}
                            readonly
                          />
                        </div>
                        <p className="text-yellow-500 text-2xl font-mono font-bold">
                          ${menuItem.price}
                        </p>
                      </div>
                      <div className="flex items-center gap-5 -mt-3 lg:ms-10 ">
                        <button
                          onClick={handleOrderNowClick}
                          className="hover:bg-[#FFD700] hover:text-black
                             bg-[#FFD700]  text-[#808080] border-black font-bold px-2  py-1 
                             rounded-md mt-3 flex items-center gap-2"
                        >
                          <span> Add to Cart </span>
                          <span>
                            {" "}
                            <BsFillCartPlusFill />{" "}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
        }
           
          </div>
        </div>
        <hr className="border-yellow-500 mb-10" />




      </div>
      <div></div>
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
