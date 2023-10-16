import AmountSecion from "./Dashboard/AmountSecion/AmountSecion";
import EventList from "./Dashboard/EventList/EventList";
import NumberStatus from "./Dashboard/NumberStatus/NumberStatus";
import PaymentStatus1 from "./Dashboard/PaymentStatus/PaymentStatus1";
import SearchPanel from "./Dashboard/SearchPanel/SearchPanel";
import Transaction from "./Dashboard/Transaction/Transaction";

const AdminPanel = () => {
  return (
    <div className="text-yellow-500">
      <div className="fixed z-10 w-full"><SearchPanel /></div>
      <div className="flex justify-center">
        <div>
          <div className="mt-24 mb-10 w-full max-w-screen-xl"><NumberStatus /></div>
          <div className="lg:flex  gap-5">
            <div className="col-span-4 lg:col-span-4 sm: mb-10">
              <Transaction />
            </div>
            <div className="col-span-8 lg:col-span-8 mb-10">
              <EventList />
            </div>
          </div>
          <div className="w-full max-w-screen-xl mb-10"><AmountSecion /></div>
          <div className="w-full max-w-screen-xl mb-10"><PaymentStatus1 /></div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;