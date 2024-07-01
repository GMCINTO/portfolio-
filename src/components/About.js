import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ext-gray-400">
                        Hi, I'm Glen.
                        <br className="hidden lg:inline-block" />I love to learn and build cool things.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    I have recently graduated with a bachelor's degree in Computer Science, bringing extensive experience in problem-solving 
                    and critical thinking. During my years in the automotive industry as a student and then as a technician, 
                    I honed my skills in diagnostics and repair work. These experiences nurtured my passion for solving problems 
                    and making broken things work again. This passion seamlessly translated into my studies in computer science, 
                    where I discovered a love for tackling complex and multifaceted issues. As I embark on my career journey, 
                    I am eager to continue learning and growing my skills and knowledge. I thrive on challenges that push my 
                    understanding and seek opportunities that allow me to innovate and solve new problems. I am excited to contribute 
                    to building the future and am enthusiastic about the potential to be part of a dynamic and forward-thinking team.

                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding2.svg"
                    />
                </div>
            </div>
        </section>
    );
}
