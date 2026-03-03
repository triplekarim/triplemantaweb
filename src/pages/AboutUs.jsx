import React from 'react';
import { Link } from 'react-router-dom';

export default function Imprint() {
  return (
    <div className="imprint-page blue-bg" style={{ padding: '3rem', color: '#fff' }}>
      
      <Link to="/" className='no-deco'>
        Back to home
      </Link>

      <h1>About Us</h1>

      <h2>Meet the faces that empower your game</h2>

      <p>This site is still under construction.</p>
    </div>
  );
}
