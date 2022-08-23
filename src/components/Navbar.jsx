import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

function Navbar() {
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      TextDecoration: isActive ? "none" : "underline",
    };
  };
  const Auth = useAuth();
  return (
    <nav>
      <NavLink style={NavLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={NavLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={NavLinkStyles} to="/products">
        Products
      </NavLink>
      <NavLink style={NavLinkStyles} to="/users">
        Users
      </NavLink>
      <NavLink style={NavLinkStyles} to="/profile">
        Profile
      </NavLink>
      {!Auth.user && (
        <NavLink style={NavLinkStyles} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;
