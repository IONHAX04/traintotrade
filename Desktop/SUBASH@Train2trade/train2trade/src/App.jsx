import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header/Header'
import { Element } from 'react-scroll';
import AOS from 'aos';
import "aos/dist/aos.css";

import whatsApp from './assets/img11.png';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      mirror: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);


  return (
    <>
      <Header />

      <div className="chatBotButton">
        <div className="fixed-bottom chatBot right-100" style={{ zIndex: "10", left: "initial", margin: '5px', background: 'transparent' }}>
          <a href='https://chat.whatsapp.com/EDdkBcLGGMI0gUC9QPPLWl' target='_blank' style={{ background: 'transparent', backdropFilter: 'blur 2rem' }}>
            {/* <p style={{textAlign: 'center', background: 'transparent', fontSize: '17px', top: '-40px'}}>Need Help?</p> */}
            <img src={whatsApp} width="130" alt='WhatsApp' style={{ background: 'transparent', filter: 'drop-shadow(10px 7px 10px violet)' }} />
          </a>
        </div>
      </div>
    </>
  )
}

export default App
