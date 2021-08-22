// Style: sass/layout/_navBar.scss

import { Link } from "react-router-dom";

interface NavbarDatatype {
    header: string;
    links: string[];
    linkTitle: string[];
}

const Navbar: React.FC<NavbarDatatype> = ({header, links, linkTitle}) => {

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
        <Link id="navBar-page-btn" to="/">{header}</Link>
        <nav className="navBar-mobile">
            <a href="#navBar" id="mobile-menu" onClick={mobileNavClick}><i className="fas fa-bars"></i></a>
        </nav>
        <div id="navBar-mobile-Links">
            {links.map((link, index) => {
                return(
                    <Link to={`/${link}`} key={link} onClick={onclickMenu}>{linkTitle[index]}</Link>
                )
            })}
        </div>
        <nav className="navBar-desktop">
            <ul>
                {links.map((link, index) => {
                    return(
                        <li key={linkTitle[index]}>
                            <Link to={`/${link}`} onClick={onclickMenu}>{linkTitle[index]}</Link>
                        </li>
                    )
                })}
                <li className='dropdown'>
                    <Link to='/test'><i className="far fa-user dropbtn" ></i></Link>
                    <div className="dropdown-content">
                        <div className="hello-userName">Hello User</div>
                        <Link to ="/">Sign Out</Link>
                        <Link to="#">My Orders</Link>
                        <div className="myHr"></div>
                        <Link to="#">My Message</Link>
                        <Link to="#">Recently Viewed</Link>
                        <Link to="/sign">Sign In / Register</Link>
                    </div>
                </li>
                <li className='dropdown'>
                    <Link to='/test'><i className="fas fa-shopping-cart"></i> 0</Link>
                    <div className="dropdown-content">
                        {/* <Link to="#">CART BOX</Link> */}
                        <span style={{"color":"rgb(100, 100, 100)"}}>
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