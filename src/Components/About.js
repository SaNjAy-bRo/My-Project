// src/components/About.js

import React from "react";
import { Link } from "react-scroll";
import { faGithub }  from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Fonticon = [
    {
        icon: <FontAwesomeIcon icon={faGithub} />
    },
];

export default function About() {
    return (
        <section id="about">
            <div className="container flex flex-col items-center px-10 py-20 mx-auto md:flex-row">
                <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
                    <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">
                        Hi, I'm $@Nj@y...
                        <br className="hidden lg:inline-block" />I love to build amazing
                        Websites.
                        
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        
                    Passionate about web development, I thrive on crafting innovative, user-centric digital experiences. Committed to staying on the cutting edge of technology and design, I bring a keen eye for detail to ensure a seamless and captivating online journey. With a love for problem-solving, I'm dedicated to pushing the boundaries of what's possible in the ever-evolving world of web development.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            to="contact" spy={true} smooth={true} duration={500}
                            className="inline-flex px-6 py-2 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600">
                            Contact Me
                        </Link>
                        <Link
                            to="projects" spy={true} smooth={true} duration={500}
                            className="inline-flex px-6 py-2 ml-4 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white">
                            My Skills
                        </Link>
                    </div>
                </div>
                <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./images/HACKER.png"
                    />
                </div>
            </div>
        </section>
    );
}