import React from "react";
import image from "../../public/assets/profile_.jpeg";
import image_ from "../../public/assets/image_right_side.jpeg";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="hero-gradient rounded-lg p-8 md:p-12 mb-10">
    <div className="container-custom px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          
          <div className="flex flex-col items-center gap-2">
            <picture className="aspect-square rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-md w-32 md:w-40 lg:w-48 hover:shadow-lg transition-all duration-300">
              <img
                src={image}
                alt="Profile Photo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-red-500">
              Sonu Kumar
            </h3>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 dark:text-green-300 mb-3">
              I build beautiful, responsive web apps
            </h1>
            <p className="text-muted dark:text-gray-300 mb-5">
              Full-stack engineer focusing on React, Next.js, Tailwind and AI-enabled
              interfaces for real-world users — like farmers in India.
            </p>
            <div className="flex gap-3">
              <Link
                to="/projects"
                className="px-4 py-2 rounded-md text-white cta-primary shadow hover:opacity-95"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-md border border-green-700 text-green-700 bg-white/80 dark:bg-gray-800/70 dark:text-green-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block relative">
          <picture className="block rounded-lg overflow-hidden">
            <img
              className="w-full h-64 md:h-96 object-cover"
              src={image_}
              alt="Modern tech workspace with laptop and code"
              loading="lazy"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 dark:to-black/50 rounded-lg pointer-events-none" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
