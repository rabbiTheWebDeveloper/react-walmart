import React from 'react';

const Header = () => {
    return (
        <section id="header">
        <div className="container">
          <div className="row d-flex">
            {/* text  */}
            <div className="col-lg-6  ">
              <div className="header_content">
                <div className="logo">
                  <img className="img-fluid" src="frontend_asset/images/Logo.png" alt="" />
                </div>
                <div className="text">
                  <h2>অরজিনাল <span>চামড়ার লেদার</span>  মানিব্যাগ টিকবে বছরের পর বছর </h2>
                  <h4>ডিস্কাউন্ট মূল্যঃ    ২৫৫০   টাকা</h4>
                  <div className="bg d-flex flex-sm-column flex-lg-row  align-items-lg-center align-items-sm-start">
                    <a href>
                      <button> <i className="fas fa-shopping-cart" /> অর্ডার করুন</button>
                    </a>
                    <h6>ডেলিভারী চার্জ ফ্রি</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* img  */}
            <div className="col-lg-6 ">
              <div className="header_img">
                <img className="img-fluid" src="frontend_asset/images/header_banner.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Header;