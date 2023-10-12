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