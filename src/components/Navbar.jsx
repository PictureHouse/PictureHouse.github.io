import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const NAV_ITEMS = [
  { key: "overview", label: "Overview" },
  { key: "hyu", label: "Hanyang University" },
  { key: "ada", label: "Apple Developer Academy" },
  { key: "side", label: "Side Project" },
];

export default function Navbar({ selected, onSelect }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const getSelectedLabel = () => {
    const item = NAV_ITEMS.find(item => item.key === selected);
    return item ? item.label : "Select";
  };

  const handleDropdownSelect = (key) => {
    onSelect(key);
    setIsDropdownOpen(false);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-nav-with-icons">
        {isMobile ? (
          // 모바일 드롭다운 메뉴
          <>
            <div className="navbar-dropdown-container" ref={dropdownRef}>
              <button 
                className="navbar-dropdown-toggle"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
              >
                <span>{getSelectedLabel()}</span>
                <span className={`navbar-dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>
              {isDropdownOpen && (
                <ul className="navbar-dropdown-menu">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.key}>
                      <button
                        className={`navbar-dropdown-item ${selected === item.key ? 'active' : ''}`}
                        onClick={() => handleDropdownSelect(item.key)}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="navbar-icons-group">
              <button
                type="button"
                aria-label="GitHub"
                className="navbar-icon-btn"
                onClick={() => window.open("https://github.com/PictureHouse")}
              >
                <img src={`${import.meta.env.BASE_URL}assets/github.png`} alt="GitHub" style={{ width: 24, height: 24, display: "block" }} />
              </button>
              <button
                type="button"
                aria-label="LinkedIn"
                className="navbar-icon-btn"
                onClick={() => window.open("https://www.linkedin.com/in/choyune/")}
              >
                <img src={`${import.meta.env.BASE_URL}assets/linkedin.png`} alt="LinkedIn" style={{ width: 24, height: 24, display: "block" }} />
              </button>
            </div>
          </>
        ) : (
          // 데스크톱 기본 메뉴
          <ul className="navbar-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <button
                  className={`navbar-link${selected === item.key ? " navbar-link-active" : ""}`}
                  style={{ background: "none", border: "none", padding: 0, margin: 0, cursor: "pointer" }}
                  onClick={() => onSelect(item.key)}
                  tabIndex={0}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="navbar-divider" aria-hidden="true"></li>
            <li className="navbar-icons-group">
              <button
                type="button"
                aria-label="GitHub"
                className="navbar-icon-btn"
                onClick={() => window.open("https://github.com/PictureHouse")}
              >
                <img src={`${import.meta.env.BASE_URL}assets/github.png`} alt="GitHub" style={{ width: 28, height: 28, display: "block" }} />
              </button>
              <button
                type="button"
                aria-label="LinkedIn"
                className="navbar-icon-btn"
                onClick={() => window.open("https://www.linkedin.com/in/choyune/")}
              >
                <img src={`${import.meta.env.BASE_URL}assets/linkedin.png`} alt="LinkedIn" style={{ width: 28, height: 28, display: "block" }} />
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
