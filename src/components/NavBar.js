import React from "react";
import NavItem from "./NavItem";
import logo from './../assets/UWCSA_Color.png';
import "./../styles/NavBar.scss";

const NavPageRoutes = {
  "Upcoming": "/upcoming",
  "About": "/about",
  "Events": "/events",
  "Team": "/team",
  "Sponsors": "/sponsors",
  "Contact": "/contact",
}

const NavBar = () => {
  const navItems = Object.keys(NavPageRoutes).map((label, idx) => {
    return <NavItem key={idx} label={label} path={NavPageRoutes[label]} />
  })

  return (
    <div className="navBarDiv">
      <img className="navLogoImg" src={logo} alt="UWCSA-Logo"/>
      <div className="navItemsContainerDiv">
        <div className="navItemsRowDiv">
          {navItems}
        </div>
      </div>
    </div>
  );
}

export default NavBar;