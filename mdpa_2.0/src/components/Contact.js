/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";


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
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative">
            <div className="">
                <div className="">
                    <iframe src="https://www.google.com/maps/d/embed?mid=1Mr03bRIkcBdmdU7L7eSGBCNEIXcOjP4&hl=fr&ehbc=2E312F" width="1505" height="500" title="test">
                    </iframe>
                    <div className="">
                        <div className="">
                            <h2 className="">
                                ADDRESSE
                            </h2>
                            <p className="">
                                <p><strong>Antenne d'Aix-en-Provence :</strong> ☞ 14 rue Charloun Rieu, 13090 Aix-en-Provence</p>
                                <p><strong>GHINS :</strong> ☞ 11 Rue Jean-Louis Vaudoyer, 13090 Aix-en-Provence </p>
                                <p>Antenne de Gardanne: 19 : ☞ Rue Borely, 13120 Gardanne</p>
                                <p>Antenne de Bouc-Bel-Air : ☞ Pole Solidarité, Rue Frédéric Chopin, 13320 Bouc-Bel-Air</p>
                                <p>Antenne des Pennes Mirabeau : ☞ Place Victorin Isnard, 13170 Les Pennes-Mirabeau</p>
                                <p>Antenne du Puy-Sainte-Réparade : ☞ 11 Avenue de l'ancienne poste, 13610 Le-Puy-Sainte-Réparade</p>
                                <p>Antenne de Trets : ☞ 2 Av. Mirabeau, 13530</p>
                                <br />
                            </p>
                        </div>
                        <div className="">
                            <h2 className="">
                                EMAIL
                            </h2>
                            <a className="">
                                reedbarger@email.com
                            </a>
                            <h2 className="">
                                TÉLÉPHONE
                            </h2>
                            <p className="">04.42.33.09.16</p>
                        </div>
                    </div>
                </div>
                <form
                    netlify="true"
                    name="contact"
                    onSubmit={handleSubmit}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                >
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Hire Me
                    </h2>
                    <p className="leading-relaxed mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                        suscipit officia aspernatur veritatis. Asperiores, aliquid?
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
