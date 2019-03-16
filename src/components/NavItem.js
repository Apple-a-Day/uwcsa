import React from "react";
import { NavLink } from 'react-router-dom';
import "./../styles/NavItem.scss";

const NavItem = (
  props,
) => {
  const {
    label,
    path,
  } = props;

  return (
    <NavLink to={path} className="navItemContainer" activeClassName="selected">
      <span className="navItem">{label}</span>
    </NavLink>
  );
}

export default NavItem;