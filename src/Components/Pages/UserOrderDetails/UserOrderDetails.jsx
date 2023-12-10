import { MdCheckCircle } from "react-icons/md";
import review from "../../../../public/images/review.gif";
import cooking from "../../../../public/images/cooking.gif";
import onTheWay from "../../../../public/images/onTheWay.gif";
import Delivered from "../../../../public/images/delivered.gif";
import {  useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UserOrderDetails = () => {
  const navigate = useNavigate();
    const { orderId } = useParams();
    const [orderProcess, setorderProcess] = useState([]);
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      const headers = {
        accept: "application/json",
        Authorization: "Bearer " + user.token,
      };
  
      // get method -------------------
      axios
        .get(`https://backend.ap.loclx.io/api/user-order-detail/${orderId}`, {
          headers: headers,
        })
        .then((res) => {
          if(res.data.status=== "401"){
            Swal.fire({
              position: "center",
              icon: "error",
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500
            })
            navigate('/ordertracking')
          }
          if(res.data.status=== "201"){
            setorderProcess(res.data.order);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, [orderId,navigate]);
    console.log(orderProcess);


    return (
        <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-[150px]">
        {/* review section  */}
        <div
          className={`text-white flex justify-center uppercase ${
            orderProcess.orderStage === "pending" ? "animate-pulse" : ""
          }`}
        >
          <div>
            <span
              className={`mb-1 flex justify-center ${
                orderProcess.orderStage === "pending" ? "hidden" : ""
              }`}
            >
              <MdCheckCircle size={30} className="text-green-500" />
            </span>
            <h1
              className={`font-bold text-2xl ${
                orderProcess.orderStage === "pending"
                  ? "text-green-500"
                  : "text-gray-800"
              } uppercase flex justify-center`}
            >
              Review
            </h1>
            <p
              className={`btn-xs w-[60px] ms-[100px] bg-slate-800 text-white rounded-2xl mt-2 flex justify-center items-center ${
                orderProcess.orderStage === "pending" ? "visible" : "text-gray-800"
              }`}
            >
              step-1
            </p>
            <div
              className={`my-[80px] flex justify-center ${
                orderProcess.orderStage === "pending" ? "visible" : "invisible"
              }`}
            >
              <img className="w-[250px] " src={review} alt="" />
            </div>
          </div>
        </div>

        {/* Cooking section  */}
        <div
          className={`text-white flex justify-center uppercase ${
            orderProcess.orderStage === "cooking" ? "animate-pulse" : ""
          }`}
        >
          <div>
            <span
              className={` mb-1 flex justify-center ${
                orderProcess.orderStage === "cooking" ? "hidden" : orderProcess.orderStage === "pending"?"hidden":""
              }`}
            >
              <MdCheckCircle size={30} className="text-green-500" />
            </span>
            <h1
              className={`font-bold text-2xl uppercase flex justify-center ${
                orderProcess.orderStage === "cooking" ? "" : "text-gray-800"
              }`}
            >
              Cooking
            </h1>
            <p
              className={`btn-xs w-[60px] ms-[100px] bg-slate-800 text-white rounded-2xl mt-2 flex items-center justify-center ${
                orderProcess.orderStage === "cooking" ? "visible" : "text-gray-800"
              }`}
            >
              step-2
            </p>
            <div
              className={`my-10 flex justify-center ${
                orderProcess.orderStage === "cooking" ? "visible" : "invisible"
              }`}
            >
              <img className="w-[250px]" src={cooking} alt="" />
            </div>
          </div>
        </div>

        {/* On the Way section  */}
        <div
          className={`text-white flex justify-center uppercase ${
            orderProcess.orderStage === "on the way" ? "animate-pulse" : ""
          }`}
        >
          <div>
            <span
              className={`flex justify-center mb-1 ${
                orderProcess.orderStage === "on the way" ? "hidden" : orderProcess.orderStage === "pending" ? "hidden" :orderProcess.orderStage === "cooking" ? "hidden" :""
              }`}
            >
              <MdCheckCircle size={30} className="text-green-500" />
            </span>
            <h1
              className={`font-bold text-2xl uppercase flex justify-center ${
                orderProcess.orderStage === "on the way" ? "" : "text-gray-800"
              }`}
            >
              On the Way
            </h1>
            <p
              className={`btn-xs w-[60px] ms-[100px] bg-slate-800 text-white rounded-2xl mt-2 flex items-center justify-center ${
                orderProcess.orderStage === "on the way" ? "visible" : "text-gray-800"
              }`}
            >
              step-3
            </p>
            <div
              className={`my-10 flex justify-center ${
                orderProcess.orderStage === "on the way" ? "visible" : "invisible"
              }`}
            >
              <img className="w-[250px]" src={onTheWay} alt="" />
            </div>
          </div>
        </div>

        {/* Delivered section  */}
        <div
          className={`text-white flex justify-center uppercase ${
            orderProcess.orderStage === "delivered" ? "animate-pulse" : ""
          }`}
        >
          <div>
            <span
              className={`hidden mb-1 ${
                orderProcess.orderStage === "delivered" ? "hidden" : ""
              }`}
            >
              <MdCheckCircle size={30} className="text-green-500" />
            </span>
            <h1
              className={`font-bold text-2xl uppercase flex justify-center ${
                orderProcess.orderStage === "delivered" ? "" : "text-gray-800"
              }`}
            >
              Delivered
            </h1>
            <p
              className={`btn-xs w-[60px] ms-[100px] bg-slate-800 text-white rounded-2xl mt-2 flex items-center justify-center ${
                orderProcess.orderStage === "delivered" ? "visible" : "text-gray-800"
              }`}
            >
              step-4
            </p>
            <div
              className={`my-[80px] flex justify-center ${
                orderProcess.orderStage === "delivered" ? "visible" : "invisible"
              }`}
            >
              <img className="w-[250px]" src={Delivered} alt="" />
            </div>
          </div>
        </div>

      </div>
    );
};

export default UserOrderDetails;
