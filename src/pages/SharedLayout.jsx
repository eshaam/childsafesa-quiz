import { Outlet } from "react-router-dom";
import logo from "../assets/ChildSafe_logo.png";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const SharedLayout = () => {
  return (
    <div className="mh-100">
      <Navbar expand="lg" className="bg-white">
        <Container>
          <Navbar.Brand href="/">Child Safety</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link nav-item link active"
                    : "nav-link nav-item link"
                }
              >
                Quiz
              </NavLink>

              <a
                className="nav-link nav-item"
                target="_blank"
                href="https://github.com/eshaam/childsafesa-quiz"
              >
                View code on Github{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </svg>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="bg-light py-5 mh-100">
        <Outlet />
      </Container>
    </div>
  );
};
export default SharedLayout;
