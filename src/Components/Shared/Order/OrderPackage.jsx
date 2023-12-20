
const OrderPackage = () => {

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
          <form className="my-5 ">
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
                  value={formData.email}
                  onChange={handleInputChange}
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
                  value={formData.phoneNo}
                  onChange={handleInputChange}
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
                  value={formData.location}
                  onChange={handleInputChange}
                  className="focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-white text-white "
                  />
              </div>
            </div>
  
            {/* Food Items section */}
            <div className="">
  
  
              {Array.isArray(formData.packages) &&
    formData.packages.map((foodItem, index) => (
      <div key={index} className="grid lg:grid-cols-4 md:grid-cols-4 sm: grid-cols-2 gap-5 mb-4">
        {/* Food Id Input */}
        <input
          type="hidden"
          id={`packageName-${index}`}
          name="packages"
          value={foodItem.id}
          onChange={(e) => handleFoodItemChange(index, e)}
        />
        {/* Food Name Input */}
        <div className="max-w-[200px]">
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
            readOnly
            className="focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-white text-white "
            />
        </div>
                    {/* Quantity Input */}
                    <div className="max-w-[200px]">
                      <label htmlFor={`quantity-${index}`} className="text-white">
                        Quantity:
                      </label>
                      <div className="flex items-center ml-2">
                        {/* Minus Button */}
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(index, -1)}
                          className="px-2 border rounded-md bg-gray-300 text-black"
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
                          className="focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-white text-white "
                          />
                        {/* Plus Button */}
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(index, 1)}
                          className="px-2 border rounded-md bg-gray-300 text-black"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {/* Price Input */}
                    <div className="max-w-[200px]">
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
                        className="focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-white text-white "
                        />
                    </div>
  
                    {/* Subtotal Input */}
                    <div className="max-w-[200px]">
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
                        className="focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-white text-white "
                        />
                    </div>
                  </div>
                ))}
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
      value={totalAmount}
      className="ms-2 w-16 border rounded shadow bg-gray-100 text-black outline-none"
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