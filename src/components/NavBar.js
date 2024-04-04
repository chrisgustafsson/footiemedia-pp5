import React, {useContext} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from "../App";


const NavBar = () => {
    const currentUser = useContext(CurrentUserContext);
    const loggedIn = <>{currentUser?.username}</>
    const loggedOut = (
      <>
        <NavLink to="/signin" className="text-white"><i className="fas fa-sign-in-alt"></i>Sign in</NavLink>
        <NavLink to="/signup" className="text-white"><i className="fas fa-user-plus"></i>Sign up</NavLink>
      </>
    );

    return ( 
    <Navbar className={styles.NavBar} expand="md" fixed="top"><Container>
    <NavLink to="/"><Navbar.Brand className="text-white">FOOTIEMEDIA</Navbar.Brand></NavLink>
    <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto text-left">
        <NavLink to="/" className="text-white"><i className="fa-regular fa-futbol"></i>Home</NavLink>
        {currentUser ? loggedIn : loggedOut}
      </Nav>
    </Navbar.Collapse></Container>
  </Navbar>
    );
};

export default NavBar;