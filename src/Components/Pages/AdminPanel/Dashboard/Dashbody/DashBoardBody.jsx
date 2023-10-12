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
            <div className="mt-24 mb-5"><NumberStatus /></div>
                <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div><Transaction /></div>
                    <div><EventList /></div>
                </div>
            <AmountSecion />
            <PaymentStatus />
        </div>
    );
};

export default DashBoardBody;