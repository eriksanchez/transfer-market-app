import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [isLoggedIn, setLogIn] = useState(false);

  const toggle = () => setOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">News</NavbarBrand>
          <NavbarBrand>Competitions</NavbarBrand>
          <NavbarBrand href="/Login">Login</NavbarBrand>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.transfermarkt.com/">
                  TransferMarkt.com
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
