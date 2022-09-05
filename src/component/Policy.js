import React from "react";

const Policy = () => {
  return (
    <section id="policy">
      <div className="container">
        <div className="policy_contain">
          <div className="row">
            {/* item  */}
            <div className="col-lg-4 m-auto">
              <div className="policy_item text-center">
                <div className="img">
                  <img
                    className="img-fluid"
                    src="frontend_asset/images/policy1.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h2>১০০% অরিজিনাল</h2>
                </div>
              </div>
            </div>
            {/* item  */}
            <div className="col-lg-4 m-auto">
              <div className="policy_item text-center">
                <div className="img">
                  <img
                    className="img-fluid"
                    src="frontend_asset/images/policy2.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h2>৭ দিনের মধ্যে রিটার্ন</h2>
                </div>
              </div>
            </div>
            {/* item  */}
            <div className="col-lg-4 m-auto">
              <div className="policy_item text-center">
                <div className="img">
                  <img
                    className="img-fluid"
                    src="frontend_asset/images/policy3.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h2>ওয়ারেন্টি আছে </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;
