import { Link } from "react-router-dom";
import "./NavCss.css";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { BsHeartFill, BsFillCartCheckFill } from "react-icons/bs";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  // state section --------------------------------
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [selectedItem, setSelectedItem] = useState("item1");
  const [specialRequest, setSpecialRequest] = useState("");

  const createOrder = () => {
    Swal.fire({
      icon: "success",
      title: "Order Created!",
      text: "Your order has been successfully created.",
      confirmButtonText: "OK",
      confirmButtonColor: "#FFD700",
    }).then(() => {
      setName("");
      setPhone("");
      setAddress("");
      setSelectedItem("item1");
      setSpecialRequest("");
    });
    console.log(
      "Name:",
      name,
      "----Phone:",
      phone,
      "----Selected Item:",
      selectedItem,
      "----Special ----Request:",
      specialRequest
    );
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // scroll navbare option -------------
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBarClass = scrolling ? "bg-slate-950" : "bg-gray-800";

  // navmenu open close option -----------
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
  
    const toggleNav = () => {
      // Animate Links
      navLinks.classList.toggle("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });
  
      // Hamburger Animation
      hamburger.classList.toggle("toggle");
      setIsOpen(!isOpen);
    };
  
    const closeNav = () => {
      // Close the menu
      if (isOpen) {
        navLinks.classList.remove("open");
        links.forEach((link) => {
          link.classList.remove("fade");
        });
  
        hamburger.classList.remove("toggle");
        setIsOpen(false);
      }
    };
  
    hamburger.addEventListener("click", toggleNav);
  
    // Add event listeners to each navigation link to close the menu when clicked
    links.forEach((link) => {
      link.addEventListener("click", closeNav);
    });
  
    return () => {
      hamburger.removeEventListener("click", toggleNav);
  
      // Remove event listeners when the component is unmounted
      links.forEach((link) => {
        link.removeEventListener("click", closeNav);
      });
    };
  }, [isOpen]);
  

  return (
    <nav className={`fixed z-10 ${navBarClass}`}
    >
      <div className="flex items-center justify-between">
      <div>
          <Link to="/">
            <img
              className="w-[140px]"
              src="./icons/logo-svg.png"
              alt=""
              title="Resturant_Logo"
            />
          </Link>
        </div>

        <div className="flex items-center lg:ms-0 md:ms-0 sm: ms-[86px] lg:hidden md:hidden">
          <Link to="/cart">
            <button
              title="Cart"
              className="hover:text-white text-yellow-500 font-bold px-3 py-1 rounded-md"
            >
              <BsFillCartCheckFill className="w-[20px] h-[20px]" />
            </button>
          </Link>

          <Link to="/wishlist">
            <button
              title="Wishlist"
              className="hover:text-white text-yellow-500 font-bold px-3 py-1 rounded-md"
            >
              <BsHeartFill className="w-[20px] h-[20px]" />
            </button>
          </Link>
        </div>

      </div>
      <div className="hamburger">
        <div className={`line1 ${isOpen ? "line1-open" : ""}`}></div>
        <div className={`line2 ${isOpen ? "line2-open" : ""}`}></div>
        <div className={`line3 ${isOpen ? "line3-open" : ""}`}></div>
      </div>
      <ul className="nav-links text-yellow-500">
        <li title="Home">
          <Link to="/" >Home</Link>
        </li>
        <li title="Order Tracking">
          <Link to="/ordertracking">Order Tracking</Link>
        </li>
        <li title="Menu">
          <Link to="/menu">Menu</Link>
        </li>
        <li title="Reservation">
          <Link to="/reservation">Reservation</Link>
        </li>
        <li title="Press">
          <Link to="/press">Press</Link>
        </li>
        <li>
          <Link to="/aboutUs">About Us</Link>
        </li>
        {/* <li>
          <button title="Create Order">Create Order</button>
        </li> */}

{/* cart , wishlist and create order section   */}
        <div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div className="ms-10 lg:flex md:flex sm: hidden">
              {/* view cart button  */}
              <Link to="/cart">
                <button
                  title="Cart"
                  className=" hover:text-white text-yellow-500 font-bold px-3 py-1
      rounded-md"
                >
                  {" "}
                  <BsFillCartCheckFill className="w-[20px] h-[20px]" />
                </button>
              </Link>
              {/* wishlist button  */}
              <Link to="/wishlist">
                <button
                  title="Wishlist"
                  className=" hover:text-white text-yellow-500 font-bold px-3 py-1
      rounded-md"
                >
                  {" "}
                  <BsHeartFill className="w-[20px] h-[20px]" />
                </button>
              </Link>
            </div>

            {/* create order button  */}
            <div className=" lg:flex md:flex">
              <button
                title="create order"
                className=" hover:bg-[#FFD700] hover:text-black 
 bg-[#FFD700]  text-[#808080] border-black
  font-bold px-3 py-1 rounded-md "
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                Create Order
              </button>
            </div>
          </div>
          <dialog id="my_modal_4" className="modal">
            {/* Modal section  */}
            <div className="modal-box w-11/12 max-w-5xl bg-gray-800 bg-opacity-80">
              {/* modal info  */}
              <div className="modalForm">
                {/* title section  */}
                <div className="flex justify-center mb-5">
                  {/* tittle tag */}
                  <div>
                    <h1
                      style={{ fontFamily: "Mooli, sans-serif" }}
                      className="flex justify-center text-3xl text-white font-semibold"
                    >
                      Order Your Meals
                    </h1>
                    <img src="../../../../public/icons/hr.svg" alt="" />
                  </div>
                </div>
                {/* form section  */}
                <form
                  method="dialog"
                  className="space-y-4 "
                  onSubmit={createOrder}
                >
                  {/* name and phone option  */}
                  <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 ">
                    {/* name option  */}
                    <div>
                      <label htmlFor="name" className="block text-yellow-500">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    {/* phone number option  */}
                    <div>
                      <label htmlFor="phone" className="block text-yellow-500">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="Phone Number"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* delivery and choose items option */}
                  <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
                    {/* delivery option  */}
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-yellow-500"
                      >
                        Delivery Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="Delivery Address"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    {/* choose items option  */}
                    <div>
                      <label htmlFor="items" className="block text-yellow-500">
                        Choose Items
                      </label>
                      <select
                        id="items"
                        name="items"
                        className="lg:w-full md:w-64 sm:w-48 border border-gray-300 rounded px-3 py-2 text-gray-500"
                        required
                        value={selectedItem}
                        onChange={(e) => setSelectedItem(e.target.value)}
                      >
                        <option value="item1">Item 1</option>
                        <option value="item2">Item 2</option>
                        <option value="item3">Item 3</option>
                        {/* Add more items as needed */}
                      </select>
                    </div>
                  </div>

                  {/* special request option  */}
                  <div>
                    <label htmlFor="request" className="block text-yellow-500">
                      Special Request
                    </label>
                    <textarea
                      id="request"
                      name="request"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      rows="3"
                      placeholder="Custom Order"
                      value={specialRequest}
                      onChange={(e) => setSpecialRequest(e.target.value)}
                    ></textarea>
                  </div>

                  {/* submit button  */}
                  <button
                    type="submit"
                    onClick={(e) => createOrder(e)}
                    className="hover:bg-[#FFD700] hover:text-black bg-[#FFD700]  text-[#808080] border-black font-bold px-3 py-1 rounded-md"
                  >
                    Create Order
                  </button>
                </form>
              </div>

              {/* close button  */}
              <div className="modal-action">
                <form method="dialog">
                  <button className="hover:bg-[#FFD700] hover:text-black bg-[#FFD700]  text-[#808080] border-black font-bold px-3 py-1 rounded-md">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        
      </ul>
    </nav>
  );
};

export default NavigationBar;
