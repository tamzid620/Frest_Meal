import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";

const AdminOrderList = () => {



  return (
    <div className="text-yellow-500 bg-gray-300 min-h-screen">
      <div className="fixed z-10 w-full">
        <SearchPanel />
      </div>

      {/* main section  */}
      <div className="flex justify-center ">
        <div className="mt-24 w-full">
          <h1 className="text-3xl flex justify-center text-black uppercase">
            Order List
          </h1>
          <hr className="mt-1 border border-black " />
          {/* table section  */}
        </div>
      </div>
    </div>
  );
};

export default AdminOrderList;
