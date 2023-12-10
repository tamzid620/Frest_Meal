import Banner from "../../Shared/Banner/Banner";
import Cattering from "../../Shared/Cattering/Cattering";
import SpecialMenu from "../../Shared/Menu/SpecialMenu";
import OnlineOrder from "../../Shared/OnlineOrder/OnlineOrder";
import TodaysDeals from "../../Shared/TodaysDeals/TodaysDeals";

const Home = () => {
  return (
    <div>
      <Banner />
      <SpecialMenu />
      <OnlineOrder />
      <Cattering />
      <TodaysDeals />
    </div>
  );
};

export default Home;
