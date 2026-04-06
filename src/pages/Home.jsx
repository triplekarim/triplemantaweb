import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Plasma = React.lazy(() => import('../components/Plasma'));

import tripleManta from '../images/tm.svg';

export default function Home() {
  console.log('Home component mounted');

  return (
    <div className="home">
      <Suspense fallback={null}>
        <Plasma
          color="#041650"
          speed={0.7}
          direction="forward"
          scale={1}
          opacity={1}
          mouseInteractive={false}
        />
      </Suspense>

      <div className="main-content-wrapper">
        <div className="main-content">
          <section className="hero">
            <div className="hero-image">
              <img src={tripleManta} alt="Hero Image" className="fade-up"/>
            </div>
            <div className="hero-content">
              <h1 className="fade-up delay-1">Get ready for a truly seamless experience.</h1>
              <p className="fade-up delay-2">
                We provide the same state of the art frameworks and solutions to you that power our own games. Say goodbye to low-quality tech stores and hello to smooth, efficient integrations.
              </p>

              <div className="hero-buttons-grid">
                <a
                  className="hero-button btn-primary fade-up delay-3 hero-btn-1"

                  href="https://triplemanta.lemonsqueezy.com/"
                >
                  Explore Products
                </a>

                <a
                  className="hero-button btn-secondary fade-up delay-4 hero-btn-2"

                  href="https://www.roblox.com/communities/630543637/tripleManta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our Games
                </a>

                <a
                  className="hero-button btn-secondary fade-up delay-5 hero-btn-3"

                  href="https://docs.triplemanta.com/home/get-started/"
                >
                  Docs
                </a>

                <a
                  className="hero-button btn-secondary fade-up delay-6 hero-btn-4"

                  href="https://discord.gg/wVugAM5k9E"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join our Discord
                </a>

                <Link
                  className="hero-button btn-secondary fade-up delay-7 hero-btn-5"

                  to="/about"
                >
                  About Us
                </Link>
              </div>
            </div>
          </section>
        </div>

        <footer className='fade-up delay-8'>
          <span>© 2026 tripleManta</span>
          <span className="footer-spacer">•</span>
          <Link to="/terms">Terms of Service</Link>
          <span className="footer-spacer">•</span>
          <Link to="/privacy">Privacy</Link>
          <span className="footer-spacer">•</span>
          <Link to="/imprint">Imprint</Link>
        </footer>
      </div>
    </div>
  );
}
