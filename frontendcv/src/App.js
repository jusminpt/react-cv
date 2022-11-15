import React from "react";
import { About, Header, Skills, Works, Contact } from "./pages";
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
      <Contact />
    </div>
  );
}

export default App;
