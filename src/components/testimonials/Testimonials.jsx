import React from "react";
import "./testimonials.css";

import "swiper/css";
import "swiper/css/pagination";
import TCTA from "./Testimonials-cta";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Recommendation</h2>
      <div class="UpperContainer">
        <div className="containerTCTA">
          <TCTA />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
