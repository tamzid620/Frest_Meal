import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const DeliveryManPanel = () => {


    const navigate = useNavigate();
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
      }
    }, [navigate]);
    
    const handleClick = () => {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "we are working for this component",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <button 
            onClick={handleClick}
            className="bg-yellow-500 hover:bg-yellow-700 hover:text-black text-gray-500 font-bold py-2 px-4 rounded">
                Delivery
            </button>
        </div>
    );
};

export default DeliveryManPanel;