import React from 'react';

const Footer = () => {
    return (
        <section id="footer">
        <div className="container">
          {/* footer header  */}
          <div className="row">
            <div className="col-lg-6 col-sm-12 m-auto">
              <div className="row">
                {/* item  */}
                <div className="col-lg-6  col-sm-12 m-auto  text-sm-center text-lg-start ">
                  <div className="footer_header-contain">
                    <h2>Contact Us</h2>
                    <div className="call d-flex align-items-center justify-content-sm-center justify-content-lg-start">
                      <img src="frontend_asset/images/phone-call 1.png" alt="" />
                      <h4>00 0392 96 32</h4>
                    </div>
                    <div className="email d-flex align-items-center justify-content-sm-center justify-content-lg-start">
                      <img src="frontend_asset/images/email 1.png" alt="" />
                      <h4>oder@freshen.com</h4>
                    </div>
                  </div>
                </div>
                {/* item  end */}
                {/* item  */}
                <div className="col-lg-6 col-sm-12  m-auto">
                  <div className="footer_header-contain text-sm-center text-lg-start ">
                    <h2>Important Link</h2>
                    <a href><h4>Refund Policy </h4></a>
                    <a href><h4>Privacy Policy</h4></a>
                    <a href> <h4>Terms and Conditions</h4></a>
                  </div>
                </div>
                {/* item  end */}
              </div>
            </div>
            {/* right footer  */}
            <div className="col-lg-6 col-sm-12  m-auto">
              <div className="text">
                <h2>+8801799733234</h2>
                <h4>অর্ডার পেতে কল করুন এই নাম্বারে</h4>
              </div>
            </div>
          </div>
          {/* footer header end  */}
          {/* footer_last  */}
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="icon d-flex align-items-center justify-content-sm-center">
                <a href><img src="frontend_asset/images/FACEBOK.png" alt="" /></a>
                <a href><img src="frontend_asset/images/INSTAGRAM.png" alt="" /></a>
                <a href><img src="frontend_asset/images/TWITTER.png" alt="" /></a>
                <a href><img src="frontend_asset/images/LINKEDIN.png" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-6 com-sm-12">
              {/* right item   */}
              <div className="text2">
                <h3>2022 All Rights Reserved | Designed by Soft IT Care Development Team</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Footer;