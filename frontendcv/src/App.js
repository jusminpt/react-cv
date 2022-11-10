import React from "react";
import { About, Footer, Header, Skills, Works } from "./pages";
import { NavBar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
