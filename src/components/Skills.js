import React from "react";
import { ChipIcon, CodeIcon, CogIcon, BriefcaseIcon } from "@heroicons/react/solid";
import { skills, skills2, skills3 } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                <ChipIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-4">
                    Skills &amp; Technologies
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Harnessing a diverse range of skills and advanced technologies to drive
                    innovation and deliver exceptional results. Explore the tools and expertise 
                    that empower my creative and technical endeavors.
                </p>
                </div>
                <div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="w-full text-center mb-4">
                            <p className="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                Programming
                            </p>
                        </div>
                        {skills.map((skill) => (
                            <div key={skill} className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                    <CodeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                    <span className="title-font font-medium text-white">
                                        {skill}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="w-full text-center mb-4">
                            <p className="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                Technologies
                            </p>
                        </div>
                        {skills2.map((skill) => (
                            <div key={skill} className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                    <CogIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                    <span className="title-font font-medium text-white">
                                        {skill}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="w-full text-center mb-4">
                            <p className="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                General
                            </p>
                        </div>
                        {skills3.map((skill) => (
                            <div key={skill} className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                    <BriefcaseIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                    <span className="title-font font-medium text-white">
                                        {skill}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
