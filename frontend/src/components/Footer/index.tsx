const Footer: React.FC = () => {

    return (
        <footer>
        <div className="footer-row">
            <div className = "footer-column">Customer Service</div>
            <div className = "footer-column">
                <p className="footer-title">SNS</p>
                <div className="sns-link">
                <a href="#test"><i className="fab fa-instagram"></i></a>
                <a href="#test"><i className="fab fa-facebook-square"></i></a>
                <a href="#test"><i className="fab fa-youtube"></i></a>
                <a href="#test"><i className="fab fa-twitter"></i></a>
            </div>
            </div>
        {/* </div> */}
        {/* <div className="footer-row"> */}
            <div className = "footer-column company-info">&#169; 2021 360-Shopping All Rights Reserved</div>
            <div className = "footer-column">
                <p className="footer-title">Payment</p>
                <div className="payment-link">
                    <p><i className="fab fa-cc-visa"></i></p>
                    <p><i className="fab fa-cc-mastercard"></i></p>
                    <p><i className="fab fa-cc-paypal"></i></p>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;