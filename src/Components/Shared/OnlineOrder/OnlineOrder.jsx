import icon1 from "../../../../public/icons/start-filled.svg";
import icon2 from "../../../../public/icons/star-grey.svg";
import { BsFillCartPlusFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "react-rating";
import bgBanner2 from "../../../../public/images/bg-banner2.jpg";

const OnlineOrder = () => {
  Aos.init();
  const [onlineOrders, setOnlineOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend.ap.loclx.io/api/food-item-list")
      .then((res) => {
        setOnlineOrders(res.data.foodItem);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
      });
  }, []);

  // Filter and categorize the food items---------------------
  const drinks = onlineOrders.filter(
    (onlineOrder) => onlineOrder.categoryId === "Drinks"
  );
  const meals = onlineOrders.filter(
    (onlineOrder) => onlineOrder.categoryId === "Meals"
  );
  const dessert = onlineOrders.filter(
    (onlineOrder) => onlineOrder.categoryId === "Dessert"
  );
  const snacks = onlineOrders.filter(
    (onlineOrder) => onlineOrder.categoryId === "Snacks"
  );

  const handleOrderNowClick = () => {
    toast.success("Item added to Cart!", {
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
    <div
      style={{
        backgroundImage: `url(${bgBanner2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* title section  */}
      <div className="flex justify-center mt-16 pt-10 pb-10 ">
        <div
          data-aos="flip-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <h1
            style={{ fontFamily: "Mooli, sans-serif" }}
            className="flex justify-center text-3xl text-white font-semibold"
          >
            Online Order
          </h1>
          <img src="../../../../public/icons/hr.svg" alt="" />
        </div>
      </div>
      {/*------------------------- information section ------------------------ */}
      <div
        className="flex justify-center"
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div className="max-w-screen-lg mx-auto ">
          {/*---------------------row -1 ---------------- */}

          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {drinks.map((onlineOrder) => (
              <div
                key={onlineOrder.id}
                data-aos="flip-up"
                className={` rounded-xl border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 p-3 w-[280px] transition-transform transform hover:scale-105`}
              >
                <div>
                  <img
                    className="w-80 h-48 rounded-lg"
                    src={onlineOrder.imgLink}
                    alt=""
                  />
                  <div>
                    <h1 className=" text-xl text-white font-semibold uppercase mt-5">
                      {onlineOrder.foodName}
                    </h1>
                    <h2 className="text-[#808080] font-semibold">
                      {onlineOrder.description}
                    </h2>
                    <div className="flex mt-5">
                      <p className="text-yellow-500 text-2xl font-mono font-bold">
                        {onlineOrder.price}
                      </p>
                      {/* react rating section  */}
                      <div className="ms-[140px]">
                        <Rating
                          initialRating={onlineOrder.rating}
                          emptySymbol={
                            <img
                              src={icon2}
                              alt="empty star"
                              className="icon"
                            />
                          }
                          fullSymbol={
                            <img src={icon1} alt="full star" className="icon" />
                          }
                          fractions={2}
                          readonly
                        />
                      </div>
                    </div>
                    <button
                      onClick={handleOrderNowClick}
                      className=" flex items-center gap-2 border border-yellow-500 bg-transparent text-yellow-500
             hover:border-white hover:text-white 
font-bold px-3 py-3 mt-3 rounded-md "
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
            ))}
          </div>

          {/*---------------------row -2 ---------------- */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {meals.map((item) => (
              <div
                key={item.id}
                data-aos="flip-up"
                className=" rounded-xl border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 p-3 w-[280px] ms-5 me-5 transition-transform transform hover:scale-105"
              >
                <img
                  className="w-80 h-48 rounded-lg"
                  src={item.imgLink}
                  alt=""
                />
                <div>
                  <h1 className=" text-xl text-white font-semibold uppercase mt-5">
                    {item.foodName}
                  </h1>
                  <h2 className="text-[#808080] font-semibold">
                    {item.description}
                  </h2>
                  <div className="flex justify-between mt-5">
                    <p className="text-yellow-500 text-2xl font-mono font-bold">
                      {item.price}
                    </p>
                    <div className="flex">
                      <img src={icon1} alt="" />
                      <img src={icon1} alt="" />
                      <img src={icon1} alt="" />
                      <img src={icon1} alt="" />
                      <img src={icon2} alt="" />
                    </div>
                  </div>
                  <button
                    onClick={handleOrderNowClick}
                    className=" flex items-center gap-2 border border-yellow-500 bg-transparent text-yellow-500
             hover:border-white hover:text-white 
font-bold px-3 py-3 mt-3 rounded-md "
                  >
                    <span> Add to Cart </span>
                    <span>
                      {" "}
                      <BsFillCartPlusFill />{" "}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/*---------------------row -3 ---------------- */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {dessert.map((item) => (
              <div
                key={item.id}
                data-aos="flip-up"
                className=" rounded-xl border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 p-3 w-[280px] transition-transform transform hover:scale-105"
              >
                <img
                  className="w-80 h-48 rounded-lg"
                  src={item.imgLink}
                  alt=""
                />
                <div>
                  <h1 className=" text-xl text-white font-semibold uppercase mt-5">
                    {item.foodName}
                  </h1>
                  <h2 className="text-[#808080] font-semibold">
                    {item.description}
                  </h2>
                  <div className="flex justify-between mt-5">
                    <p className="text-yellow-500 text-2xl font-mono font-bold">
                      {item.price}
                    </p>
                    <div className="flex">
                      <img src={icon1} alt="" />
                      <img src={icon1} alt="" />
                      <img src={icon1} alt="" />
                      <img src={icon1} alt="" />
                      <img src={icon2} alt="" />
                    </div>
                  </div>
                  <button
                    onClick={handleOrderNowClick}
                    className=" flex items-center gap-2 border border-yellow-500 bg-transparent text-yellow-500
             hover:border-white hover:text-white 
font-bold px-3 py-3 mt-3 rounded-md "
                  >
                    <span> Add to Cart </span>
                    <span>
                      {" "}
                      <BsFillCartPlusFill />{" "}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/*---------------------row -4 ---------------- */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {snacks.map((item) => (
              <div
                key={item.id}
                data-aos="flip-up"
                className=" rounded-xl border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 p-3 w-[280px] transition-transform transform hover:scale-105"
              >
                <img
                  className="w-80 h-48 rounded-lg"
                  src={item.imgLink}
                  alt=""
                />
                <div>
                  <h1 className=" text-xl text-white font-semibold uppercase mt-5">
                    {item.foodName}
                  </h1>
                  <h2 className="text-[#808080] font-semibold">
                    {item.description}
                  </h2>
                  <div className="flex justify-between mt-5">
                    <p className="text-yellow-500 text-2xl font-mono font-bold">
                      {item.price}
                    </p>
                    <div className="flex">
                      <img src={icon1} alt="" />
                      <img src={icon1} alt="" />
                      <img src={icon1} alt="" />
                      <img src={icon1} alt="" />
                      <img src={icon2} alt="" />
                    </div>
                  </div>
                  <button
                    onClick={handleOrderNowClick}
                    className=" flex items-center gap-2 border border-yellow-500 bg-transparent text-yellow-500
             hover:border-white hover:text-white 
font-bold px-3 py-3 mt-3 rounded-md "
                  >
                    <span> Add to Cart </span>
                    <span>
                      {" "}
                      <BsFillCartPlusFill />{" "}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default OnlineOrder;
