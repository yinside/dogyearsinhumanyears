'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container-main">
          <span>Trusted by dog owners since 2013 &bull; Updated for 2026 &bull; 1,248,293 calculations made</span>
        </div>
      </div>

      <div className="header-main">
        <div className="container-main">
          <Link href="/" className="site-logo">
            Dog Years in Human Years
          </Link>
          <div className="site-tagline">
            The most accurate dog age calculator on the web. Convert your dog&apos;s age to human years instantly.
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="container-main">
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? 'Close Menu' : 'Navigation Menu'}
          </button>
          <ul className={`nav-list${isMenuOpen ? ' open' : ''}`}>
            <li><Link href="/" className="active">Home</Link></li>
            <li><Link href="/#calculator">Dog Age Calculator</Link></li>
            <li><Link href="/#age-chart">Dog Age Chart</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><Link href="/#article">Dog Aging Guide</Link></li>
            <li><Link href="/guides">Guides</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;