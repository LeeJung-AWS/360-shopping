// Style: sass/layout/_navBar.scss

import { Link } from "react-router-dom";


const Navbar: React.FC = () => {

    // In Mobile Size, display or hide Navigation Menu
    const mobileNavClick = () => {
        const navBarmobileLinksEl = document.getElementById('navBar-mobile-Links')!;  // The exclamation mark means a developer knows there is a button element.( The value is not null )
        // console.log(navBarmobileLinksEl);
        if (navBarmobileLinksEl.style.height === '100%') {
            navBarmobileLinksEl.style.height = '0';
            navBarmobileLinksEl.style.padding = '0';
          } else {
            navBarmobileLinksEl.style.height = '100%';
            navBarmobileLinksEl.style.padding = '6rem 2rem';
          }
        
    }

    function onclickMenu () {
        const navBarmobileLinksEl = document.getElementById('navBar-mobile-Links')!;
        navBarmobileLinksEl.style.height = '0';
        navBarmobileLinksEl.style.padding = '0';
    }

    return (
    <header className="navBar-header">
        <Link id="navBar-page-btn" to="/">360-Shopping</Link>
        <nav className="navBar-mobile">
            <Link to='/cart'><i className="fas fa-shopping-cart" id="mobile-cart-menu"></i></Link>
            <Link to="" id="navBar-mobile-menu" onClick={mobileNavClick}><i className="fas fa-bars"></i></Link>
        </nav>
        <div id="navBar-mobile-Links">
            <Link to='/women' onClick={onclickMenu}>WOMEN</Link>
            <Link to='/kids' onClick={onclickMenu}>KIDS</Link>
            <Link to='/men' onClick={onclickMenu}>MEN</Link>
            <Link to='/beauty' onClick={onclickMenu}>BEAUTY</Link>
            <Link to='/login' onClick={onclickMenu}>LOGIN</Link>
            <Link to='/adminPage' style={{color:"red"}}  onClick={onclickMenu}>ADMIN PAGE</Link>
        </div>
        <nav className="navBar-desktop">
            <ul>
                <li>
                    <Link to='/women' onClick={onclickMenu}>WOMEN</Link>
                </li>
                <li>
                    <Link to='/kids' onClick={onclickMenu}>KIDS</Link>
                </li>
                <li>
                    <Link to='/men' onClick={onclickMenu}>MEN</Link>
                </li>
                <li>
                    <Link to='/beauty' onClick={onclickMenu}>BEAUTY</Link>
                </li>
                <li>
                    <Link to='/adminPage' style={{color:"red"}} onClick={onclickMenu}>ADMIN PAGE</Link>
                </li>
            </ul>
            <ul>
                <li className='dropdown'>
                    <Link to='/test'><i className="far fa-user" ></i></Link>
                    <div className="dropdown-content">
                        <div className="hello-userName">Hello User</div>
                        <Link to ="/">Sign Out</Link>
                        <div className="myHr"></div>
                        <Link to="#">My Orders</Link>
                        <Link to="#">My Message</Link>
                        <Link to="#">Recently Viewed</Link>
                        <Link to="/sign">Sign In / Register</Link>
                    </div>
                </li>
                <li className='dropdown'>
                    <Link to='/test'><i className="fas fa-shopping-cart"></i> 0</Link>
                    <div className="dropdown-content">
                        <span>
                            <span>Shopping Bag is Empty</span>
                            Welcome back! If you had items in your shopping bag, we have saved them for you. You can <Link to="/sign" style={{"float":"right"}}>SIGN IN</Link>now to see them, or whenever you're ready to check out.
                        </span>
                    </div>
                </li>
                <li className='dropdown'>
                    <Link to="/"><i className="far fa-heart"></i> 0</Link>
                    <div className="dropdown-content">
                        <Link to="#">Favorite Item</Link>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default Navbar;