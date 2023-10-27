/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { SiGithub, SiLinkedin, SiTiktok, SiInstagram } from "react-icons/si";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./about/page";
import Header from "../components/header";
import Carousel from "@/components/carousel";

export default function Home() {
  const [selectedService, setSelectedService] = useState("webDevelopment");

  return (
    <main className="flex flex-col min-h-screen relative">
      <div className="tawney-travels-bg">
        <Header />
        <div className="scroll-container">
          <section id="welcome" className="p-10 m-10 snap-start h-[85vh]">
            {/* <h1 className="text-murky-teal text-4xl font-extrabold mb-4">Welcome</h1> */}
          </section>
          <section
            id="about"
            className="bg-gray-100 bg-opacity-80 p-10 m-10 mb-[75vh] rounded-lg shadow-md snap-center"
          >
            <h1 className="text-murky-teal text-4xl font-extrabold mb-4">
              About Me
            </h1>
            <div className="mb-8">
              <p className="text-lg text-gray-800 mb-2">
                Hey there! I&apos;m Caroline, a seasoned professional in travel
                tech and software development. With a decade of industry
                experience under my belt, I&apos;ve worn many hats — from
                managing accounts at leading companies like Expedia and Airbnb,
                to diving deep into the world of software development. Ever
                since I was a child, inspired by shows like &quot;Great
                Hotels,&ldquo; I knew I was destined for the travel industry.
                From mimicking TV hosts on family vacations to pursuing formal
                education at the Hotel School at Cornell, my journey has been
                one for the books (or perhaps a travel blog).
              </p>
              <h3 className="text-murky-teal text-2xl font-semibold text-custom-olive mb-2">
                My Skills
              </h3>
              <h4 className="text-murky-teal text-xl underline">Technical </h4>
              <p className="text-lg text-gray-800 mb-2">
                JavaScript, TypeScript, React, React Native, Next.js, Python,
                Node.js, Express, PostgreSQL, MongoDB, Firebase
              </p>
              <h4 className="text-murky-teal text-xl underline">
                Professional
              </h4>
              <p className="text-lg text-gray-800 mb-2">
                Team Leadership, Project Management, Communication, Cross-Functional Collaboration,
                Problem Solving, Competitive Intelligence, Account Management, Sales Strategy,
                Negotation, Business Analytics, Training & Development
              </p>
            </div>
          </section>
          <section
            id="services"
            className="bg-gray-100 bg-opacity-80 p-10 m-10 rounded-lg shadow-md snap-center mb-[75vh]"
          >
            <h1 className="text-murky-teal text-4xl font-extrabold mb-4">
              Services
            </h1>
            <div className="mb-8">
              <h2 className="text-murky-teal text-2xl font-semibold text-custom-olive mb-2">
                Web Development
              </h2>
              <p className="text-lg text-gray-800 mb-2">
                Need a slick, user-friendly website for your hospitality
                business? Let&apos;s chat! I specialize in creating compelling
                web experiences that convert visitors into customers.
              </p>
              <h3 className="text-murky-teal text-2xl font-semibold text-custom-olive mb-2">
                Hospitality Consulting
              </h3>
              <p className="text-lg text-gray-800 mb-2">
                With nearly a decade of experience at Expedia and Airbnb,
                I&apos;ve got the insider perspective on what it takes to excel
                in this space. If you&apos;re a hotel looking to transition into
                the vacation rental market, or an Airbnb host looking to
                optimize, I&apos;m your go-to expert. My expertise is pricing
                and revenue management, but I can also support marketing,
                content, social media, and technology recommendations.
              </p>
              <h3 className="text-murky-teal text-2xl font-semibold text-custom-olive mb-2">
                Travel Planning
              </h3>
              <p className="text-lg text-gray-800 mb-2">
                Love the idea of travel but overwhelmed by the planning? I offer
                personalized travel planning services to make your next
                adventure a breeze.
              </p>
            </div>
          </section>
          <section
            id="experience"
            className="bg-gray-100 bg-opacity-80 p-10 m-10 rounded-lg shadow-md snap-center mb-[75vh]"
          >
            <h1 className="text-murky-teal text-4xl font-extrabold mb-4">
              Experience
            </h1>
            <div className="flex mb-4">
              <button
                className={`pr-4 text-murky-teal ${
                  selectedService === "webDevelopment" ? "underline" : ""
                }`}
                onClick={() => setSelectedService("webDevelopment")}
              >
                Web Development
              </button>
              <button
                className={`px-4 py-2 text-murky-teal ${
                  selectedService === "consulting" ? "underline" : ""
                }`}
                onClick={() => setSelectedService("consulting")}
              >
                Hospitality Consulting
              </button>
              <button
                className={`px-4 py-2 text-murky-teal ${
                  selectedService === "travelPlanning" ? "underline" : ""
                }`}
                onClick={() => setSelectedService("travelPlanning")}
              >
                Travel Planning
              </button>
            </div>
            <Carousel selectedService={selectedService} />
          </section>
          <section
            id="contact"
            className="bg-gray-100 bg-opacity-80 p-10 m-10 rounded-lg shadow-md mb-[75vh] snap-center w-4/12"
          >
            <h2 className="text-3xl font-extrabold mb-4 text-murky-teal">
              Contact
            </h2>
            <p className="text-murky-teal text-xl">Interested in working together?</p>
            <a
              href="mailto:caroline.tawney@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xl mb-4 text-deep-pink hover:underline"
            >
              caroline.tawney@gmail.com
            </a>
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/robbinscaroline/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-3xl mr-2 text-murky-teal hover:underline"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://github.com/carolinerobbins"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-3xl mr-2 text-murky-teal hover:underline"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.tiktok.com/@tawneytravels?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-3xl mr-2 text-murky-teal hover:underline"
              >
                <SiTiktok />
              </a>
              <a
                href="https://www.instagram.com/tawneytravels/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-3xl mr-2 text-murky-teal hover:underline"
              >
                <SiInstagram />
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
