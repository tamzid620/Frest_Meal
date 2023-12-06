import { IoSearchCircleSharp } from "react-icons/io5";
import { BiSolidMessageRounded, BiMenuAltLeft } from "react-icons/bi";
import { MdArrowDropDown, MdNotifications } from "react-icons/md";
import avatar from "../../../../../../src/assets/user/user-01.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { IoIosSpeedometer } from "react-icons/io";
import brandlogo from "../../../../../../public/icons/logo-svg.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const SearchPanel = () => {

  const [openDropdown1, setOpenDropdown1] = useState(null);
  const [openDropdown2, setOpenDropdown2] = useState(null);

  const handleDropdown1 = (index) => {
    setOpenDropdown1(openDropdown1 === index ? null : index);
  }; 
  const handleDropdown2 = (index) => {
    setOpenDropdown2(openDropdown2 === index ? null : index);
  };

  return (
    <div className="bg-gray-800 p-2 flex justify-between items-center">
      {/* drawer section  */}
      <div>
        <div className="drawer ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle " />
          <div className="drawer-content ">
            {/* Page content here */}
            <button className="border border-yellow-500 hover:bg-yellow-500 hover:text-black w[20px] h-[20px] px-3 py-5 rounded-xl flex items-center">
              <label htmlFor="my-drawer">
                <BiMenuAltLeft size={25} />
              </label>
            </button>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay "
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-gray-800 text-white border-r-2 border-yellow-500">
              {/* Sidebar content here */}
              <Link to="/">
                <img className="w-[150px]" src={brandlogo} alt="" />
              </Link>
              <hr className="border border-yellow-500 opacity-40 mt-5" />
              <h1
                style={{ fontFamily: "Mooli, sans-serif" }}
                className="font-bold text-2xl text-white my-5"
              >
                Navigation{" "}
              </h1>

              {/* Dashboard section  */}
              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-blue-500">
                  <IoIosSpeedometer className="text-blue-500" size={20} />{" "}
                  <Link to="/dp">Dashboard</Link>
                </span>
              </li>
              {/*Menu section  */}
              <details className="dropdown mb-3" open={openDropdown1 === 1}>
                <summary
                onClick={() => handleDropdown1(1)}
                className=" rounded-r-full bg-[#191c24] p-2 border-l-4 border-blue-500 w-full btn text-white hover:btn-ghost ">
                  <IoIosSpeedometer
                    className="text-violet-500 -ms-[160px]"
                    size={20}
                  />
                  Menu <MdArrowDropDown size={20} />
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-yellow-400 border rounded-box w-52 ">
                  <Link to="/adminCategory">
                    <li className="py-2 font-bold text-md hover:bg-yellow-500 text-black rounded-xl ps-2">
                      Category
                    </li>
                  </Link>
                  <hr className="mt-1 border-black" />
                  <Link to="/adminSubCategory">
                    <li className="py-2 font-bold text-md hover:bg-yellow-500 text-black rounded-xl ps-2">
                      Sub Category
                    </li>
                  </Link>
                  <hr className="mt-1 border-black" />
                  <Link to="/adminFoodItem">
                    <li className="py-2 font-bold text-md hover:bg-yellow-500 text-black rounded-xl ps-2">
                      Food Item
                    </li>
                  </Link>
                </ul>
              </details>

              {/*Order section  */}
              <details className="dropdown mb-3" open={openDropdown2 === 2}>
                <summary
                onClick={() => handleDropdown2(2)}
                className=" rounded-r-full bg-[#191c24] p-2 border-l-4 border-blue-500 w-full btn text-white hover:btn-ghost ">
                  <IoIosSpeedometer
                    className="text-blue-500 -ms-[160px]"
                    size={20}
                  />
                  Order <MdArrowDropDown size={20} />
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-yellow-400 border rounded-box w-52 ">
                  <Link to="/adminOrderList">
                    <li className="py-2 font-bold text-md hover:bg-yellow-500 text-black rounded-xl ps-2">
                      Order List
                    </li>
                  </Link>
                  <hr className="mt-1 border-black" />
                  <Link to="/adminOrderDelivery">
                    <li className="py-2 font-bold text-md hover:bg-yellow-500 text-black rounded-xl ps-2">
                      Order Delivery
                    </li>
                  </Link>
                </ul>
              </details>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-blue-500">
                  <IoIosSpeedometer className="text-blue-500" size={20} />{" "}
                  Option-2
                </span>
              </li>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-green-500">
                  <IoIosSpeedometer className="text-green-500" size={20} />{" "}
                  Option-3
                </span>
              </li>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-yellow-500">
                  <IoIosSpeedometer className="text-yellow-500" size={20} />{" "}
                  Option-4
                </span>
              </li>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-orange-500">
                  <IoIosSpeedometer className="text-orange-500" size={20} />{" "}
                  Option-5
                </span>
              </li>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-gray-500">
                  <IoIosSpeedometer className="text-gray-500" size={20} />{" "}
                  Option-6
                </span>
              </li>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-teal-500">
                  <IoIosSpeedometer className="text-teal-500" size={20} />{" "}
                  Option-7
                </span>
              </li>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-pink-500">
                  <IoIosSpeedometer className="text-pink-500" size={20} />{" "}
                  Option-8
                </span>
              </li>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-indigo-500">
                  <IoIosSpeedometer className="text-indigo-500" size={20} />{" "}
                  Option-9
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* search section  */}
      <div className=" sm: hidden lg:flex md:flex">
        <input
          type="text"
          placeholder="Search Setting"
          className="input input-bordered input-warning lg:w-[700px] md:w-[500px]"
        />
        <button
          title="Wishlist"
          className=" hover:text-white text-yellow-500 font-bold px-3 py-1
      rounded-md"
        >
          {" "}
          <IoSearchCircleSharp className="w-[30px] h-[30px]" />
        </button>
      </div>
      {/* icon and login section  */}
      <div className="flex sm: me-11 lg:me-0">
        <div className="flex items-center">
          <button
            title="Wishlist"
            className=" hover:text-white text-yellow-500 font-bold px-3 py-1
      rounded-md"
          >
            {" "}
            <BiSolidMessageRounded className="w-[25px] h-[25px]" />
          </button>
          <button
            title="Wishlist"
            className=" hover:text-white text-yellow-500 font-bold px-3 py-1
      rounded-md"
          >
            {" "}
            <MdNotifications className="w-[20px] h-[20px]" />
          </button>
        </div>

        <div className="flex items-center">
          <img className="w-[45px] h-[45px]" src={avatar} alt="" />
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" m-1 ">
              {" "}
              <IoMdArrowDropdown size={22} />{" "}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 
          shadow rounded-box w-52 bg-gray-800 border border-yellow-500"
            >
              <h1 className="font-semibold text-xl py-2">Profile</h1>
              <hr className="border border-yellow-500 opacity-40" />
              {/* Account Settings  */}
              <li className="font-semibold text-white text-md py-2">
                <a>
                  <span className="rounded-full bg-[#191c24] p-2">
                    <AiFillSetting className="text-green-500" size={20} />
                  </span>
                  Account Settings
                </a>
              </li>
              <hr className="border border-yellow-500 opacity-40" />
              {/* Change Password  */}
              <li className="font-semibold text-white text-md py-2">
                <a>
                  <span className="rounded-full bg-[#191c24] p-2">
                    <BsFillInfoCircleFill className="text-blue-500" size={20} />
                  </span>
                  Change Password
                </a>
              </li>
              <hr className="border border-yellow-500 opacity-40" />
              {/* Logout  */}
              <li className="font-semibold text-white text-md py-2">
                <a>
                  <span className="rounded-full bg-[#191c24] p-2">
                    <RiLogoutBoxRFill className="text-red-500" size={20} />
                  </span>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
