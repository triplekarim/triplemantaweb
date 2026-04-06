import React from "react";
import { Link } from "react-router-dom";

export default function Imprint() {
  return (
    <div className="imprint-page blue-bg fullscreen">
      <div className="page-wrapper foreground relative z-1">
        <Link to="/" className="no-deco fade-up">
          Back to home
        </Link>

        <h1 className="fade-up delay-1">About Us</h1>

        <h2 className="fade-up delay-2">Our Products at a glance</h2>

        <p className="fade-up delay-3"><b>Hey there!</b> Are you looking for roblox products with tons of features and customization you could just drag-n-drop into your game? 
          Then you're in the right place! Feel free to check out our free Triton Framework with tons of included modules that make your life easier. 
          If you need even more tripleManta greatness, we have bundles available for purchase. Just visit our <a href="https://triplemanta.lemonsqueezy.com/">storefront</a>!
        </p>
      </div>
    </div>
  );
}
