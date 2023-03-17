import React from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import Navbar from "../component/navbar";
import SecondSlider from "../component/secondSlide";
import Slider from "../component/slider";
import Value from "../component/value";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <SecondSlider />
      <Value />
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
