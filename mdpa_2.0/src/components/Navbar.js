/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <header className="headerNavbar">
            <div className="divNavbar flex flex-row justify-center items-center gap-4 font-extrabold">
                <div className="accueilNavbar">
                    <a href="#accueil">
                        Accueil
                    </a>
                </div>
                <div className="NavbarGHINS">
                    <a href="#GHINS">
                        GHINS
                    </a>
                </div>
                <div className="GouvernanceNavbar">
                    <a href="#Gouvernance">
                        Gouvernance
                    </a>
                </div>
                <div className="NavbarRGPD">
                    <a href="#RGPD">
                        RGPD
                    </a>
                </div>
                <div className="contactNavbar">
                    <a href="#contact">
                        Contactez-nous !
                    </a>
                </div>
                <img src="https://www.ciacu13.com/wp-content/uploads/2020/02/logo-mission-locale-pays-aix.png" className="bg-white w-32"  />
            </div>
            <br />
            <hr />
        </header>
    );
}