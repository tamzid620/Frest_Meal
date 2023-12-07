import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import { MdCheckCircle } from "react-icons/md";

const AdminOrderProcessing = () => {
  return (
    <div className="text-yellow-500 bg-gray-700 min-h-screen">
      <div className="fixed z-10 w-full">
        <SearchPanel />
      </div>

      {/* main section  */}
      <div className="flex justify-center ">
        <div className="mt-24 w-full ">
          <h1 className="text-3xl flex justify-center text-white uppercase">
            Order Processing
          </h1>
          <hr className="mt-1 border border-white mb-10" />
          {/* information section  */}
          <div className="grid sm: grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10">
            {/* review section  */}
            <div className="text-white flex justify-center uppercase">
              <div>
                <p className="flex justify-center mb-1">
                  <MdCheckCircle size={30} className = "text-green-500" />
                </p>
                <p className="font-bold text-2xl uppercaseflex justify-center ">
                  Review
                </p>
                <p className="btn-xs w-[60px] ms-[16px] bg-slate-800 text-white rounded-2xl mt-2 flex items-center justify-center">
                  step-1
                </p>
              </div>
            </div>

            {/* Cooking section  */}
            <div className="text-white flex justify-center uppercase">
              <div>
                <p className="flex justify-center mb-1">
                  <MdCheckCircle size={30} className = "text-green-500" />
                </p>
                <p className="font-bold text-2xl uppercaseflex justify-center ">
                  Cooking
                </p>
                <p className="btn-xs w-[60px] ms-[28px] bg-slate-800 text-white rounded-2xl mt-2 flex items-center justify-center">
                  step-2
                </p>
              </div>
            </div>

            {/* On the Way section  */}
            <div className="text-white flex justify-center uppercase">
              <div>
                <p className="flex justify-center mb-1">
                  <MdCheckCircle size={30} className = "text-green-500" />
                </p>
                <p className="font-bold text-2xl uppercaseflex justify-center ">
                  On the Way
                </p>
                <p className="btn-xs w-[60px] ms-[45px] bg-slate-800 text-white rounded-2xl mt-2 flex items-center justify-center">
                  step-3
                </p>
              </div>
            </div>

            {/* Delivered section  */}
            <div className="text-white flex justify-center uppercase">
              <div>
                <p className="flex justify-center mb-1">
                  <MdCheckCircle size={30} className = "text-green-500" />
                </p>
                <p className="font-bold text-2xl uppercaseflex justify-center ">
                  Delivered
                </p>
                <p className="btn-xs w-[60px] ms-[30px] bg-slate-800 text-white rounded-2xl mt-2 flex items-center justify-center">
                  step-4
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderProcessing;
