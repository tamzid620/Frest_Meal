import AmountSecion from "../AmountSecion/AmountSecion";
import EventList from "../EventList/EventList";
import NumberStatus from "../NumberStatus/NumberStatus";
import PaymentStatus from "../PaymentStatus/PaymentStatus";
import SearchPanel from "../SearchPanel/SearchPanel";
import Transaction from "../Transaction/Transaction";


const DashBoardBody = () => {
    return (
        <div>
            <div className="fixed z-10 w-full max-w-screen-xl"><SearchPanel /></div>
            <div className="mt-24 mb-5 w-full max-w-screen-xl"><NumberStatus /></div>
            <div className="lg:flex  gap-5">
                <div className="col-span-4 lg:col-span-4 sm: mb-5">
                    <Transaction />
                </div>
                <div className="col-span-8 lg:col-span-8">
                    <EventList />
                </div>
            </div>

            <div className="w-full max-w-screen-xl"><AmountSecion /></div>
            <div className="w-full max-w-screen-xl"><PaymentStatus /></div>
        </div>
    );
};

export default DashBoardBody;