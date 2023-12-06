import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AdminOrderDetails = () => {
  const { orderId } = useParams();

  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    // get method -------------------
    axios
    .get(`orderDetail.json/${orderId}`, {
      headers: headers,
    })
    .then((res) => {
      setOrderDetails(res.data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  }, [orderId]);
  console.log(orderId);
  console.log(orderDetails);

  return (
    <div className="text-yellow-500 bg-gray-300 min-h-screen">
      <div className="fixed z-10 w-full">
        <SearchPanel />
      </div>

      {/* main section  */}
      <div className="flex justify-center ">
        <div className="mt-24 w-full ">
          <h1 className="text-3xl flex justify-center text-black uppercase">
            Order Details:{orderDetails.id}
          </h1>
          <hr className="mt-1 border border-black mb-10" />
          {/* information section  */}
          <div className="text-black p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Name: {orderDetails.clientName}</p>
                <p className="text-gray-600">Email: {orderDetails.email}</p>
                <p className="text-gray-600">
                  Address: {orderDetails.location}
                </p>
                <p className="text-gray-600">
                  Phone No: {orderDetails.phoneNo}
                </p>
                <p className="text-gray-600">
                  Order Code: {orderDetails.orderCode}
                </p>
                <p className="text-gray-600">
                  Total Amount: {orderDetails.totalAmount}
                </p>
              </div>
              {/* Add other fields as needed */}
            </div>
            {/* table section  */}
            <div className="overflow-x-auto text-black">
              <table className="table table-zebra">
                {/*table head */}
                <thead className="bg-gray-600 text-white">
                  <tr>
                    <th>Food Name</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody>
                {orderDetails.items && orderDetails.items.map((foodItem) => (
                    <tr key={foodItem.id}>
                      <td>{foodItem.foodName.join(", ")}</td>
                      <td>{foodItem.quantity}</td>
                      <td>{foodItem.subTotal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-center gap-5 mt-8">
            <button className="btn-sm bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">
                Approve
              </button>
              <button className="btn-sm bg-red-500 rounded-lg font-semibold uppercase hover:bg-red-800 hover:text-white">
                Decline
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetails;
