import Carousel from "../components/Carousel";
import DashNav from "../components/DashNav";
import DashShopItems1 from "../components/DashShopItems1";
import DashShopItems2 from "../components/DashShopItems2";

export const DashContainer: React.FC = () => {
  return (
    <>
      <DashNav />

      <Carousel />

      <DashShopItems1 />

      <DashShopItems2/>
    </>
  );
};
export default DashContainer;
