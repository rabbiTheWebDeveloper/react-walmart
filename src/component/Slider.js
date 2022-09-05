import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Slider = () => {

    const options = {
        loop: true,
        margin: 4,
        items: 4,
        autoplay: true,
        autoplayTimeout:1000,
        weight:500,
        autoplayHoverPause:true
      };
  return (
    <section id="slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            {/* section gaps */}
            <div className="section_gaps" />
            <OwlCarousel classNameName="owl-theme" {...options}  >
              <div className="item">
                <img
                  className="img-fluid"
                  src="frontend_asset/images/Group 10653.png"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  className="img-fluid"
                  src="frontend_asset/images/Group 10654.png"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  className="img-fluid"
                  src="frontend_asset/images/Group 10654.png"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  className="img-fluid"
                  src="frontend_asset/images/Group 10654.png"
                  alt=""
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="bg">
              <a href>
                {" "}
                <button>
                  {" "}
                  <i className="fas fa-shopping-cart" /> অর্ডার করুন
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* section gaps */}
      <div className="section_gaps" />
    </section>
  );
};

export default Slider;
