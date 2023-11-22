import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";

const FoodItem = () => {
    return (
        <div className="text-yellow-500 ">
        <div className="fixed z-10 w-full">
          <SearchPanel />
        </div>
  
        {/* main section  */}
        <div className="flex justify-center bg-white">
        <div className="mt-24 ">
          <h1 className="text-3xl  text-black uppercase">Food Item</h1>
          <hr className=" border border-black " />
          {/* table section  */}
          <div>

          </div>
        </div>
        </div>

        </div>
    );
};

export default FoodItem;