"use client";
import Image from "next/image";
import Carousel from "../components/carousel";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-12 bg-blustery-blue">
      {/* Header */}
      <header className="flex justify-between items-center w-full mb-12">
        {/* Name */}
        <h1 className="text-4xl font-bold text-murky-teal">Caroline Robbins</h1>
        {/* Menu */}
        <nav className="text-lg text-murky-teal">
          <ul className="flex space-x-8">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Content */}
      <div className="flex flex-col items-start w-full space-y-12">
        {/* About Section */}
        <section id="about" className="w-full">
          <h2 className="text-3xl font-extrabold mb-4 text-murky-teal">
            About Me
          </h2>
          <Image
            src="" // Route to the image file
            alt="Your description" // Alt tag
            width={500} // Desired width
            height={300} // Desired height
          />
          {/* Who I Am */}
          <div className="mb-8">
            <p className="text-lg text-gray-800 mb-2">
              Hey there! I&apos;m Caroline, a seasoned professional in travel
              tech and software development. With a decade of industry
              experience under my belt, I&apos;ve worn many hats — from managing
              accounts at leading companies like Expedia and Airbnb, to diving
              deep into the world of software development.
            </p>
            <p className="text-lg text-gray-800 mb-2">
              Ever since I was a child, inspired by shows like &quot;Great
              Hotels,&ldquo; I knew I was destined for the travel industry. From
              mimicking TV hosts on family vacations to pursuing formal
              education at the Hotel School at Cornell, my journey has been one
              for the books (or perhaps a travel blog).
            </p>
            <p className="text-lg text-gray-800 mb-2">
              I&apos;m proficient in TypeScript, React, React Native, Python,
              AWS, and databases (SQL & NoSQL). But my tech skills aren&apos;t
              the only thing that defines me. My knack for team collaboration,
              project management, and communication helps me create innovative
              solutions that enhance user experiences and tackle real-world
              challenges.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full">
          <h2 className="text-3xl font-extrabold mb-4 text-murky-teal">
            Services
          </h2>
          <h3 className="text-pastel-green text-xl font-bold mb-2">
            Website Design
          </h3>
          <p className="text-lg text-gray-800 mb-2">
            Need a slick, user-friendly website for your hospitality business?
            Let&apos;s chat! I specialize in creating compelling web experiences
            that convert visitors into customers.
          </p>
          <h3 className="text-pastel-green text-xl font-bold mb-2">
            Vacation Rental Consulting
          </h3>
          <p className="text-lg text-gray-800 mb-2">
            With 5 years at Expedia and 3 years at Airbnb, I&apos;ve got the
            insider perspective on what it takes to excel in this space. If
            you&apos;re a hotel looking to transition into the vacation rental
            market, or an Airbnb host looking to optimize, I&apos;m your go-to
            expert.
          </p>
          <h3 className="text-pastel-green text-xl font-bold mb-2">
            Travel Planning
          </h3>
          <p className="text-lg text-gray-800 mb-2">
            Love the idea of travel but overwhelmed by the planning? I offer
            personalized travel planning services to make your next adventure a
            breeze.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full">
          <h2 className="text-3xl font-extrabold mb-4 text-murky-teal">
            Projects
          </h2>
          <Carousel />
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full">
          <h2 className="text-3xl font-extrabold mb-4 text-murky-teal">
            Contact
          </h2>
          <p>How to reach you.</p>
        </section>
      </div>
    </main>
  );
}
