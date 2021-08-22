// Style: sass/layout/_navBar.scss

import { Link } from "react-router-dom";

interface NavbarDatatype {
    header: string;
    links: string[];
}

const Navbar: React.FC<NavbarDatatype> = ({header, links}) => {

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
    <header className="navBar-header">
        <Link id="admin-page-btn" to="/">{header}</Link>
        <nav className="navBar-mobile">
            <a href="#navBar" id="mobile-menu" onClick={mobileNavClick}><i className="fas fa-bars"></i></a>
        </nav>
        <div id="mobile-Links">
            {links.map(link => {
                return(
                    <Link to={`/${link}`} onClick={onclickMenu}>{link}</Link>
                )
            })}
        </div>
        <nav className="navBar-desktop">
            <ul>
                {links.map(link => {
                    return(
                        <li>
                            <Link to={`/${link}`}>{link}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </header>
    );
};

export default Navbar;