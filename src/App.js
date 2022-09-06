import React from "react";
import Nav from "./components/Nav";
import List from "./components/List";
import "./styles.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <List />
      <Footer />
    </div>
  );
};

export default App;
