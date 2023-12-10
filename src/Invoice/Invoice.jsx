import "./Invoice.css";
import mLogo from "../../public/icons/Restaurant.png";
import ReactToPrint from "react-to-print";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Layout/Loading";
import axios from "axios";

const Invoice = () => {
  const ref = useRef();
  const [loading,setLoading] =useState(false);
  const [orderDetails, setOrderDetails] = useState([]);
  const { orderId } = useParams();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    // get method -------------------
    setLoading(true)
    axios
      .get(`https://backend.ap.loclx.io/api/order-detail/${orderId}`, {
        headers: headers,
      })
      .then((res) => {
        setOrderDetails(res.data.order);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [orderId]);

  return (
    <div>
    {!loading &&<div className="bg-white">
      <div ref={ref}>
        <h1 className="school-title">Fresh Meal</h1>
        <div className="top-container">
          {/* protection division        */}
          <div className="invoice-parent">
            {/* mlogo image  and Invoice text  */}
            <div className="mLogo-Invoice">
              <img className="mLogo" src={mLogo} alt="" />
              {/* <h1 className="invoice hidden">Invoice</h1> */}
              <div className="invoice-title">
                <p>
                  Invoice No. <span>12345</span>
                </p>
                <p>19 Nov 2023</p>
              </div>
            </div>
            {/* billed to and billed date  */}
            <div className="billedTo-billedDate">
              <div className="billedTo">
                <h1>Billed To:</h1>
                <p>Name: Adnan Bro</p>
                <p> Registration No :666666666</p>
                <p>Roll: 10</p>
              </div>
              <div className="billedDate">
                {/* <h1>Billed To:</h1> */}
                <p>A.B.C School and College</p>
                <p>+01666666666</p>
                <p>Zakir Hussain road,Khulsi,Chattogram</p>
                {/* <p>Invoice No. <span>12345</span></p>
              <p>19 Nov 2023</p> */}
              </div>
            </div>
            {/* table  */}
            <div className="items">
              <hr className="hr" />

              {/* <table className="table">
            <div className="table-head-div">
            <div>
              <th>items</th>
            </div>
            <div>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </div>
            </div>
            <hr className="hr" />
            <div className="table-row-div">
            <div>
              <td>eggshell</td>
            </div>
            <div>
              <td>1</td>
              <td>$120</td>
              <td>$250</td>
            </div>
            </div>
            <hr className="hr" />
          </table> */}

              <table className="table">
                <thead>
                  <tr>
                    <th>Items</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>eggshell</td>
                    <td>1</td>
                    <td>$120</td>
                    <td>$250</td>
                  </tr>

                  <tr>
                    <td className="total-div" colSpan={3}>
                      Subtotal:
                    </td>
                    <td>$370</td>
                  </tr>
                  <tr>
                    <td className="total-div" colSpan={3}>
                      {" "}
                      Tax:
                    </td>
                    <td>$130</td>
                  </tr>
                  <tr>
                    <td className="total-div" colSpan={3}>
                      Total:
                    </td>
                    <td>$500</td>
                  </tr>
                </tbody>
              </table>
              {/* thank you text  */}
              <h1 className="ThankYou">Thank You !</h1>
              {/* payment information  */}
              <div className="paymentInformaiton">
                {/* payment div  */}
                <div>
                  <p>Briard Bank </p>
                  <p>Account Name: Adnan Bro</p>
                  <p>Account No: 123-456-789</p>
                  <p>Pay by 19 Nov 2023</p>
                </div>
                {/* Name div  */}
                <div className="Namediv">
                  <h1>Adnan Bro</h1>
                  <p>123 Aturar Dipo, Chattagram 12356</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* print button ------------------------------ */}
      <div className="flex justify-center my-10">
        <ReactToPrint
          trigger={() => (
            <button className="btn bg-blue-900 text-white border border-black shadow-lg shadow-black hover:text-black hover:border-black ">
              Print
            </button>
          )}
          content={() => ref.current}
        ></ReactToPrint>
      </div>
      {/* print button ------------------------------ */}
    </div>}
    {loading && <Loading/>}
    </div>
  );
};

export default Invoice;
