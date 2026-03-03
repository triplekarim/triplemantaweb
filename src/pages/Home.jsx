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
          color="#000e3c"
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
              <img src={tripleManta} alt="Hero Image" />
            </div>
            <div className="hero-content">
              <h1>Get ready for a truly seamless experience.</h1>
              <p>
                We provide the same state of the art frameworks and solutions to you that power our own games. Say goodbye to low-quality tech stores and hello to smooth, efficient integrations.
              </p>
              <div className="hero-buttons">
                <div className="row">
                  <a
                    href="https://triplemanta.lemonsqueezy.com/"
                    className="hero-button btn-primary"
                    style={{ flex: 3 }}
                  >
                    Explore Products
                  </a>
                  <a
                    href="https://www.roblox.com/communities/630543637/tripleManta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-button btn-secondary"
                    style={{ flex: 2 }}
                  >
                    Our Games
                  </a>
                </div>
                <div className="row">
                  <a
                    href="https://docs.triplemanta.com/"
                    className="hero-button btn-secondary"
                    style={{ flex: 0.8 }}
                  >
                    Docs
                  </a>
                  <a
                    href="https://discord.gg/wVugAM5k9E"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-button btn-secondary"
                    style={{ flex: 1.2 }}
                  >
                    Join our Discord
                  </a>
                  <Link to="/about" className="hero-button btn-secondary" style={{ flex: 0.9 }}>
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer>
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
