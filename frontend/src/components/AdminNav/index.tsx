// Style: sass/layout/_adminNav.scss

import { Link } from "react-router-dom";

const AdminNav: React.FC = () => {

    // In Mobile Size, display or hide Navigation Menu
    const mobileNavClick = () => {
        const mobileLinksEl = document.getElementById('mobile-Links')!;  // The exclamation mark means a developer knows there is a button element.( The value is not null )
        if (mobileLinksEl.style.display === "block") {
            mobileLinksEl.style.display = "none";
          } else {
            mobileLinksEl.style.display = "block";
          }
    }

    return (
    <header className="adminNav-header">
        <Link id="admin-page-btn" to="/adminPage">Admin Page</Link>
        <nav className="adminNav-mobile">
            <a href="#test" id="mobile-menu" onClick={mobileNavClick}><i className="fas fa-bars"></i></a>
        </nav>
        <div id="mobile-Links">
                <Link to="/adminPage/marketing">Marketing</Link>
                <Link to="/adminPage/inventory">Inventory</Link>
                <Link to="/adminPage/orderHistory">Order history</Link>
                <Link to="/adminPage/messages">Messages</Link>
                <Link to="/adminPage/printReports">Print reports</Link>
            </div>
        <nav className="adminNav-desktop">
            <ul>
                <li>
                    <Link to="/adminPage/marketing">Marketing</Link>
                </li>
                <li>
                    <Link to="/adminPage/addNewInventory">Add New Inventory</Link>
                </li>
                <li>
                    <Link to="/adminPage/orderHistory">Order history</Link>
                </li>
                <li>
                    <Link to="/adminPage/messages">Messages</Link>
                </li>
                <li>
                    <Link to="/adminPage/printReports">Print reports</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default AdminNav;