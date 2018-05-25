import React, { Component } from 'react';

//Import of Main Components
import TopBar from "./components/Nav.js"
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

const App = () => (
  <div className = "has-navbar-fixed-top">
    <TopBar />
    <Header />
    <Body />
    <Footer />
  </div>
);

export default App;