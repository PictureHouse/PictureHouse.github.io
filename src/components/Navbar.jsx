import React from "react";
import "./Navbar.css";

const NAV_ITEMS = [
  { key: "overview", label: "Overview" },
  { key: "hyu", label: "Hanyang University" },
  { key: "ada", label: "Apple Developer Academy" },
  { key: "side", label: "Side Project" },
];

export default function Navbar({ selected, onSelect }) {
  return (
    <header className="navbar-header">
      <nav className="navbar-nav-with-icons">
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
              <img src="/assets/github.png" alt="GitHub" style={{ width: 28, height: 28, display: "block" }} />
            </button>
            <button
              type="button"
              aria-label="LinkedIn"
              className="navbar-icon-btn"
              onClick={() => window.open("https://www.linkedin.com/in/choyune/")}
            >
              <img src="/assets/linkedin.png" alt="LinkedIn" style={{ width: 28, height: 28, display: "block" }} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

