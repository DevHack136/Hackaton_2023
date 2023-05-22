import React from "react";
import "../styles/Accueil.css";

export default function Accueil() {
    return (
        <section id="accueilSection">
            <div className="accueilDiv">
                <h1 className="h1Title">
                    Accueil
                    <br />
                    Bienvenue sur notre site !
                </h1>
                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                    laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                    Laborum, voluptas natus?
                </p>
                <div className="liens">
                    <div>
                        <a
                            href="#contact"
                            className="contact"
                        >
                            Contact
                        </a>
                    </div>
                    <div>
                        <a
                            href="#GHINS"
                            className="GHINS"
                        >
                            GHINS
                        </a>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <br />
        </section>
    );
}
