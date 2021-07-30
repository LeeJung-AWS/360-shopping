const ContactForm: React.FC = () => {
  return (
    <>
      <div className="container">
        <form className="form-button " action="action_page.php">
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="John"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Item SKU</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                placeholder="KM10983464"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">What's on your mind?</label>
            </div>
            <div className="col-75">
              <textarea
                id="subject"
                name="subject"
                className="textarea"
                placeholder="I'd like more information about....."
              ></textarea>
            </div>
          </div>
          <div className="row form-button">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
