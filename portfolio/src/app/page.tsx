/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Head from 'next/head';
import Carousel from "../components/carousel";
import { SiGithub } from "react-icons/si";

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
              <a href="#experience">Experience</a>
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
        <section id="about">
          <h2 className="text-3xl font-extrabold mb-4 text-murky-teal">
            About Me
          </h2>
          <div className="flex relative items-center">
            <div className="mr-4">
              <p className="text-lg text-gray-800 mb-2">
                Hey there! I&apos;m Caroline, a seasoned professional in travel
                tech and software development. With a decade of industry
                experience under my belt, I&apos;ve worn many hats — from
                managing accounts at leading companies like Expedia and Airbnb,
                to diving deep into the world of software development.
              </p>
              <p className="text-lg text-gray-800 mb-2">
                Ever since I was a child, inspired by shows like &quot;Great
                Hotels,&ldquo; I knew I was destined for the travel industry.
                From mimicking TV hosts on family vacations to pursuing formal
                education at the Hotel School at Cornell, my journey has been
                one for the books (or perhaps a travel blog).
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
            <div className="rounded-full overflow-hidden">
              <Image
                src="/trevi_fountain.jpg" // Route to the image file
                alt="Trevi Fountain" // Alt tag
                width={750} // Desired width
                height={750} // Desired height
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full">
          <h2 className="text-3xl font-extrabold mb-4 text-murky-teal">
            Services
          </h2>
          <h3 className="text-blue-lagoon text-xl font-bold mb-2">
            Website Design
          </h3>
          <p className="text-lg text-gray-800 mb-2">
            Need a slick, user-friendly website for your hospitality business?
            Let&apos;s chat! I specialize in creating compelling web experiences
            that convert visitors into customers.
          </p>
          <h3 className="text-blue-lagoon text-xl font-bold mb-2">
            Vacation Rental Consulting
          </h3>
          <p className="text-lg text-gray-800 mb-2">
            With 5 years at Expedia and 3 years at Airbnb, I&apos;ve got the
            insider perspective on what it takes to excel in this space. If
            you&apos;re a hotel looking to transition into the vacation rental
            market, or an Airbnb host looking to optimize, I&apos;m your go-to
            expert.
          </p>
          <h3 className="text-blue-lagoon text-xl font-bold mb-2">
            Travel Planning
          </h3>
          <p className="text-lg text-gray-800 mb-2">
            Love the idea of travel but overwhelmed by the planning? I offer
            personalized travel planning services to make your next adventure a
            breeze.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full">
          <h2 className="text-3xl font-extrabold mb-4 text-murky-teal">
            Experience
          </h2>
          <div className="flex">
            <img
              src="./FreshFeasts.gif"
              alt="FreshFeasts"
              width={200}
              height={100}
            />
            <div className="ml-4">
              <h2 className="text-2xl font-extrabold text-blue-lagoon mb-2 underline">
                {" "}
                FreshFeasts{" "}
              </h2>
              <p className="text-gray-800 mb-2">
                {" "}
                FreshFeasts is a full-stack React Native mobile app built with
                six essential features of a competitive mobile food delivery
                service app (similar to Factor or CookUnity). I developed the
                meal details modal and checkout experience.{" "}
              </p>
              <p className="text-gray-800 mb-2">
                Users can click on items in the carousel or list to open the
                details modal that shows the description, ingredients,
                nutritional information, and reviews. Users can add items to
                their cart directly form the modal.{" "}
              </p>
              <p className="text-gray-800 mb-2">
                The checkout page ensures users can see the current cart of
                picked meals. Each meal item listed will have a dynamic
                incrementer, allowing users to increase the quantity of the
                meal. At the click of the submit button, the cart will be saved
                in order history and redirected to the delivery calendar
                schedule.
              </p>
              <h3 className="text-xl font-bold text-blue-lagoon mb-2">
                Tech Stack
              </h3>
              <p className=" text-gray-800 mb-2">
                {" "}
                Javascript, React Native, TailwindCSS, MongoDB, Node.js,
                Express, Axios
              </p>
              <div className="flex">
                <a
                  href="https://github.com/FreshFeasts/FreshFeasts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-lagoon font-bold hover:underline"
                >
                  <SiGithub className="text-xl mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
          <img
              src="./bucketlist.gif"
              alt="BucketList"
              width={200}
              height={100}
            />
            <div className="ml-4">
              <h2 className="text-2xl font-extrabold text-blue-lagoon mb-2 underline">
                {" "}
                BucketList{" "}
              </h2>
              <p className="text-gray-800 mb-2">
                {" "}
                BucketList is a React Native mobile application designed to help
                travelers easily select where to go on their next trip.{" "}
              </p>
              <p className="text-gray-800 mb-2">
                Destination Discovery leverages the react-native-deck-swiper
                package to allow users to &quot;swipe right&ldquo; on
                destinations they want to add to their Bucket List. Users see an
                image of the destination as well as &quot;tags&ldquo; to
                describe the destination. Users can also mark a destination as
                visited from this screen.{" "}
              </p>
              <p className="text-gray-800 mb-2">
                The Bucket List displays a list of places the user has added to
                their bucket list, along with key flight information that can
                help them make a decision on the right destination for the type
                of trip. Users can filter by nonstop flights, best seasons to
                visit, and trip length. BucketList leverages the Amadeus API
                for flight informaiton.
              </p>
              <p className="text-gray-800 mb-2">
                The Explorer Map allows users to see places they have been and
                where they want to go! BucketList leverages the Google Maps API for maps.
              </p>
              <h3 className="text-xl font-bold text-blue-lagoon mb-2">
                Tech Stack
              </h3>
              <p className=" text-gray-800 mb-2">
                {" "}
                JavaScript, React Native, TailwindCSS, Firebase, Node.js,
                Express, Axios, Amadeus API, Google Maps API
              </p>
              <div className="flex">
                <a
                  href="https://github.com/carolinerobbins/bucketlist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-lagoon font-bold hover:underline"
                >
                  <SiGithub className="text-xl mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
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
