import React from "react";

const Order = () => {
  return (
    <section id="order">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 m-auto">
            <div className="order_contens">
              <a href>
                <button>
                  {" "}
                  <i className="fas fa-shopping-cart" /> অর্ডার করুন
                </button>
              </a>
              <h2>+8801799733234</h2>
              <h4>অর্ডার পেতে কল করুন এই নাম্বারে</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
