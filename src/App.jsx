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
      <main className="main-content">
        <h1 className="main-title">{getLabel(selected)}</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
