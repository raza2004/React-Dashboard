import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Grocery from '../../../assets/images/Grocery.png';
import wide2 from '../../../assets/images/Logo.png';

import vegetableImage from "../../../assets/images/Rectangle 1.png";
import fruiteImage from "../../../assets/images/Rectangle 6.png";
import meatImage from "../../../assets/images/Rectangle 7.png";

import './Dashboard.css';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="home">
      <div className="container my-5">
        <h2 className="text-center mb-5">Grocery Types</h2>
        <div className="d-flex justify-content-around">
          <div className="category-card" onClick={() => handleClick("vegetables")}>
            <img src={vegetableImage} alt="Vegetables" />
            <h3 className="text-center mt-3">Vegetables</h3>
          </div>
          <div className="category-card" onClick={() => handleClick("fruits")}>
            <img src={fruiteImage} alt="Fruits" />
            <h3 className="text-center mt-3">Fruits</h3>
          </div>
          <div className="category-card" onClick={() => handleClick("meat")}>
            <img src={meatImage} alt="Meat" />
            <h3 className="text-center mt-3">Meat</h3>
          </div>
        </div>
        {selectedCategory && (
          <div className="row mt-5">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="col-4">
                <img
                  src={
                    selectedCategory === "vegetables"
                      ? vegetableImage
                      : selectedCategory === "fruits"
                      ? fruiteImage
                      : meatImage
                  }
                  alt={selectedCategory}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      </nav>
<img src={Grocery} className="mainpic"/>
        <Link className="navbar-brand" to="/">
          <img src={wide2} alt="Logo" className="logo"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        
            <Link className="nav-link" to="/cart">
              <FaShoppingCart className="carticon"/>
            </Link>
         
      </div>
      </div>
            

      )
    }

export default Home;