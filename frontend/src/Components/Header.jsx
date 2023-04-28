import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaCartPlus } from "react-icons/fa";
import { CartState } from "../Context/Context";
import { Link } from "react-router-dom";

export const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <Navbar bg="light" className="drop-shadow-md bg-white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Eduvi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-full flex flex-col justify-between items-center gap-2">
              <Link to='/' className="underline-0 text-[grey]">
                Home
              </Link>
              <Nav.Link href="#link">Link</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              <input
                type="text"
                placeholder="Search for any learning"
                className="border p-2 rounded-lg border-black w-[90%]"
              />
              <span>Login</span>
              <span>Signup</span>
              <Link to="/cart">
                <div className="bg-blue-400 flex justify-center rounded-sm item-center p-1">
                  <FaCartPlus className="text-white text-2xl mr-2" />
                  {cart.length && (
                    <div className="underline-none font-bold text-white text-2xl my-0">
                      {cart.length}
                    </div>
                  )}
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
