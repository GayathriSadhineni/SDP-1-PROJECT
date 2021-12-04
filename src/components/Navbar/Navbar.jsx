import React, { useState, useCallback } from "react";
import { IconButton, Badge } from "@material-ui/core";
import "./Navbar.css";
import CallIcon from "@material-ui/icons/Call";
import { ShoppingCart } from "@material-ui/icons";
import { useHistory, Link } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useModal } from "react-hooks-use-modal";
const Navbar = () => {
  const history = useHistory();

  const sofaredirect = () => {
    history.push("/loginpage");
  };
  const bedredirect = () => {
    history.push("/loginpage");
  };
  const chairredirect = () => {
    history.push("/loginpage");
  };
  const tableredirect = () => {
    history.push("/loginpage");
  };
  const orgredirect = () => {
    history.push("/loginpage");
  };
  const cartredirect = () => {
    history.push("/yourCart");
  };
  const botredirect = () => {
    history.push("/chatpage");
  }
  const [Modal, open] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: true,
  });
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img src="./Rentify.png" alt="Our Logo" height="50px" />
          <a class="navbar-brand" href="/">
            {" "}
            Rentify
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Top Categories
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" onClick={sofaredirect}>
                      Sofas & Armchairs
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={bedredirect}>
                      Beds
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={chairredirect}>
                      Chairs
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={tableredirect}>
                      Tables
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={orgredirect}>
                      Small Storage & Organizers
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className="searchbox"
                  style={{ width: 200, marginRight: 10, marginTop: 0 }}
                >
                  <ReactSearchAutocomplete autoFocus />
                </div>
              </li>
            </ul>
            <li class="d-flex">
              <IconButton area-label="Show cart Items" color="inherit">
                <Badge color="secondary">
                  <ShoppingCart onClick={cartredirect} />
                </Badge>
              </IconButton>
            </li>
            
            <li class="d-flex">
              <Link to="/loginpage">Login</Link>
            </li>
            <li class="d-flex">
              <Link to="/sign-up">Register</Link>
            </li>
            <li class="d-flex">
              <IconButton area-label="AccountCircle" color="inherit">
                <CallIcon onClick={open} />
              </IconButton>
            </li>
            <Modal>
              <div className="popup">
                <h1 className="contact">Contact Us</h1>
                <p className="mailid">Mail: helpdesk@rentify.com</p>
                <p className="mailid">24*7 Helpline: 7328277335</p>
              </div>
            </Modal>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
