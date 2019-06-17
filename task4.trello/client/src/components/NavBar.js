import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class NavBar extends Component {
  state = {
    isOpen: false
  };

  logOffClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("loggedIn");
  };

  render() {
    return (
      <header>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Trello</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/" onClick={this.logOffClick}>
                Log Off
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default NavBar;
