import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";


const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const handleSignOut = async () => {
      try {
        await axios.post("dj-rest-auth/logout/");
        setCurrentUser(null);
      } catch (err) {
        console.log(err);
      }
    };

    const addPost = (
        <NavLink to="/posts/add" className="text-white"><i className="fa-solid fa-arrow-up-from-bracket"></i>Upload post</NavLink>
    );
    const loggedIn = (
      <>
        <NavLink to="/favorites" className="text-white"><i className="fa-solid fa-heart-pulse"></i>Favorites</NavLink>
        <NavLink to="/" className="text-white" onClick={handleSignOut}><i className="fas fa-sign-out-alt"></i>Sign out</NavLink>
        <NavLink to={`/profiles/${currentUser?.profile_id}`} className="text-white"><Avatar src={currentUser?.profile_image} text="Profile" height={40} /></NavLink>
      </>
    );
    const loggedOut = (
      <>
        <NavLink to="/signin" className="text-white"><i className="fas fa-sign-in-alt"></i>Sign in</NavLink>
        <NavLink to="/signup" className="text-white"><i className="fas fa-user-plus"></i>Sign up</NavLink>
      </>
    );

    return ( 
    <Navbar className={styles.NavBar} expand="md" fixed="top"><Container>
    <NavLink to="/"><Navbar.Brand className="text-white">FOOTIEMEDIA</Navbar.Brand></NavLink>
    {currentUser && addPost}
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