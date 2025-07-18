import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const NAV_ITEMS = [
  { key: "overview", label: "Overview" },
  { key: "hyu", label: "Hanyang University" },
  { key: "ada", label: "Apple Developer Academy" },
  { key: "side", label: "Side Project" },
];

function App() {
  const [selected, setSelected] = useState("overview");

  const getLabel = (key) => {
    const item = NAV_ITEMS.find((i) => i.key === key);
    return item ? item.label : "";
  };

  return (
    <>
      <Navbar selected={selected} onSelect={setSelected} />
      <main style={{ minHeight: "calc(100vh - 140px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: "#222", margin: 0 }}>{getLabel(selected)}</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
