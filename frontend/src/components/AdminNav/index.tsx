const AdminNav: React.FC = () => {

    return (
        <header className="adminNav-header">
        <h5>Amin Page</h5>
        <nav className="adminNav-mobile">
            <a href="#test"><i className="fas fa-bars"></i></a>
        </nav>
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