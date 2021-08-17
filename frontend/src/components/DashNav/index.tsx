import { Link } from "react-router-dom";
import { useState } from "react";
// import LoginModal from "../LoginModal";


const DashNav: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }

  const mobileNavClick = () => {
    // The exclamation mark means a developer knows there is a button element.( The value is not null )
    const mobileLinksEl = document.getElementById("mobile-Links")!;

    if (mobileLinksEl.style.display === "block") {
      mobileLinksEl.style.display = "none";
    } else {
      mobileLinksEl.style.display = "block";
    }
  };
 

  return (
    <header className="adminNav-header">
      <h5>360 Shopping</h5>
      <nav className="adminNav-mobile">
        <a href="#test" id="mobile-menu" onClick={mobileNavClick}>
          <i className="fas fa-bars"></i>
        </a>
      </nav>
      <div id="mobile-Links">
      <Link onClick={toggleModal}  to="/login"> Login</Link>
      <Link onClick={mobileNavClick} to="/contact">Contact Us</Link>
        
      </div>
      <nav className="adminNav-desktop">
        <ul>
          <li>
            <Link onClick={toggleModal} to="/login"> Login</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DashNav;
