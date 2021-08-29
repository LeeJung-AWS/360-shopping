// Style: sass/layout/_adminNav.scss

import { Link } from "react-router-dom";

interface ChildProps {
    setAdminPageState: () => void
}

const AdminNav: React.FC<ChildProps> = ({ setAdminPageState }) => {

    // In Mobile Size, display or hide Navigation Menu
    const mobileNavClick = () => {
        const mobileLinksEl = document.getElementById('mobile-Links')!;  // The exclamation mark means a developer knows there is a button element.( The value is not null )
        // console.log(mobileLinksEl);
        if (mobileLinksEl.style.height === '100%') {
            mobileLinksEl.style.height = '0';
            mobileLinksEl.style.padding = '0';
          } else {
            mobileLinksEl.style.height = '100%';
            mobileLinksEl.style.padding = '6rem 2rem';
          }
        
    }

    function onclickMenu (event: any) {
        const mobileLinksEl = document.getElementById('mobile-Links')!;
        mobileLinksEl.style.height = '0';
        mobileLinksEl.style.padding = '0';
        if(event.target.textContent === 'Home Page'){
            setAdminPageState();
        }
    }

    function onClickAdminLink() {
        setAdminPageState();
    }

    return (
    <header className="adminNav-header">
        <Link id="admin-page-btn" to="/adminPage">Admin Page</Link>
        <nav className="adminNav-mobile">
            <a href="#navBar" id="mobile-menu" onClick={mobileNavClick}><i className="fas fa-bars"></i></a>
        </nav>
        <div id="mobile-Links">
                <Link to="/adminPage/marketing" onClick={onclickMenu}>Marketing</Link>
                <Link to="/adminPage/inventory" onClick={onclickMenu}>Inventory</Link>
                <Link to="/adminPage/orderHistory" onClick={onclickMenu}>Order history</Link>
                <Link to="/adminPage/messages" onClick={onclickMenu}>Messages</Link>
                <Link to="/adminPage/printReports" onClick={onclickMenu}>Print reports</Link>
                <Link to="/" style={{color:"red"}} onClick={onclickMenu} >Home Page</Link>
            </div>
        <nav className="adminNav-desktop">
            <ul>
                <li>
                    <Link to="/" style={{color:"red"}} onClick={onClickAdminLink} >Home Page</Link>
                </li>
                <li>
                    <Link to="/adminPage/marketing">Marketing</Link>
                </li>
                <li>
                    <Link to="/adminPage/inventory">Inventory</Link>
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