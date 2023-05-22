/* eslint-disable jsx-a11y/anchor-is-valid */
// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
    return (
        <header className="">
            <div className="">
                <div className="">
                    <a href="#accueil" className="">
                        Accueil
                    </a>
                </div>
                <nav className="">
                    <a href="#GHINS" className="">
                        GHINS
                    </a>
                    <br />
                    <a href="#Gouvernance" className="">
                        Gouvernance
                    </a>
                    <br />
                    <a href="#RGPD" className="">
                        RGPD
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="">
                    Contactez-nous !
                </a>
            </div>
            <hr />
        </header>
    );
}