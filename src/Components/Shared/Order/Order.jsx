import { useEffect, useState } from 'react';
import aboutPhoto from '../../../../public/images/contactUs.jpg';
import axios from 'axios';

const Order = () => {
    const [formData, setFormData] = useState({
        clientName: '',
        email: '',
        phoneNo: '',
        location: '',
        foodItems: [
            {
                foodId: '',
                quantity: '',
                price: '',
                subTotal: ''
            },
        ],
    });

    // get data from json -------------------------
    useEffect(() => {
        axios.get('cartItem.json')
            .then((res) => res.data)
            .then((data) => setFormData(data))
    }, [])
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
    const handleFoodItemChange = (index, e) => {
      const { name, value } = e.target;
  
      setFormData((prevFormData) => ({
          ...prevFormData,
          foodItems: prevFormData.foodItems.map((item, i) =>
              i === index
                  ? {
                        ...item,
                        [name]: value,
                        subTotal: calculateSubtotal(item.quantity, item.price),
                    }
                  : item
          ),
      }));
  };
  
  // Quantity Change -----------------
  const handleQuantityChange = (index, change) => {
    setFormData((prevFormData) => ({
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
    }));
};

// submit button -----------------------
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };


  return (
    <div>
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
            Order Now
          </h1>
          <img src="../../../../public/icons/hr.svg" alt="" />
        </div>
      </div>

      {/* information form  section  */}
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          {/* client name and email section  */}
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5">
            {/* ClientName Input */}
            <div className="mb-4 w-full">
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
                className="w-full border rounded shadow bg-gray-100 text-black outline-none py-2"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4 w-full">
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
                className="w-full border rounded shadow bg-gray-100 text-black outline-none py-2"
              />
            </div>
          </div>
          {/* phone no and location section  */}
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5">
            {/* phoneNo Input */}
            <div className="mb-4 w-full">
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
                className="w-full border rounded shadow bg-gray-100 text-black outline-none py-2"
              />
            </div>

            {/* Location Input */}
            <div className="mb-4 w-full">
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
                className="w-full border rounded shadow bg-gray-100 text-black outline-none py-2"
              />
            </div>
          </div>
                    {/* Food Items section */}
                    <div className="mt-8">
        <h2 className="text-2xl text-white font-semibold mb-4">Food Items</h2>

        {formData.foodItems.map((foodItem, index) => (
            <div key={index} className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-4">
                {/* Food Id Input */}
                <div className="w-full">
                    <label htmlFor={`foodId-${index}`} className="text-white">
                        Food ID:
                    </label>
                    <input
                        type="text"
                        id={`foodId-${index}`}
                        name="foodId"
                        value={foodItem.foodId}
                        onChange={(e) => handleFoodItemChange(index, e)}
                        required
                        className="w-full border rounded shadow bg-gray-100 text-black outline-none py-2"
                    />
                </div>
{/* Quantity Input */}
<div className="w-full flex items-center">
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
            className="w-16 border rounded shadow bg-gray-100 text-black outline-none py-2 mx-2 text-center"
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

                {/* new quantity input  */}
                {/* <div className="flex mb-5 gap-3 w-full">
                      <button
                        className="w-[30px] h-[30px] border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black flex justify-center items-center"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        {" "}
                        +{" "}
                      </button>
                      <input
                        type="number"
                        className="w-[40px] h-[30px] text-black text-center border border-yellow-500 rounded"
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(parseInt(e.target.value) || 0)
                        }
                      />
                      <button
                        className="w-[30px] h-[30px] border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black flex justify-center items-center"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        {" "}
                        -{" "}
                      </button>
                    </div> */}

                {/* Price Input */}
                <div className="w-full">
                    <label htmlFor={`price-${index}`} className="text-white">
                        Price:
                    </label>
                    <input
                        type="number"
                        id={`price-${index}`}
                        name="price"
                        value={foodItem.price}
                        onChange={(e) => handleFoodItemChange(index, e)}
                        required
                        className="w-full border rounded shadow bg-gray-100 text-black outline-none py-2"
                    />
                </div>

                {/* Subtotal Input */}
                <div className="w-full">
                    <label htmlFor={`subtotal-${index}`} className="text-white">
                        Subtotal:
                    </label>
                    <input
                        type="number"
                        id={`subtotal-${index}`}
                        name="subTotal"
                        value={foodItem.subTotal}
                        onChange={(e) => handleFoodItemChange(index, e)}
                        required
                        className="w-full border rounded shadow bg-gray-100 text-black outline-none py-2"
                    />
                </div>
            </div>
        ))}
        </div>

          {/* Confirm button  */}
          <div className="flex justify-center mt-5">
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
    </div>
  );
};

export default Order;
