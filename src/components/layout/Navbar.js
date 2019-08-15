import React from "react";
import Form from '../entry/Form'
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light item-center bg-primary">
      <h1 class="navbar-brand mx-auto text-light">
        I CHOOSE U
      </h1>
      {/* <Form /> */}
      {/* <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button> */}

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            {/* <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
