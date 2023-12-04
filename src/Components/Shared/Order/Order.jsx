import { useState } from 'react';
import aboutPhoto from '../../../../public/images/contactUs.jpg';

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFoodItemChange = (index, e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            foodItems: prevFormData.foodItems.map((item, i) =>
                i === index ? { ...item, [name]: value } : item
            ),
        }));
    };

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
                <div className="w-full">
                    <label htmlFor={`quantity-${index}`} className="text-white">
                        Quantity:
                    </label>
                    <input
                        type="number"
                        id={`quantity-${index}`}
                        name="quantity"
                        value={foodItem.quantity}
                        onChange={(e) => handleFoodItemChange(index, e)}
                        required
                        className="w-full border rounded shadow bg-gray-100 text-black outline-none py-2"
                    />
                </div>

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
