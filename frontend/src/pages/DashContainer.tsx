// import Carousel from "../components/Carousel";
// import DashNav from "../components/DashNav";
// import DashShopItems1 from "../components/DashShopItems1";
import { useState } from "react";
import ModalWrapper from "../components/ModalWrapper";


const DashContainer: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible);
  };


  return (
    <>
     
      {/* <Carousel />

      <DashShopItems1 /> */}
      <ModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal}/>

      
    </>
  );
};
export default DashContainer;
