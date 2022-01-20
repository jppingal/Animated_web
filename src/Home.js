import React from "react";
import { NavLink } from "react-router-dom";
import dmeet from "../src/images/dmeet.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common 
        name="Grow your business with"
        imgsrc={dmeet}
        visit='/service'
        btname='Get Started' 
      />
    </>
  );
}

export default Home;