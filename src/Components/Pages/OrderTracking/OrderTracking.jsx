import aboutPhoto from "../../../../public/images/contactUs.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const OrderTracking = () => {
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
        className="flex justify-center "
      >
        {/* title tag */}
        <div className="bg-black opacity-70 w-full h-full flex flex-col justify-center items-center ">
          <h1
            style={{ fontFamily: "Mooli, sans-serif" }}
            className="text-3xl text-white font-semibold "
          >
            Your Orders
          </h1>
          <img src="../../../../public/icons/hr.svg" alt="" />
        </div>
      </div>
      {/* information section  */}
      <div className="max-w-screen-xl mx-auto overflow-x-auto text-black">
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
  );
};

export default OrderTracking;
