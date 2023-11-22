import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";

const AdminSubCategory = () => {
    return (
        <div className="text-yellow-500 ">
        <div className="fixed z-10 w-full">
          <SearchPanel />
        </div>
  
         {/* main section  */}
         <div className="flex justify-center bg-white">
         <div className="mt-24 ">
          <h1 className="text-3xl  text-black uppercase">Sub Category</h1>
          <hr className=" border border-black " />
        </div>
        </div>

        </div>
    );
};

export default AdminSubCategory;