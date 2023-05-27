import React from "react";
import recommendation from "../../assets/recommendation.pdf";

const TCTA = () => {
  return (
    <a href={recommendation} download className="btn">
      Download recommendation
    </a>
  );
};

export default TCTA;
