import { IoSearchCircleSharp } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import avatar from '../../../../../../src/assets/user/user-01.png'
import { IoMdArrowDropdown } from 'react-icons/io';

const SearchPanel = () => {
  return (
    <div className="bg-black p-2 flex justify-between items-center">

      {/* search section  */}
      <div>
   
      <div className=" sm: hidden lg:flex md:flex">
        <input type="text" placeholder="Search Setting" className="input input-bordered input-warning lg:w-[700px] md:w-[500px]"/>
        <button
          title="Wishlist"
          className=" hover:text-white text-yellow-500 font-bold px-3 py-1
      rounded-md"> <IoSearchCircleSharp className="w-[30px] h-[30px]" />
        </button>
      </div>
      </div>
      {/* icon and login section  */}
      <div className="flex sm: me-11 lg:me-0">
      <div className="flex items-center">
        <button
          title="Wishlist"
          className=" hover:text-white text-yellow-500 font-bold px-3 py-1
      rounded-md"> <BiSolidMessageRounded className="w-[25px] h-[25px]" />
        </button>
        <button
          title="Wishlist"
          className=" hover:text-white text-yellow-500 font-bold px-3 py-1
      rounded-md"> <MdNotifications className="w-[20px] h-[20px]" />
        </button>
      </div>

      <div className="flex items-center">
        <img className="w-[45px] h-[45px]" src={avatar} alt="" />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className=" m-1"> <IoMdArrowDropdown size={22}/> </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SearchPanel;