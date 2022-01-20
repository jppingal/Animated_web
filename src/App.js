import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./Footer";

const App = () => {
  return (
    <> <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={ContactUs} />
        <Redirect to= "/" />
      </Switch>
      
    </>
  );
}

export default App;
