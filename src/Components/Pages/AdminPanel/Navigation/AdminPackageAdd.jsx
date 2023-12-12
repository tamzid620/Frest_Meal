import { useEffect, useState } from "react";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const AdminPackageAdd = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [formData, setFormData] = useState({
    packageName: "",
    menu: "",
    foodItems: [],
    numOfPeople: "",
    price: "",
  });

  const handleChange = (selectedOption, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedOption,
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "You have to Login first",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/adminlogin");
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      const headers = {
        accept: "application/json",
        Authorization: "Bearer " + user.token,
      };

      //get dropdown list method ---------------
      axios
        // .get(`https://backend.ap.loclx.io/api/get-dropdown-food-item`, {
        .get(`get-dropdown-food-item.json`, {
          headers: headers,
        })
        .then((res) => {
          setPackages(res.data.category);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [navigate]);
  console.log(packages);

  // handle submit button ----------------
  const handleSubmit = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    e.preventDefault();
    const data = new FormData();
    data.append("packageName", formData.packageName);
    data.append("menu", formData.menu);
    data.append("foodItems", JSON.stringify(formData.foodItems));
    data.append("numOfPeople", formData.numOfPeople);
    data.append("price", formData.price);
    console.log(data);
    // post method --------------
    axios
      .post("https://backend.ap.loclx.io/api/add-food-item", data, {
        headers: headers,
      })
      .then((res) => {
        console.log("Data:", res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/adminFoodItem");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "An error occurred: " + error,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="text-yellow-500 bg-gray-300 min-h-screen">
      <div className="fixed z-10 w-full">
        <SearchPanel />
      </div>

      {/* main section  */}
      <div className="flex justify-center ">
        <div className="mt-24 w-full ">
          <h1 className="text-3xl flex justify-center text-black uppercase">
            Add Package
          </h1>
          <hr className="mt-1 border border-black mb-10" />
          {/* table section  */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 text-white drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mt-10"
            >
              {/* Package Name */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Package Name
                </label>
                <input
                  type="text"
                  name="packageName"
                  onChange={handleChange}
                  className="w-full p-2 border rounded text-black"
                />
              </div>
              {/* Dropdown for  Select */}
              <div className="grid sm: grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {/* Dropdown for Menu */}
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2">
                    Menu Category
                  </label>
                  <select
                    name="menu"
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-black"
                  >
                    <option value="">Select Menu</option>
                    {packages.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.categoryName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dropdown for Items */}
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2">Items </label>
                  <Select
                    isMulti
                    name="foodItems"
                    className=" text-black"
                    onChange={(selectedOption) =>
                      handleChange(selectedOption, "foodItems")
                    }
                    options={packages.flatMap((category) =>
                      category.fooditems.map((foodItem) => ({
                        value: foodItem.foodName,
                        label: foodItem.foodName,
                      }))
                    )}
                  />
                </div>
              </div>

              <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {/* Number of People */}
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2">
                    Number of People
                  </label>
                  <input
                    type="number"
                    name="numOfPeople"
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-black"
                  />
                </div>

                {/* Price */}
                <div className="mb-6">
                  <label className="block text-sm font-bold mb-2">Price</label>
                  <input
                    type="text"
                    name="price"
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-black"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white hover:text-black font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminPackageAdd;
