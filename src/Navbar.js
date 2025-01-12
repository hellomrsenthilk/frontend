import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow navbar-div">
            <NavLink to="/" className="navbar-brand">
              <div style={{backgroundColor: "yellow", color: "red" }} className="bg-white border-radius: 15px;">
                 <marquee style={{backgroundColor: "gold", color: "red" }}>        
                  <h4> <img src={require('./images/molam.jpg')} height={80} width={80}/>
                    <b> விருதை நாயுடு திருமண தகவல் மையம்</b><img src={require('./images/molam.jpg')} height={80} width={80}/></h4>
                  </marquee>
                </div>
            </NavLink>
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
              <ul className="navbar-nav">
                <li className="nav-item active" style={{border: "4"}}>
                  <NavLink to="/home" className="btn btn-primary">
                    Home
                  </NavLink>
                </li>
                &nbsp;
                <li className="nav-item">
                <a className="btn btn-primary" href="/registerVaran" hover="red" title="புதிய வரண் பதிவு">
                  Register
                </a>
                </li>
                &nbsp;
                <li className="nav-item">
                <a className="btn btn-primary" href="/varan" hover="red" title="வரண் பார்வையிடல்">
                  View &nbsp;
                </a>
                </li>
                &nbsp;
                <li className="nav-item">
                <a className="btn btn-primary" href="/searchVaran" hover="red" title="வரண் தேடுதல்">
                  Search 
                </a>
                </li>
                &nbsp;
                <li className="nav-item">
                  <a className="btn btn-primary" href="#" hover="red">
                     Contact
                  </a>
                </li>
                &nbsp;
                <li className="nav-item">
                  <a className="btn btn-primary" href="/" hover="red">
                    Logout
                  </a>
                </li>

              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;