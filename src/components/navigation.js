import React from "react";
import { NavLink } from "react-router-dom";

const navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>
      <NavLink exact to="apropos" activeClassName="nav-active">
        A propos
      </NavLink>
    </div>
  );
};

export default navigation;
