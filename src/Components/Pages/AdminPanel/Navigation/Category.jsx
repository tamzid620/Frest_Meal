import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="text-yellow-500 bg-gray-300 min-h-screen">
      <div className="fixed z-10 w-full">
        <SearchPanel />
      </div>

      {/* main section  */}
      <div className="flex justify-center ">
        <div className="mt-24 w-full">
          <h1 className="text-3xl flex justify-center text-black uppercase">
            Category
          </h1>
          <hr className="mt-1 border border-black " />
          {/* table section  */}
          <div className="overflow-x-auto  mt-10 mx-2 text-black">
            {/* search and add field  */}
            <div className="flex justify-between items-center mx-3 mt-5 ">
              {/* search input  */}
              <div className="form-control ms-3 my-3">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered"
                  />
                  <button className="btn btn-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* add button  */}
              <div>
                <Link to="/AdminategoryAdd">
                  <button className="btn-sm bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">
                    Add
                  </button>
                </Link>
              </div>
            </div>

            <table className="table table-zebra">
              {/* head */}
              <thead className="bg-gray-600 text-white">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td className="w-1/4 flex justify-center py-2">
                    <div className="flex gap-2">
                      {/* Edit button  */}
                      <Link to="/AdminCategoryEdit">
                        <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">
                          Edit
                        </button>
                      </Link>
                      {/* Delete button   */}
                      <button
                        onClick=""
                        className="btn-xs bg-red-500 rounded-lg font-semibold uppercase hover:bg-red-800 hover:text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
