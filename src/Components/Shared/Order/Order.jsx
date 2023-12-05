import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Order = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phoneNo: "",
    location: "",
    foodItems: [
      {
        foodId: "",
        quantity: "",
        price: "",
        subTotal: "",
      },
    ],
  });
  const [total, setTotal] = useState(0);


  // get data from json -------------------------
  useEffect(() => {
    axios
      .get("cartItem.json")
      .then((res) => res.data)
      .then((data) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          foodItems: data.foodCart.map((cartItem) => ({
            foodId: cartItem.id,
            foodName: cartItem.foodName,
            price: cartItem.price,
            quantity: 0,
            subTotal: 0,
          })),
        }));
        
  
        // Fetch and update food details for each food item
        data.foodCart.forEach((cartItem, index) => {
          axios
            .get(`cartItem.json/${cartItem.id}`)
            .then((res) => res.data)
            .then((foodDetails) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                foodItems: prevFormData.foodItems.map((item, i) =>
                  i === index
                    ? {
                        ...item,
                        foodName: foodDetails.foodName,
                        price: cartItem.price,
                        subTotal: calculateSubtotal(item.quantity, cartItem.price),
                      }
                    : item
                ),
              }));
            });
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
      const initialTotal = formData.foodItems.reduce(
        (accumulator, item) => accumulator + item.subTotal,
        0
      );
      setTotal(initialTotal);
  }, []);
 console.log(formData);

  // calculateSubtotal section --------------------
  const calculateSubtotal = (quantity, price) => {
    return quantity * price;
  };

  // handle input change -----------------
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Food Item change -------------------
// Inside the handleFoodItemChange function
const handleFoodItemChange = (index, e) => {
  const { name, value } = e.target;

  setFormData((prevFormData) => ({
    ...prevFormData,
    foodItems: prevFormData.foodItems.map((item, i) =>
      i === index
        ? {
            ...item,
            [name === "foodName" ? "foodName" : "foodId"]: value,
            subTotal: calculateSubtotal(item.quantity, item.price),
          }
        : item
    ),
  }));

  // Recalculate total
  const newTotal = formData.foodItems.reduce(
    (accumulator, item) => accumulator + item.subTotal,
    0
  );
  setTotal(newTotal);
};



// Quantity Change -----------------
const handleQuantityChange = (index, change) => {
  setFormData((prevFormData) => {
    const updatedFormData = {
      ...prevFormData,
      foodItems: prevFormData.foodItems.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: Math.max(0, item.quantity + change),
              subTotal: calculateSubtotal(item.quantity + change, item.price),
            }
          : item
      ),
    };

    // Recalculate total
    const newTotal = updatedFormData.foodItems.reduce(
      (accumulator, item) => accumulator + item.subTotal,
      0
    );

    // Set the total
    setTotal(newTotal);

    return updatedFormData;
  });
};


  // submit button -----------------------
// submit button -----------------------
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Include total in formData
  const formDataWithTotal = {
    ...formData,
    total: total,
  };

  console.log("Form submitted:", formDataWithTotal);
  // window.location.reload()
  toast.success('Order Confirmed', {
    position: 'top-center',
    autoClose: 1500,
    hideProgressBar: true,
  });

  // Add any additional logic for handling the form submission if needed

  // You may want to reset the form after successful submission
  setFormData({
    clientName: "",
    email: "",
    phoneNo: "",
    location: "",
    foodItems: [
      {
        foodId: "",
        quantity: "",
        price: "",
        subTotal: "",
      },
    ],
  });
  setTotal(0);
};


  return (
    <div className="">
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
      <div className="p-4 flex justify-center ">
        <form className="" onSubmit={handleSubmit}>
          {/* client name and email section  */}
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5 ">
            {/* ClientName Input */}
            <div className="mb-4 max-w-[300px] ">
              <label htmlFor="clientName" className="text-white">
                Name:
              </label>
              <input
                type="text"
                id="clientName"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
                required
                className=" w-full border rounded shadow bg-gray-100 text-black outline-none py-1"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4 max-w-[300px]">
              <label htmlFor="email" className="text-white">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border rounded shadow bg-gray-100 text-black outline-none py-1"
              />
            </div>
          </div>
          {/* phone no and location section  */}
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5">
            {/* phoneNo Input */}
            <div className="mb-4 max-w-[300px]">
              <label htmlFor="phoneNo" className="text-white">
                Phone No:
              </label>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleInputChange}
                required
                className="w-full border rounded shadow bg-gray-100 text-black outline-none py-1"
              />
            </div>

            {/* Location Input */}
            <div className="mb-4 max-w-[300px]">
              <label htmlFor="location" className="text-white">
                Location:
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                className="w-full border rounded shadow bg-gray-100 text-black outline-none py-1"
              />
            </div>
          </div>

          {/* Food Items section */}
          <div className="">
            <h2 className="text-2xl text-white font-semibold mb-4">
              Food Items
            </h2>

            {Array.isArray(formData.foodItems) &&
  formData.foodItems.map((foodItem, index) => (
    <div key={index} className="grid lg:grid-cols-4 md:grid-cols-4 sm: grid-cols-2 gap-5 mb-4">
      {/* Food Id Input */}
      <input
        type="hidden"
        id={`foodId-${index}`}
        name="foodItems"
        value={foodItem.id}
        onChange={(e) => handleFoodItemChange(index, e)}
      />
      {/* Food Name Input */}
      <div className="max-w-[140px]">
        <label htmlFor={`foodName-${index}`} className="text-white">
          Food Name:
        </label>
        <input
          type="text"
          id={`foodName-${index}`}
          name="foodName"
          value={foodItem.foodName}
          onChange={(e) => handleFoodItemChange(index, e)}
          required
          className="w-full border rounded shadow bg-gray-100 text-black outline-none py-1"
        />
      </div>
                  {/* Quantity Input */}
                  <div className="max-w-[140px]">
                    <label htmlFor={`quantity-${index}`} className="text-white">
                      Quantity:
                    </label>
                    <div className="flex items-center ml-2">
                      {/* Minus Button */}
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(index, -1)}
                        className="px-2 py-1 border rounded-md bg-gray-300 text-black"
                      >
                        -
                      </button>
                      {/* Quantity Input */}
                      <input
                        type="number"
                        id={`quantity-${index}`}
                        name="quantity"
                        value={foodItem.quantity}
                        onChange={(e) => handleFoodItemChange(index, e)}
                        required
                        className="w-16 border rounded shadow bg-gray-100 text-black outline-none py-1 mx-2 text-center"
                      />
                      {/* Plus Button */}
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(index, 1)}
                        className="px-2 py-1 border rounded-md bg-gray-300 text-black"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* Price Input */}
                  <div className="max-w-[140px]">
                    <label htmlFor={`price-${index}`} className="text-white">
                      Price:
                    </label>
                    <input
                      readOnly
                      type="number"
                      id={`price-${index}`}
                      name="price"
                      value={foodItem.price}
                      onChange={(e) => handleFoodItemChange(index, e)}
                      required
                      className="w-full border rounded shadow bg-gray-100 text-black outline-none py-1"
                    />
                  </div>

                  {/* Subtotal Input */}
                  <div className="max-w-[140px]">
                    <label htmlFor={`subtotal-${index}`} className="text-white">
                      Subtotal:
                    </label>
                    <input
                      readOnly
                      type="number"
                      id={`subtotal-${index}`}
                      name="subTotal"
                      value={foodItem.subTotal}
                      onChange={(e) => handleFoodItemChange(index, e)}
                      required
                      className="w-full border rounded shadow bg-gray-100 text-black outline-none py-1"
                    />
                  </div>
                </div>
              ))}
{/* total Input  */}
<div className="flex justify-center">
<div className="max-w-[100px]">
  <label htmlFor="total" className="text-white">
    Total:
  </label>
  <input
    readOnly
    type="number"
    id="total"
    name="total"
    value={total}
    className=" w-full border rounded shadow bg-gray-100 text-black outline-none py-1"
  />
</div>
</div>

          </div>

          {/* Confirm button  */}
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className=" hover:bg-[#FFD700] hover:text-black 
 bg-[#FFD700]  text-[#808080] border-black
  font-bold px-3 py-1 rounded-md "
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Order;
