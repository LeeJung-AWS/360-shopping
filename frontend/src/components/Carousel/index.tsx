import sale1 from "../../img/sale1.png";
import sale2 from "../../img/sale2.png";
import sale3 from "../../img/sale3.png";
import sale4 from "../../img/sale4.png";

export const Carousel: React.FC = () => {
  return (
    <>
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          <li id="carousel__slide1" tabIndex={0} className="carousel__slide">
            <div className="carousel__snapper">
            <img src={sale1} />
              <a href="#" className="carousel__prev">
                
              </a>
              
              <a href="#carousel__slide2" className="carousel__next">
                
              </a>
            </div>
          </li>
          <li id="carousel__slide2" tabIndex={0} className="carousel__slide">
            <div className="carousel__snapper"></div>
            <img src={sale2} />
            <a href="#" className="carousel__prev">
              
            </a>
            <a href="#carousel__slide3" className="carousel__next">
              
            </a>
          </li>
          <li id="carousel__slide3" tabIndex={0} className="carousel__slide">
            <div className="carousel__snapper"></div>
            <img src={sale3} />
            <a href="#carousel__slide2" className="carousel__prev">
            </a>
            <a href="#carousel__slide4" className="carousel__next">
              
            </a>
          </li>
          <li id="carousel__slide4" tabIndex={0} className="carousel__slide">
            <div className="carousel__snapper"></div>
            <img src={sale4} />
            <a href="#carousel__slide3" className="carousel__prev">
              
            </a>
            <a href="#carousel__slide1" className="carousel__next">
              
            </a>
          </li>
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide1"
                className="carousel__navigation-button"
              >
               
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide2"
                className="carousel__navigation-button"
              >
                
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide3"
                className="carousel__navigation-button"
              >
                
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide4"
                className="carousel__navigation-button"
              >
                
              </a>
            </li>
          </ol>
        </aside>
      </section>
    </>
  );
};

export default Carousel;
