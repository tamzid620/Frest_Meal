import Banner from "../../Shared/Banner/Banner";
import Cattering from "../../Shared/Cattering/Cattering";
import SpecialMenu from "../../Shared/Menu/SpecialMenu";
import Menu from "../../Shared/Menu/SpecialMenu";
import OnlineOrder from "../../Shared/OnlineOrder/OnlineOrder";
import TodaysDeals from "../../Shared/TodaysDeals/TodaysDeals";
import SetDemo from "../SetDemo";


const Home = () => {
    return (
        <div>
            <Banner/>
            <SpecialMenu/>
            {/* <SetDemo/> */}
            <OnlineOrder/>
            <Cattering/>
            <TodaysDeals/>
        </div>
    );
};

export default Home;