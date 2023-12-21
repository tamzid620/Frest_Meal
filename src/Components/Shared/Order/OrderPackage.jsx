import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const OrderPackage = ({packageId}) => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [location, setLocation] = useState("");
  const [packages, setPackages] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Handler --------------------------
  const handleClientNameChange = (event) => {
    setClientName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNoChange = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleTotalAmountChange = (event) => {
    setTotalAmount(event.target.value);
  };

  // handle Increase Quantity ----------------
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    const price = packages.price;
    const subtotal = price * (quantity + 1);
    setSubtotal(subtotal);
    const newTotalAmount = packages.reduce((acc, pkg) => acc + pkg.subtotal, 0);
    setTotalAmount(newTotalAmount);
  };
 
   // handle Decrease Quantity ----------------
   const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);

      const price = packages.price;
      const subtotal = price * (quantity - 1);
      setSubtotal(subtotal);
      const newTotalAmount = packages.reduce((acc, pkg) => acc + pkg.subtotal, 0);
      setTotalAmount(newTotalAmount);
    }
  };
  


  // get data ----------------------
  useEffect(() => {
    axios
      .get(`https://backend.ap.loclx.io/api/package-item/${packageId}`)
      .then((res) => {
        setPackages(res.data.package);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [packageId]);
  console.log(packages);
  console.log(packageId);

  // submit button -------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Client Name:", clientName);
    console.log("Email:", email);
    console.log("Phone No:", phoneNo);
    console.log("Location:", location);
    console.log("Total Amount:", totalAmount);
  };

  return (
    <div className="my-5">
      {/* title section */}
      <div className="flex justify-center">
        {/* title tag */}
        <div className=" w-full h-full flex flex-col justify-center items-center">
          <h1
            style={{ fontFamily: "Mooli, sans-serif" }}
            className="text-3xl text-white font-semibold"
          >
            Order Now
          </h1>
          <img src="../../../../public/icons/hr.svg" alt="" />
        </div>
      </div>

      {/* information form  section  */}
      {/* <div className="p-4 flex justify-center "> */}
      <form className="my-5" onSubmit={handleSubmit}>
        {/* client name and email section  */}
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-10">
          {/* ClientName Input */}
          <div className="mb-4 max-w-[500px]">
            <label htmlFor="clientName" className="text-white">
              Name:
            </label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              onChange={handleClientNameChange}
              value={clientName}
              required
              className="focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-white text-white "
            />
          </div>

          {/* Email Input */}
          <div className="mb-4 max-w-[500px]">
            <label htmlFor="email" className="text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleEmailChange}
              value={email}
              className="focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-white text-white "
            />
          </div>
        </div>
        {/* phone no and location section  */}
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5">
          {/* phoneNo Input */}
          <div className="mb-4 max-w-[500px]">
            <label htmlFor="phoneNo" className="text-white">
              Phone No:
            </label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              onChange={handlePhoneNoChange}
              value={phoneNo}
              className="focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-white text-white "
            />
          </div>

          {/* Location Input */}
          <div className="mb-4 max-w-[500px]">
            <label htmlFor="location" className="text-white">
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              onChange={handleLocationChange}
              value={location}
              className="focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-white text-white "
            />
          </div>
        </div>

        {/* Food Items section */}
        <div>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 sm: grid-cols-2 gap-5 mb-4">
            {/* package Name Input */}
            {packages && packages.packageName && (
            <div className="max-w-[200px]">
              <label htmlFor="packageName" className="text-white">
                Package Name:
              </label>
              <input
                type="text"
                id="packageName"
                name="packageName"
                value={packages.packageName}
                required
                readOnly
                className="focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-white text-white "
              />
            </div>
            )}
            {/* Quantity Input */}
            <div className="max-w-[200px]">
              <label htmlFor="quantity" className="text-white">
                Quantity:
              </label>
              <div className="flex items-center ml-2">
                {/* Minus Button----------------------------- */}
                <button
                  type="button"
                  onClick={handleDecreaseQuantity}
                  className="px-2 border rounded-md bg-gray-300 text-black"
                >
                  -
                </button>
                {/* -------------------Quantity Input--------------- */}
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  required
                  readOnly
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="focus:outline-none focus:shadow-outline w-full bg-transparent px-3 py-1 border-b-2 border-white text-white"
                />
                {/* Plus Button --------------------------------------*/}
                <button
                  type="button"
                  onClick={handleIncreaseQuantity}
                  className="px-2 border rounded-md bg-gray-300 text-black"
                >
                  +
                </button>
              </div>
            </div>
            {/* Price Input */}
            {packages && packages.price && (
            <div className="max-w-[200px]">
              <label htmlFor="price" className="text-white">
                Price:
              </label>
              <input
                readOnly
                type="number"
                id="price"
                name="price"
                value={packages.price}
                required
                className="focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-white text-white "
              />
            </div>
            )}

            {/* Subtotal Input */}
            <div className="max-w-[200px]">
              <label htmlFor="subtotal" className="text-white">
                Subtotal:
              </label>
              <input
                readOnly
                type="number"
                id="subtotal"
                name="subtotal"
                value={subtotal}
                required
                className="focus:outline-none focus:shadow-outline w-full bg-transparent px-3 py-1 border-b-2  border-white text-white "
              />
            </div>
          </div>
          {/* total Input  */}
          <div className="flex justify-center ">
            <div className="max-w-[100px]flex mt-5">
              <label htmlFor="totalAmount" className="text-white">
                Total:
              </label>
              <input
                readOnly
                type="number"
                id="totalAmount"
                name="totalAmount"
                value={subtotal}
                onChange={handleTotalAmountChange}              
                className="ms-2 w- border rounded shadow bg-gray-100 text-black outline-none"
              />
            </div>
          </div>
        </div>

        {/* Confirm button  */}
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="border border-yellow-500 bg-transparent text-yellow-500
                hover:border-white hover:text-white 
  font-bold px-3 py-1 rounded-md"
          >
            Confirm
          </button>
        </div>
      </form>
      {/* </div> */}
      <ToastContainer />
    </div>
  );
};

export default OrderPackage;
