/* eslint-disable jsx-a11y/anchor-is-valid */
// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <header className="headerNavbar">
            <div className="divNavbar flex flex-row justify-center gap-4">
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
            </div>
            <br />
            <hr />
        </header>
    );
}