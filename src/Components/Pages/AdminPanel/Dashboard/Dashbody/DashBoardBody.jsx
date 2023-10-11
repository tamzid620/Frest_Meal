import AmountSecion from "../AmountSecion/AmountSecion";
import EventList from "../EventList/EventList";
import NumberStatus from "../NumberStatus/NumberStatus";
import PaymentStatus from "../PaymentStatus/PaymentStatus";
import SearchPanel from "../SearchPanel/SearchPanel";
import Transaction from "../Transaction/Transaction";


const DashBoardBody = () => {
    return (
        <div>
            <SearchPanel/>
            <NumberStatus />
                <div>
                    <Transaction />
                    <EventList />
                </div>
            <AmountSecion />
            <PaymentStatus />
        </div>
    );
};

export default DashBoardBody;