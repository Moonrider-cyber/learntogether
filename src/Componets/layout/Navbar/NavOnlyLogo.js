import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function NavOnlyLogo() {
  return (
    <div>
      <nav>
        <header className="navbar resnavbarclose">
          <section className="navbar-right">
            <div className="logo">
              <h1><Link to="/">Busilearn</Link></h1>
            </div>
            <div className="nav-menu-wapper">
              
              </div>
            
          </section>
          
        </header>
      </nav>
    </div>
  );
}
export default NavOnlyLogo;
