/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "../styles/Contact.css";


export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error)
            );
    }

    return (
        <section id="contact">
            <br />
            <div>
                <div className="">
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=1Mr03bRIkcBdmdU7L7eSGBCNEIXcOjP4&hl=fr&ehbc=2E312F"
                        width="1505"
                        height="500"
                        title="carteMaps">
                    </iframe>

                    <div>
                        <br />
                        <h2 className="h2Contact text-center text-5xl font-extrabold">
                            📍ADRESSE📍
                            <br />
                            <br />
                        </h2>

                        <div className="text-center">
                            <p>
                                <strong>Antenne d'Aix-en-Provence :</strong>
                                <br />
                                ☞ 14 rue Charloun Rieu, 13090 Aix-en-Provence
                            </p>

                            <br />
                            <br />

                            <p>
                                <strong>GHINS :</strong>
                                <br />
                                ☞ 11 Rue Jean-Louis Vaudoyer, 13090 Aix-en-Provence
                            </p>

                            <br />
                            <br />

                            <p>
                                <strong>Antenne de Bouc-Bel-Air :</strong>
                                <br />
                                ☞ Pole Solidarité, Rue Frédéric Chopin, 13320 Bouc-Bel-Air
                            </p>

                            <br />
                            <br />

                            <p>
                                <strong>Antenne des Pennes Mirabeau :</strong>
                                <br />
                                ☞ Place Victorin Isnard, 13170 Les Pennes-Mirabeau
                            </p>

                            <br />
                            <br />

                            <p>
                                <strong>Antenne de Gardanne :</strong>
                                <br />
                                ☞ 19 Rue Borely, 13120 Gardanne
                            </p>

                            <br />
                            <br />

                            <p>
                                <strong>Antenne du Puy-Sainte-Réparade :</strong>
                                <br />
                                ☞ 11 Avenue de l'ancienne poste, 13610 Le-Puy-Sainte-Réparade
                            </p>

                            <br />
                            <br />

                            <p>
                                <strong>Antenne de Trets :</strong>
                                <br />
                                ☞ 2 Av. Mirabeau, 13530
                            </p>
                        </div>
                        <br />
                        <hr />
                        <br />

                    </div>
                </div>

                <form
                    netlify="true"
                    name="contact"
                    onSubmit={handleSubmit}
                    className="text-center justify-items-center"
                >
                    <h2 className="h2Contact text-black text-center text-5xl font-extrabold">
                        👇 Contactez-nous ! 👇
                    </h2>
                    <br />
                    <br />
                    <div className="mb-5">
                        <label htmlFor="" className="text-black font-bold mr-5">
                            Nom :
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="bg-gray-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="leading-7 text-sm text-black font-bold mr-5">
                            Email :
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="bg-gray-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="message"
                            className="text-black font-bold mr-5"
                        >
                            Message :
                        </label>
                        <br />
                        <br />
                        <textarea
                            id="message"
                            name="message"
                            className="w-5/12 bg-gray-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-12"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </section>
    );
}