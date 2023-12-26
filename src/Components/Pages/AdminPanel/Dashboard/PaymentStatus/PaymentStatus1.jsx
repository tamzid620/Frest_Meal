import './PaymentStatus.js'
import './PaymentStatus.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

const PaymentStatus1 = () => {

  const navigate = useNavigate();
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
      navigate("/adminlogin");
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      const headers = {
        accept: "application/json",
        Authorization: "Bearer " + user.token,
      };
      // get orderItem data ---------------
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
    }, [navigate]);
    const deliveredOrders = orderList.filter(order => order.orderStage === 'delivered');

  return (
    <div className='text-white border-t-2 border-yellow-500 shadow-lg shadow-yellow-500 rounded-xl mb-10'>
      <div className=' division col-12 bg-gray-800 mb-5 rounded-xl p-3' role="region" aria-labelledby="Cap1" tabIndex="0">
        <table className='table w-full rounded-xl flex items-center justify-center'>
          <h4 className="font-semibold text-2xl text-yellow-500 mb-5">Delivery Status</h4>

<div className="overflow-x-auto">
              <table className="table table-zebra text-black">
                {/* head */}
                <thead className="bg-gray-700 text-white">
                  <tr>
                    <th>index</th>
                    <th>Client Name</th>
                    <th>phoneNo</th>
                    <th>OrderCode</th>
                    <th>Total Amount</th>
                    <th>Order Stage</th>
                  </tr>
                </thead>
                <tbody className='bg-gray-400'>
                {deliveredOrders.slice(0, 5).map((order, index) => (
                      <tr key={order.id}>
                        <th>{index + 1}</th>
                        <td>{order.clientName}</td>
                        <td>{order.phoneNo}</td>
                        <td>{order.orderCode}</td>
                        <td>{order.totalAmount}</td>
                        <td>{order.orderStage}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

        </table>
      </div>
    </div>
  );
};

export default PaymentStatus1;