import React from "react";
import Choose from "./component/Choose";
import Hero from "./component/Hero";
import { NavBar } from "./component/NavBar";
import Service from "./component/Service";
import Specil from "./component/Specil";
import Shop from "./component/Shop";
import Costmor from "./component/Costmor";
import Subscribe from "./component/Subscribe";
import Trening from "./component/Trening";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Choose />
      <Service />
      <Specil />
      <Shop />
      <Costmor />
      <Subscribe />
      <Trening />
      <Footer />
    </div>
  );
}

export default App;
