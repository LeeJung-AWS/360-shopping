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
                    <Link to={`/${link}`} onClick={onclickMenu}>{linkTitle[index]}</Link>
                )
            })}
        </div>
        <nav className="navBar-desktop">
            <ul>
                {links.map((link, index) => {
                    return(
                        <li>
                            <Link to={`/${link}`} onClick={onclickMenu}>{linkTitle[index]}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </header>
    );
};

export default Navbar;