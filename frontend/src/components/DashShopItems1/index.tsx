import prod1 from "../../img/prod1.png";
import prod2 from "../../img/prod2.png";
import prod3 from "../../img/prod3.png";

const DashShopItems: React.FC = () => {

  const displayCategories = () => {
    // let category = e.target.value;
    // switch(category) {
    //   case "Womens":
    //     showWomens();
    //     break;
    // };
  };

  // API calls to the db?
  const showWomens = () => {};

  return (
    <>
      <section className="grid-container">
        {/* will replace with links to search items */}
        <div onClick={displayCategories} className="grid-item womens">
          Womens
        </div>
        <div onClick={displayCategories} className="grid-item">
          Mens
        </div>
        <div onClick={displayCategories} className="grid-item">
          Fluid
        </div>
        <div onClick={displayCategories} className="grid-item">
          Boys
        </div>
        <div onClick={displayCategories} className="grid-item">
          Girls
        </div>
        <div onClick={displayCategories} className="grid-item">
          Babies
        </div>
      </section>

      <section className="grid-container2">
        {/* will replace with links to search items */}
        <div className="grid-item2 img-dashshop">
          <img className="img-dashshop"  src={prod1} />
        </div>
        <div className="grid-item2 ">
          <img className="img-dashshop" src={prod2} />
        </div>
        <div className="grid-item2 img-dashshop">
          <img className="img-dashshop"  src={prod3} />
        </div>
      </section>
    </>
  );
};

export default DashShopItems;
