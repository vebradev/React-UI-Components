import React from "react";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import FooterContainer from "./components/FooterComponents/FooterContainer";
import "./App.css";

const App = () => {
  return (
    <div className="card">
      <HeaderContainer />
      <CardContainer />
      <FooterContainer />
    </div>
  );
};

export default App;
