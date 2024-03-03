// src/components/Navbar.js

import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg md:sticky">
            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="mb-4 text-white cursor-pointer font-large title-font md:mb-0"
                    role="button"
                    tabIndex={0}
                >
                    SANJAY KUMAR
                </Link>
                <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-yellow-700">
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="mr-5 text-white cursor-pointer hover:text-orange-500"
                        role="button"
                        tabIndex={0}
                    >
                        Projects
                    </Link>
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="mr-5 text-white cursor-pointer hover:text-orange-500"
                        role="button"
                        tabIndex={0}
                    >
                        Skills
                    </Link>
                    <Link
                        to="education"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="mr-5 text-white cursor-pointer hover:text-orange-500"
                        role="button"
                        tabIndex={0}
                    >
                        Education
                    </Link>
                </nav>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="inline-flex items-center px-3 py-1 mt-4 text-base text-white bg-indigo-500 border-0 rounded cursor-pointer focus:outline-none hover:bg-indigo-600 md:mt-0"
                    role="button"
                    tabIndex={0}
                >
                    Hire Me
                </Link>
            </div>
        </header>
    );
}
