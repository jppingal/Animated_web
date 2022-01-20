import React from "react";

import syst from "../src/images/syst.jpg";
import Common from "./Common";

const AboutUs = () => {
  return (
    <>
      <Common 
        name="Welcome to About page in"
        imgsrc={syst}
        visit='/contact'
        btname='Contact now' 
      />
    </>
  );
}

export default AboutUs;