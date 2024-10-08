import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Details } from "./pages/details/Details";
import { About } from "./pages/about/About";
import { TeamMemberDetails } from "./pages/TeamMemberDetails";
import { Footer } from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/member/:id" element={<TeamMemberDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
