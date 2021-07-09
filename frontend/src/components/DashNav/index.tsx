const DashNav: React.FC = () => {
  const mobileNavClick = () => {
    // The exclamation mark means a developer knows there is a button element.( The value is not null )
    const mobileLinksEl = document.getElementById("mobile-Links")!;

    if (mobileLinksEl.style.display === "block") {
      mobileLinksEl.style.display = "none";
    } else {
      mobileLinksEl.style.display = "block";
    }
  };

  return (
    <header className="adminNav-header">
      <h5>360 Shopping</h5>
      <nav className="adminNav-mobile">
        <a href="#test" id="mobile-menu" onClick={mobileNavClick}>
          <i className="fas fa-bars"></i>
        </a>
      </nav>
      <div id="mobile-Links">
        <a href="#mobile-Links02">Login</a>
        <a href="#mobile-Links03">Contact Us</a>
        
      </div>
      <nav className="adminNav-desktop">
        <ul>
          <li></li>
          <li>
            <a href="#test">Link</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DashNav;
