import { useState } from "react";
import "./App.css";

import GradientBlinds from "./components/GradientBlinds";
import Plasma from "./components/Plasma";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Plasma
          color="#000e3c"
          speed={0.7}
          direction="forward"
          scale={1}
          opacity={1}
          mouseInteractive={false}
        />

        <div className="main-content-wrapper">
          <div className="main-content">

            <section className="hero">
              <div className="hero-image">
                <img src="./src/images/tripleMantaEvo3fullscreen.png" alt="Hero Image" />

              </div>
              <div className="hero-content">
                <h1>Get ready for a truly seamless experience.</h1>
                <p>
                  We provide the same state of the art frameworks and solutions to you that power our own games. Say goodbye to low-quality tech stores and hello to smooth, efficient integrations.
                </p>
                <div className="hero-buttons">
                  <div className="row">
                    <a className="hero-button btn-primary" style={{ flex: 3, }}>
                      Explore Products
                    </a>
                    <a className="hero-button btn-secondary" style={{ flex: 2, }}>
                      Our Games
                    </a>
                  </div>
                  <div className="row">
                    <a className="hero-button btn-secondary" style={{ flex: 0.8, }}>
                      Docs
                    </a>
                    <a href="https://discord.gg/wVugAM5k9E" target="_blank" rel="noopener noreferrer" className="hero-button btn-secondary" style={{ flex: 1.2, }}>
                      Join our Discord
                    </a>
                    <a className="hero-button btn-secondary" style={{ flex: 0.9, }}>
                      About Us
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
          <footer>
            <a href="http://google.com">Privacy Notice</a>
            <span style={{ marginLeft:"10px", marginRight:"10px", color:"white"}}>•</span>
            <a href="http://google.com"> Imprint</a>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
