const AdminNav: React.FC = () => {

    return (
        <header className="adminNav-header">
        <h5>Amin Page</h5>
        <nav className="adminNav-mobile">
            <a href=""><i className="fas fa-bars"></i></a>
        </nav>
        <nav className="adminNav-desktop">
            <ul>
                <li>
                    <a href="#">Marketing</a>
                </li>
                <li>
                    <a href="#">Add New Inventory</a>
                </li>
                <li>
                    <a href="#">Order history</a>
                </li>
                <li>
                    <a href="#">Messages</a>
                </li>
                <li>
                    <a href="#">Print reports</a>
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default AdminNav;