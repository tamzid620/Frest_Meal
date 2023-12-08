import { useState } from "react";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import { useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminOrderList = () => {
  const [orderList, setOrderList] = useState([]);

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
      Navigate("/adminlogin");
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      const headers = {
        accept: "application/json",
        Authorization: "Bearer " + user.token,
      };
      // get foodItem data ---------------
      axios
        .get(`https://backend.ap.loclx.io/api/order-list`, {
          headers: headers,
        })
        .then((res) => {
          setOrderList(res.data.orderList);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="text-yellow-500 bg-gray-300 min-h-screen">
      <div className="fixed z-10 w-full">
        <SearchPanel />
      </div>

      {/* main section  */}
      <div className="flex justify-center ">
        <div className="mt-24 w-full ">
          <h1 className="text-3xl flex justify-center text-black uppercase">
            Order List
          </h1>
          <hr className="mt-1 border border-black mb-10" />
          {/* table section  */}
          <div className="overflow-x-auto text-black">
            <table className="table table-zebra">
              {/* head */}
              <thead className="bg-gray-600 text-white">
                <tr>
                  <th>index</th>
                  <th>Name</th>
                  <th>phoneNo</th>
                  <th>OrderCode</th>
                  <th>Total Amount</th>
                  <th>Order Stage</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((order, index) => (
                  <tr key={order.id}>
                    <th>{index + 1}</th>
                    <td>{order.clientName}</td>
                    <td>{order.phoneNo}</td>
                    <td>{order.orderCode}</td>
                    <td>{order.totalAmount}</td>
                    <td>{order.orderStage}</td>
                    {/* Details button  */}
                    <td>
                      <Link to={`/adminOrderDetails/${order.id}`}>
                        <button className="btn-xs bg-blue-500 rounded-lg font-semibold uppercase hover:bg-blue-800 hover:text-white">
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminOrderList;
