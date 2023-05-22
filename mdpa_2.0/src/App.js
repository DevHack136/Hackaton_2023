import React from "react";
import About from "./components/Accueil";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import GHINS from "./components/GHINS";
import Gouvernance from "./components/Gouvernance";
import RGPD from "./components/RGPD";
import "../src/App.css";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <GHINS />
      <Gouvernance />
      <RGPD />
      <Contact />
    </main>
  );
}