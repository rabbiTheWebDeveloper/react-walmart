import React from "react";
import Description from "../component/Description";
import DiscountPrice from "../component/DiscountPrice";
import Footer from "../component/Footer";
import Form from "../component/Form";
import Header from "../component/Header";
import Order from "../component/Order";
import Policy from "../component/Policy";
import Review from "../component/Review";
import Rules from "../component/Rules";
import Slider from "../component/Slider";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Description></Description>
      <Slider></Slider>
      <Rules></Rules>
      <Order></Order>
      {/* section gaps */}
      <div className="section_gaps" />
      <Form></Form>
      {/* section gaps */}
      <div className="section_gaps" />
      <Review></Review>
      {/* section gaps */}
      <div className="section_gaps" />
      <Policy></Policy>
      <DiscountPrice></DiscountPrice>
      {/* section gaps */}
      <div className="section_gaps" />
      <Footer></Footer>
    </>
  );
};

export default Home;
