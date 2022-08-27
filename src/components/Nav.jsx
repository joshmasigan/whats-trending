import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-center">
        <a href="#" className="navbar-brand">
          What's Trending Media
        </a>
      </div>
      {/* <div className="container-fluid justify-content-center position-absolute">
        <ul className="nav navbar-nav">
          <li className="navbar-item mx-3">
            <a className="nav-link active" href="#">
              Movies
            </a>
          </li>
          <li className="navbar-item mx-3">
            <a className="nav-link" href="#">
              Television
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Nav;
