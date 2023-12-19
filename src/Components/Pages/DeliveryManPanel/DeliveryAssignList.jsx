import { useEffect, useState } from "react";
import Loading from "../../Layout/Loading";
import axios from "axios";
import { Link } from "react-router-dom";

const DeliveryAssignList = () => {
  const [loading, setLoading] = useState(false);
  const [orderAssigns, setOrderAssigns] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };
    setLoading(true);
    axios
      .get("https://backend.ap.loclx.io/api/order-assign-list", {
        headers: headers,
      })
      .then((res) => {
        setOrderAssigns(res.data.assignList);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching delivery men:", error);
      });
  }, []);
  
  // delete section
  const handleDelete = (categoryId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };
    axios
      .delete(`https://backend.ap.loclx.io/api/category-delete/${categoryId}`, {
        headers: headers,
      })
      .then(() => {
        setAdminCaterory((prevCategory) =>
          prevCategory.filter((category) => category.id !== categoryId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Teacher deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload()
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error deleting Teacher",
          text: error.message,
          showConfirmButton: true,
        });
        navigate("/adminCaterory");
      });
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center ">
        <div className="mt-24 w-full">
          <h1 className="text-3xl flex justify-center text-black uppercase">
            Order Assign List
          </h1>
          <hr className="mt-1 mb-10 border border-black " />
          {/* table section  */}
          {!loading && (
            <div className="overflow-x-auto">
              <table className="table table-zebra text-black">
                {/* head */}
                <thead className="bg-gray-600 text-white">
                  <tr>
                    <th></th>
                    <th>Client Name</th>
                    <th>Order Handler</th>
                    <th>Order Stage</th>
                    <th>Order Code </th>
                    <th>Total Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="text-black">
                  {orderAssigns &&
                    orderAssigns.map((assign, index) => (
                      <tr key={assign.id}>
                        <th>{index + 1}</th>
                        <td>{assign.clientName}</td>
                        <td>{assign.orderHandler}</td>
                        <td>{assign.orderStage}</td>
                        <td>{assign.orderCode}</td>
                        <td>{assign.totalAmount}</td>
                        {/* Delevered button  */}
                        <td>
                          
                        <button
                          onClick={() => handleDelete(assign.id)}
                          className="btn-xs bg-red-500 rounded-lg font-semibold uppercase hover:bg-red-800 hover:text-white"
                        >
                          Delivered
                        </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
          {loading && <Loading />}
        </div>
      </div>
    </div>
  );
};

export default DeliveryAssignList;
