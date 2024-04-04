import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/logo/2.png';
import './header.css';
import Home from '../Home/Home';
import FollowMe from '../Follow Me/FollowMe';
import Faq from '../FAQ/Faq';
import Footer from '../Footer/Footer';
import Activities from '../Activities/Activities';

export default function Header() {
    const homeRef = useRef(null);
    const followMeRef = useRef(null);
    const faqRef = useRef(null);
    const contactRef = useRef(null);
    const activitiesRef = useRef(null);
    
    const [expanded, setExpanded] = useState(false); // Add state for navbar collapse

    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            const offsetTop = ref.current.offsetTop;
            const marginTop = window.innerHeight * 0.17;
            window.scrollTo({ top: offsetTop - marginTop, behavior: 'smooth' });
            setExpanded(false); // Close navbar after scrolling
        }
    };

    const scrollToActivities = () => {
        scrollToRef(activitiesRef);
    };

    return (
        <div>
            <Navbar expand="lg" className='navbar-dark' expanded={expanded}> {/* Pass expanded state */}
                <Container fluid>
                    <Navbar.Brand href="#" onClick={() => scrollToRef(homeRef)}>
                        <img
                            src={logo}
                            className="d-inline-block align-top logoImg"
                            alt="Train 2 Trade logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(!expanded)} /> {/* Toggle expanded state */}
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link onClick={() => {scrollToRef(homeRef)}}>
                                Home
                            </Nav.Link>
                            <Nav.Link onClick={() => {scrollToRef(followMeRef)}}>
                                Follow Me
                            </Nav.Link>
                            <Nav.Link onClick={() => {scrollToActivities()}}>
                                Activities
                            </Nav.Link>
                            <Nav.Link onClick={() => {scrollToRef(faqRef)}}>
                                FAQ
                            </Nav.Link>
                            <Nav.Link onClick={() => {scrollToRef(contactRef)}}>
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div ref={homeRef}>
                <Home scrollToActivities={scrollToActivities} />
            </div>
            <div ref={followMeRef}>
                <FollowMe />
            </div>
            <div ref={activitiesRef}>
                <Activities />
            </div>
            <div ref={faqRef}>
                <Faq />
            </div>
            <div ref={contactRef}>
                <Footer />
            </div>
        </div>
    );
}
