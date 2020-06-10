import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default class Navbar extends Component {
  componentDidMount() {
    const open = document.getElementById("hamburger");
    let changeIcon = true;

    open.addEventListener("click", function () {
      const overlay = document.querySelector(".overlay");
      const nav = document.querySelector("nav");
      let icon = document.querySelector(".menu-toggle i");

      overlay.classList.toggle("menu-open");
      nav.classList.toggle("menu-open");

      if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
      }
    });
  }

  render() {
    return (
      <div>
        <header>
          <div className="menu-toggle" id="hamburger">
            <i id="skull" className="fas fa-skull-crossbones"></i>
          </div>
          <div className="overlay"></div>
          <div className="container">
            <nav>
              <h1 className="brand">
                <Link id="nav-links" to="/">
                  <span role="img" aria-label="drunk">
                    🥴
                  </span>
                  Wa<span>St</span>Ed
                  <span role="img" aria-label="puke">
                    🤮
                  </span>
                </Link>
              </h1>
              <ul>
                <li>
                  <Link to="/drinks" id="nav-links" activeClassName="selected">
                    Drinks
                  </Link>
                </li>

                <li>
                  <Link
                    to="/restaurants"
                    id="nav-links"
                    activeClassName="selected"
                  >
                    Restaurants
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    id="nav-links"
                    activeClassName="selected"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/stuff" id="nav-links" activeClassName="selected">
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
