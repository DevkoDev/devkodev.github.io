import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import Container from "react-bootstrap/Container";
import { Nav, Footer } from "./components";
import { Home, Contract, Projects } from "./pages";
import ScrollToTop from "./utils/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   
    
      <Router>
    
      <Container>
      <Nav />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contract/:network/:contractAddress" element={<Contract />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
        </Container>
         
      </Router>
    
    
  </React.StrictMode>
);
