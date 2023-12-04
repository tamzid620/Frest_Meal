import orderTrackingPhoto1 from "../../../../public/images/Tandoori-Chicken.jpg";
import aboutPhoto from "../../../../public/images/contactUs.jpg";
import { MdDeleteForever } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { useState } from "react";

const Cart = () => {

  const [quantity, setQuantity] = useState(0);

  return (
    <div className="">
      {/* title section */}
      {/* title section */}
      <div
        style={{
          backgroundImage: `url(${aboutPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          // marginTop:'30px'
        }}
        className="flex justify-center"
      >
        {/* title tag */}
        <div className="bg-black opacity-70 w-full h-full flex flex-col justify-center items-center">
          <h1
            style={{ fontFamily: "Mooli, sans-serif" }}
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
            <div className="border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 rounded-xl h-[115px] lg:w-[650px] md:w-[650px] sm: w-[358px] text-yellow-500 bg- overflow-y-auto flex items-center mb-14">
              <img
                className="rounded-xl lg:w-[150px] md:w-[150px] sm: w-[100px] me-5 ms-2"
                src={orderTrackingPhoto1}
                alt=""
              />

              <div className="item flex justify-between items-center ">
                <div className="-mt-5">
                  <h1 className=" text-md text-yellow-500 font-semibold uppercase mt-5">
                    Tandoori Chicken
                  </h1>
                  <h2 className="text-[#808080] font-semibold">
                    Price: <span>$30.00</span>
                  </h2>
                </div>

{/* quantity input and delete button  */}
                <div className="lg:ms-32 md:ms-52 sm: me-2 flex gap-5">
{/* quantity section  */}
                <div className="flex mb-5 gap-3">
        <button className="w-[30px] h-[30px] border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black flex justify-center items-center"
          onClick={() => setQuantity(quantity + 1)}> + </button>
        <input
          type="number"
          className="w-[40px] h-[30px] text-black text-center border border-yellow-500 rounded"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
        />
        <button className="w-[30px] h-[30px] border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black flex justify-center items-center"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}> - </button>
      </div>
{/* button section  */}
                  <button className="w-[30px] h-[30px]  border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black flex justify-center items-center">
                    <MdDeleteForever size={20} />
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* payment details */}
          <div className="rounded-xl border-t-2 border-yellow-500 shadow-lg shadow-yellow-500  lg:w-[450px] lg:h-[350px] md:w-[650px] md:h-[350px] sm: w-[358px] sm: h-[350px] sm: mt-10 text-yellow-500 sticky top-14 z-1 sm:mt-20 md:mt-20 lg:mt-0 lg:ms-36 md:ms-0">
            <div className="ms-2 me-2">
              <h1 className="border border-yellow-500 p-2 mt-3 rounded-xl font-semibold text-3xl text-white mb-3 flex justify-center">
                Order Details
              </h1>
              <h1 className="font-bold text-lg text-gray-500 mb-2">
                Selected items: <span className="text-yellow-500"> 04</span>
              </h1>
              <h1 className="font-bold text-lg text-gray-500 mb-2">
                Total Price: <span className="text-yellow-500">$90</span>
              </h1>
              <h1 className="font-bold text-lg text-gray-500 mb-2">
                {" "}
                Total Delivery Charge:{" "}
                <span className="text-yellow-500"> $15</span>
              </h1>
              <h1 className="font-bold text-lg text-gray-500 mb-2">
                Total Tax: <span className="text-yellow-500"> $15</span>
              </h1>
              <hr className="border border-yellow-500 mb-2" />
              <h1 className="font-bold text-lg text-gray-500 mb-2">
                Total: <span className="text-yellow-500"> $15</span>
              </h1>
              <h1
                style={{ fontFamily: "Mooli, sans-serif" }}
                className="border border-yellow-500 p-2 rounded-xl font-semibold text-2xl text-yellow-500 mb-3 mt-8 flex justify-center items-center hover:bg-yellow-500 hover:text-black"
              >
                PAY NOW <BsFillCreditCardFill className="ms-5" />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
