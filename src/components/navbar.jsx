
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect} from 'react';
import dr_logo from '../assets/img/dr_logo.svg'

import '../App.css'



export const NavBar= () => {

    const [activeLink , setActiveLink, ] = useState('home');
    const [scrolled, seScrolled] = useState (false);
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            }else{
                seScrolled(false);
            }

            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll);
        }
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink (value)
    }

  return (
    <Navbar expand="lg" className= {scrolled ?  "scrolled": "" } >
      <Container>
        <Navbar.Brand href="#home" className ={ activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick ={() => onUpdateActiveLink ('home')}>
            <img src= {''} alt="Logo"/>  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className= "navbar-toggle-icon" ></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Projects"  className ={ activeLink === 'Projects' ? 'active-navbar-link' : 'navbar-link'} onClick ={() => onUpdateActiveLink ('projects')}>Projects</Nav.Link>
            <Nav.Link href="#AboutMe" className ={ activeLink === 'About Me' ? 'active-navbar-link' : 'navbar-link'} onClick ={() => onUpdateActiveLink ('aboutMe')}>About Me</Nav.Link>
            <Nav.Link href="#Resume" className ={ activeLink === 'Resume' ? 'active-navbar-link' : 'navbar-link'} onClick ={() => onUpdateActiveLink ('resume')}>Resume</Nav.Link>
            <Nav.Link href="#Contact" className ={ activeLink === 'Contact' ? 'active-navbar-link' : 'navbar-link'} onClick ={() => onUpdateActiveLink ('contact')}>Contact</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
  
}

