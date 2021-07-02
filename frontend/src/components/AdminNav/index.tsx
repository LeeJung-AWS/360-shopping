const AdminNav: React.FC = () => {

    const mobileNavClick = () => {
        // The exclamation mark means a developer knows there is a button element.( The value is not null )
        const mobileLinksEl = document.getElementById('mobile-Links')!;

        if (mobileLinksEl.style.display === "block") {
            mobileLinksEl.style.display = "none";
            
          } else {
            mobileLinksEl.style.display = "block";
          }
    }

    return (
        <header className="adminNav-header">
        <h5>Amin Page</h5>
        <nav className="adminNav-mobile">
            <a href="#test" id="mobile-menu" onClick={mobileNavClick}><i className="fas fa-bars"></i></a>
        </nav>
        <div id="mobile-Links">
                <a href="#mobile-Links01">Marketing</a>
                <a href="#mobile-Links02">Add New Inventory</a>
                <a href="#mobile-Links03">Order history</a>
                <a href="#mobile-Links04">Messages</a>
                <a href="#mobile-Links05">Print reports</a>
            </div>
        <nav className="adminNav-desktop">
            <ul>
                <li>
                    <a href="#test">Marketing</a>
                </li>
                <li>
                    <a href="#test">Add New Inventory</a>
                </li>
                <li>
                    <a href="#test">Order history</a>
                </li>
                <li>
                    <a href="#test">Messages</a>
                </li>
                <li>
                    <a href="#test">Print reports</a>
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default AdminNav;