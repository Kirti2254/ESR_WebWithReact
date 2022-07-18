import React from "react";
import Achievement from "../../components/achievement/achievement";
import Footer from "../../components/footer/footer";
import GetInTouch from "../../components/getInTouch/getinTouch";
import MainSection from "../../components/MainSection/mainSection";
import Navbar from "../../components/Navbar/Navbar";
import { Portfolio } from "../../components/portFolio/portFolio";
import Services from "../../components/Services/services";
import TestimonialSlider from "../../components/testimonialSlider/testimonialSlider";

function HomePage() {
  return (
    <>
      <MainSection />
      <Services />
      <Portfolio />
      <Achievement />
      <TestimonialSlider />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default HomePage;
