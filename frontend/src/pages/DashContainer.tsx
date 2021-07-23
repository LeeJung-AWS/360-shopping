import Carousel from "../components/Carousel";
import DashNav from "../components/DashNav";
import DashShopItems1 from "../components/DashShopItems1";


export const DashContainer: React.FC = () => {
  return (
    <>
      <DashNav />

      <Carousel />

      <DashShopItems1 />

    </>
  );
};
export default DashContainer;
