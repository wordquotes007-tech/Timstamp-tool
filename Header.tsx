import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Header.css';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="gradient-text">YouTube Timestamp Generator</span>
          </Link>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle theme">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
