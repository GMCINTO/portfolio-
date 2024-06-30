import React from "react";
import {BadgeCheckIcon, LibraryIcon, AcademicCapIcon } from "@heroicons/react/solid";
import { certifications, education } from "../data";

export default function Education() {
    return (
        <section id="education" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center">
                <AcademicCapIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Education &amp; Certifications
                </h1>
                <div className="flex flex-wrap m-4">
                    {education.map((education) => (
                    <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-600 bg-opacity-40 p-8 rounded text-center">
                            <LibraryIcon className="block w-8 text-gray-500 mb-4 mx-auto" />
                            <div>
                                <span className="title-font font-medium text-white text-xl mb-2 block">
                                    {education.degree}
                                </span>
                                <span className="text-gray-500 text-lg mb-2 block">
                                    {education.college}
                                </span>
                                <span className="text-gray-400 text-sm block">
                                    {education.year}
                                </span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="flex flex-wrap m-4">
                    {certifications.map((certification) => (
                    <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-600 bg-opacity-40 p-8 rounded text-center">
                            <BadgeCheckIcon className="block w-8 text-gray-500 mb-4 mx-auto" />
                            <div>
                                <span className="title-font font-medium text-white text-xl mb-2 block">
                                    {certification.cert}
                                </span>
                                <span className="text-gray-500 text-lg mb-2 block">
                                    {certification.id}
                                </span>
                                <span className="text-gray-400 text-sm block">
                                    {certification.exp}
                                </span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
