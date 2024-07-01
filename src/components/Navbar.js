import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Contact() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
                    Glen McIntosh
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-800 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 text-white hover:text-white hover:bg-green-600 rounded text-base mt-4 md:mt-0">
                        Previous Experience
                    </a>
                    <a href="#skills" className="mr-5 text-white hover:text-white hover:bg-green-600 rounded text-base mt-4 md:mt-0">
                        Competencies
                    </a>
                    <a href="#education" className="mr-5 text-white hover:text-white hover:bg-green-600 rounded text-base mt-4 md:mt-0">
                        Education
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none text-white hover:text-white hover:bg-green-600 rounded text-base mt-4 md:mt-0">
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}
