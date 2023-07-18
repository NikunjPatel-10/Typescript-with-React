import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/home"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/user"}>
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/users"}>
                Fetch Data from Api
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/accordion"}>
                Accordion
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/img-upload"}>
                Img-upload
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/drag-and-drop"}>
                Drag-and-Drop
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
