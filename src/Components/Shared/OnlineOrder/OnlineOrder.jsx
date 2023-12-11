import photo1 from "../../../../public/images/beef-wellington (1).jpg";
import photo2 from "../../../../public/images/Bibimbap (1).jpg";
import photo3 from "../../../../public/images/Fish-Tacos (1).jpg";
import photo4 from "../../../../public/images/kimchi-fried-rice-recipe.jpg";
import photo5 from "../../../../public/images/Kung-Pao-Chicken (1).jpg";
import photo6 from "../../../../public/images/Lobster-Chowder.jpeg";
import photo7 from "../../../../public/images/Rasta_Pasta.jpeg";
import photo8 from "../../../../public/images/Ratatouille (1).jpg";
import photo9 from "../../../../public/images/Tandoori-Chicken.jpg";
import icon1 from "../../../../public/icons/start-filled.svg";
import icon2 from "../../../../public/icons/star-grey.svg";
import { BsFillCartPlusFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";

const OnlineOrder = () => {
  Aos.init();
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
    <div>
      {/* title section  */}
      <div className="flex justify-center mt-16">
        <div data-aos="flip-down">
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
      <div className="flex justify-center" data-aos="zoom-in-up">
        <div className="max-w-screen-lg mx-auto ">
          {/*---------------------row -1 ---------------- */}

          <Slider className="mt-10 lg:ms-0 lg:me-0 md:ms-[150px] md:me-[150px] sm: ms-[350px] sm: me-[350px]" {...settings}>
          {/* <div className="mt-10 gap-1o grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> */}
            {/* food item -1 */}
            <div
              data-aos="flip-up"
              className=" rounded-xl border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 p-3 w-80 transition-transform transform hover:scale-105"
            >
              <img className="w-80 h-48 rounded-lg" src={photo9} alt="" />
              <div>
                <h1 className=" text-xl text-white font-semibold uppercase mt-5">
                  TandooriChicken
                </h1>
                <h2 className="text-[#808080] font-semibold">
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Iusto, vitae?
                </h2>
                <div className="flex mt-5">
                  <p className="text-yellow-500 text-2xl font-mono font-bold">
                    $30.00
                  </p>
                  <div className="flex ms-[140px]">
                    <img src={icon1} alt="" />
                    <img src={icon1} alt="" />
                    <img src={icon1} alt="" />
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                  </div>
                </div>
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

            {/* food item -2 */}
            <div
              data-aos="flip-up"
              className=" rounded-xl border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 p-3 w-80 transition-transform transform hover:scale-105"
            >
              <img className="w-80 h-48 rounded-lg" src={photo6} alt="" />
              <div>
                <h1 className=" text-xl text-white font-semibold uppercase mt-5">
                  Lobster Chowder
                </h1>
                <h2 className="text-[#808080] font-semibold">
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Iusto, vitae?
                </h2>
                <div className="flex justify-between mt-5">
                  <p className="text-yellow-500 text-2xl font-mono font-bold">
                    $23.70
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

            {/* food item -3 */}
            <div
              data-aos="flip-up"
              className=" rounded-xl  border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 p-3 w-80 transition-transform transform hover:scale-105"
            >
              <img className="w-80 h-48 rounded-lg" src={photo4} alt="" />
              <div>
                <h1 className=" text-xl text-white font-semibold uppercase mt-5">
                  kimchi fried rice
                </h1>
                <h2 className="text-[#808080] font-semibold">
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Iusto, vitae?
                </h2>
                <div className="flex justify-between mt-5">
                  <p className="text-yellow-500 text-2xl font-mono font-bold">
                    $10.00
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
            {/* food item -3 */}
            <div
              data-aos="flip-up"
              className=" rounded-xl  border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 p-3 w-80 transition-transform transform hover:scale-105"
            >
              <img className="w-80 h-48 rounded-lg" src={photo4} alt="" />
              <div>
                <h1 className=" text-xl text-white font-semibold uppercase mt-5">
                  kimchi fried rice
                </h1>
                <h2 className="text-[#808080] font-semibold">
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Iusto, vitae?
                </h2>
                <div className="flex justify-between mt-5">
                  <p className="text-yellow-500 text-2xl font-mono font-bold">
                    $10.00
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
          {/* </div> */}
            </Slider>

          {/*---------------------row -2 ---------------- */}
          <div className="mt-10 gap-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* food item -4 */}
            <div
              data-aos="flip-up"
              className=" rounded-xl border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 p-3 w-80 transition-transform transform hover:scale-105"
            >
              <img className="w-80 h-48 rounded-lg" src={photo5} alt="" />
              <div>
                <h1 className=" text-xl text-white font-semibold uppercase mt-5">
                  Kung Pao Chicken
                </h1>
                <h2 className="text-[#808080] font-semibold">
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Iusto, vitae?
                </h2>
                <div className="flex justify-between mt-5">
                  <p className="text-yellow-500 text-2xl font-mono font-bold">
                    $08.20
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

            {/* food item -5 */}
            <div
              data-aos="flip-up"
              className=" rounded-xl border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 p-3 w-80 transition-transform transform hover:scale-105"
            >
              <img className="w-80 h-48 rounded-lg" src={photo3} alt="" />
              <div>
                <h1 className=" text-xl text-white font-semibold uppercase mt-5">
                  Fish Tacos
                </h1>
                <h2 className="text-[#808080] font-semibold">
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Iusto, vitae?
                </h2>
                <div className="flex justify-between mt-5">
                  <p className="text-yellow-500 text-2xl font-mono font-bold">
                    $24.22
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

            {/* food item -6 */}
            <div
              data-aos="flip-up"
              className=" rounded-xl border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 p-3 w-80 transition-transform transform hover:scale-105"
            >
              <img className="w-80 h-48 rounded-lg" src={photo2} alt="" />
              <div>
                <h1 className=" text-xl text-white font-semibold uppercase mt-5">
                  Bibimbap
                </h1>
                <h2 className="text-[#808080] font-semibold">
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Iusto, vitae?
                </h2>
                <div className="flex justify-between mt-5">
                  <p className="text-yellow-500 text-2xl font-mono font-bold">
                    $20.00
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

          {/*---------------------row -3 ---------------- */}
          <div className="mt-10 gap-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* food item -7 */}
            <div
              data-aos="flip-up"
              className=" rounded-xl border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 p-3 w-80 transition-transform transform hover:scale-105"
            >
              <img className="w-80 h-48 rounded-lg" src={photo7} alt="" />
              <div>
                <h1 className=" text-xl text-white font-semibold uppercase mt-5">
                  Rasta Pasta
                </h1>
                <h2 className="text-[#808080] font-semibold">
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Iusto, vitae?
                </h2>
                <div className="flex justify-between mt-5">
                  <p className="text-yellow-500 text-2xl font-mono font-bold">
                    $10.00
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

            {/* food item -8 */}
            <div
              data-aos="flip-up"
              className=" rounded-xl border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 p-3 w-80 transition-transform transform hover:scale-105"
            >
              <img className="w-80 h-48 rounded-lg" src={photo8} alt="" />
              <div>
                <h1 className=" text-xl text-white font-semibold uppercase mt-5">
                  Ratatouille
                </h1>
                <h2 className="text-[#808080] font-semibold">
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Iusto, vitae?
                </h2>
                <div className="flex justify-between mt-5">
                  <p className="text-yellow-500 text-2xl font-mono font-bold">
                    $09.80
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

            {/* food item -9 */}
            <div
              data-aos="flip-up"
              className=" rounded-xl border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 p-3 w-80 transition-transform transform hover:scale-105"
            >
              <img className="w-80 h-48 rounded-lg" src={photo1} alt="" />
              <div>
                <h1 className=" text-xl text-white font-semibold uppercase mt-5">
                  Beef Wellington
                </h1>
                <h2 className="text-[#808080] font-semibold">
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Iusto, vitae?
                </h2>
                <div className="flex justify-between mt-5">
                  <p className="text-yellow-500 text-2xl font-mono font-bold">
                    $22.50
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
