import DashBoardBody from "./Dashboard/Dashbody/DashBoardBody";
import Drawer from "./Dashboard/Drawer/Drawer";


const AdminPanel = () => {
  return (
    <div className="flex text-yellow-500 bg-gray-300">
      <Drawer/>
      <DashBoardBody/>
    </div>
  );
};

export default AdminPanel;