import { useState } from "react";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import { useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../../Layout/Loading";

const AdminPressList = () => {

    const [loading,setLoading] =useState(false);
    const [press, setPress] = useState([]);
  
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
        setLoading(true)
        axios
          .get(`https://backend.ap.loclx.io/api/press-list`, {
            headers: headers,
          })
          .then((res) => {
            setPress(res.data.press);
            setLoading(false)
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, []);
// delete section----------------
  const handleDelete = (pressId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    axios
      .delete(`https://backend.ap.loclx.io/api/press-delete/${pressId}`, {
        headers: headers,
      })
      .then((res) => {
        setPress((prevpress) =>
          prevpress.filter((pres) => pres.id !== pressId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error deleting pres",
          text: error.message,
          showConfirmButton: true,
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
            Press List
            </h1>
            <hr className="mt-1 border border-black mb-10" />
            {/* table section  */}
            {!loading && <div className="overflow-x-auto text-black">
                <div className="flex justify-between ms-2 me-2">
                <div>
                {/* "" */}
                </div>
                {/* add button  */}
                <div >
                  <Link to="/adminpresAdd">
                    <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">
                    Add
                  </button>
                  </Link>
                </div>
                </div>
              <table className="table table-zebra">
                {/* head */}
                <thead className="bg-gray-600 text-white">
                  <tr>
                    <th>index</th>
                    <th>image</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {press.map((pres, index) => (
                    <tr key={pres.id}>
                      <th>{index + 1}</th>
                      <td><img className="w-[50px] h-[50px]" src={pres.image} alt="" /></td>
                      <td>{pres.name}</td>
                      <td>{pres.phoneNo}</td>
                      <td>{pres.desctiption}</td>
                      <td>
                      <div className="flex items-center gap-2">
                          {/* Edit button  */}
                          <Link to=
                            {`/adminpresEdit/${pres.id}`}
                          // "/adminTeachersEdit"
                          >
                            <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">
                              Edit
                            </button>
                          </Link>
                          {/* Delete button   */}
                          <button
                            onClick={() => handleDelete(pres.id)}
                            className="btn-xs bg-red-500 rounded-lg font-semibold uppercase hover:bg-red-800 hover:text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>}
            {loading && <Loading/>}
            
          </div>
        </div>
      </div>
    );
};

export default AdminPressList;