import React,{useState} from 'react'
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NavBar() {
  
  const[language,setLanguage]=useState('English')

  const languageChange=(selected)=>{
    setLanguage(selected)
  }

  const[region,setRegion]=useState('India')

  const regionChange=(choice)=>{
    setRegion(choice)
  }
  

  return (
    <nav className="navbar navbar-expand-lg px-4">
      <a className="navbar-brand" href="#">
        <img
          src="https://media.netflix.com/static/images/Netflix-Logo.svg"
          className="logo"
          alt="Netflix Logo"
        />
        <span className="caption ms-3">Media Center</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="languageDropdown"
              role="button"
              data-bs-toggle="dropdown"
            >
              {language}
            </a>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => languageChange("Hindi")}
                >
                  Hindi
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => languageChange("English")}
                >
                  English
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="regionDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Regions {region}
            </a>
            <ul className="dropdown-menu" aria-labelledby="regionDropdown">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => regionChange("India")}
                >
                  India
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => regionChange("US")}
                >
                  US
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => regionChange("UK")}
                >
                  UK
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Newsroom
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Resources
            </a>
          </li>
          <li className="nav-item">
            <button className="btn btn-dark apply-button">Apply</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-danger login-button">Login</button>
          </li>
          <li className="nav-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
              alt="Search Icon"
              className="search-icon"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar