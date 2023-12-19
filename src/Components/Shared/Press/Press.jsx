import aboutPhoto from "../../../../public/images/contactUs.jpg";
import icon1 from "../../../../public/icons/start-filled.svg";
import icon2 from "../../../../public/icons/star-grey.svg";
import { BsFillCartPlusFill } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Rating from "react-rating";
import Swal from "sweetalert2";

const Press = () => {

    const [menus, setMenus] = useState([]);
  
  
    useEffect(() => {
      // get method --------------------
      axios
        .get("https://backend.ap.loclx.io/api/food-item-list")
        
        .then((res) => {
          setMenus(res.data.foodItem);
        })
        .catch((error) => {
          console.error("Error fetching menu data:", error);
        });
    }, []);
    console.log(menus);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${aboutPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
        }}
        className="flex justify-center"
      >
        {/* title tag */}
        <div className="bg-black opacity-70 w-full h-full flex flex-col justify-center items-center">
          <h1
            style={{ fontFamily: "Mooli, sans-serif" }}
            className="text-3xl text-white font-semibold "
          >
           Press
          </h1>
          <img src="../../../../public/icons/hr.svg" alt="" />
        </div>
      </div>
      {/* information section */}
      <div>

      </div>
    </div>
  );
};

export default Press;
