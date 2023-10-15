import { BsBoxSeamFill  } from "react-icons/bs";
import { BiSolidShoppingBags } from "react-icons/bi";
import { LuMonitor } from "react-icons/lu";

const AmountSecion = () => {
  return (
    <div>
      <div className="row  flex justify-between">
      {/* Total Amount Debit */}
        <div className="flex items-center bg-black px-14 py-10 rounded-xl">
        <div className="col-sm-4 ">
              <h5 className="text-lg text-white font font-semibold mb-2">Total Amount Debit</h5>
          <div className="flex items-center gap-10">
 {/* text part  */}
            <div>
              <div className="flex items-center">
                <h2 className="font-bold text-3xl">$32123</h2>
                <p className="text-success ms-2 font-medium">+3.5%</p>
              </div>
              <h6 className="text-gray-400 font-weight-normal">11.38% Since last month</h6>
            </div>
{/* icon part  */}
            <div>
              <BsBoxSeamFill size={55} className="text-blue-500"/>
            </div>
          </div>
        </div>
        </div>
        {/* Total Amount Credit  */}
        <div className="flex items-center bg-black px-14 py-10  rounded-xl">
        <div className="col-sm-4 ">
              <h5 className="text-lg text-white font font-semibold mb-2">Total Amount Credit</h5>
          <div className="flex items-center gap-10">
 {/* text part  */}
            <div>
              <div className="flex items-center">
                <h2 className="font-bold text-3xl">$45850</h2>
                <p className="text-success ms-2 font-medium">+8.3%</p>
              </div>
              <h6 className="text-gray-400 font-weight-normal">9.61% Since last month</h6>
            </div>
{/* icon part  */}
            <div>
              <BiSolidShoppingBags size={55} className="text-red-500"/>
            </div>
          </div>
        </div>
        </div>
        {/* Purchase */}
        <div className="flex items-center bg-black px-14 py-10  rounded-xl">
        <div className="col-sm-4 ">
              <h5 className="text-lg text-white font font-semibold mb-2">Purchase</h5>
          <div className="flex items-center gap-10">
 {/* text part  */}
            <div>
              <div className="flex items-center">
                <h2 className="font-bold text-3xl">$2039</h2>
                <p className="text-success ms-2 font-medium">-2.1%</p>
              </div>
              <h6 className="text-gray-400 font-weight-normal">2.27% Since last month</h6>
            </div>
{/* icon part  */}
            <div>
              <LuMonitor size={55} className="text-green-500"/>
            </div>
          </div>
        </div>
        </div>



      </div>
    </div>
  );
};

export default AmountSecion;