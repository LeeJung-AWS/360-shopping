// Style: sass/layout/_adminNav.scss

import { Link } from "react-router-dom";

const AdminNav: React.FC = () => {

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

    function onclickMenu () {
        const mobileLinksEl = document.getElementById('mobile-Links')!;
        mobileLinksEl.style.height = '0';
        mobileLinksEl.style.padding = '0';
    }

    return (
    <header className="adminNav-header">
        <Link id="admin-page-btn" to="/">360-Shopping</Link>
        <nav className="adminNav-mobile">
            <a href="#navBar" id="mobile-menu" onClick={mobileNavClick}><i className="fas fa-bars"></i></a>
        </nav>
        <div id="mobile-Links">
                <Link to="/login" onClick={onclickMenu}>Login</Link>
                <Link to="/contact" onClick={onclickMenu}>Contact Us</Link>
            </div>
        <nav className="adminNav-desktop">
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default AdminNav;