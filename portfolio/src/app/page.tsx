/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiTiktok, SiInstagram } from "react-icons/si";
import About from "./about/page";
import Header from '../components/header';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="tawney-travels-bg">
      <Header />
      </div>
      {/* Content */}
      <div className="flex flex-col items-start w-full space-y-12 p-12 bg-blustery-blue">
        
        {/* Services Section */}
        <section id="services" className="w-full scroll-offset">
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
          <hr className="mb-4 border-murky-teal border-2" />
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
          <hr className="mt-4 border-murky-teal border-2" />
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
                visit, and trip length. BucketList leverages the Amadeus API for
                flight informaiton.
              </p>
              <p className="text-gray-800 mb-2">
                The Explorer Map allows users to see places they have been and
                where they want to go! BucketList leverages the Google Maps API
                for maps.
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
          <hr className="mt-4 border-murky-teal border-2" />
          <div className="flex mt-4">
            <div>
              <h2 className="text-2xl font-extrabold text-blue-lagoon mb-2 underline">
                {" "}
                Atelier Ecommerce Site{" "}
              </h2>
              <p className="text-gray-800 mb-2">
                {" "}
                Atelier E-Commerce is an industry-standard e-commerce web page.
                I developed the product overview frontend and the reviews
                service backend.
              </p>
              <p className="text-gray-800 mb-2">
                The product overview is crafted to catch the user&apos;s
                attention and provide a smooth scrolling experience for
                reviewing the product&apos;s images. It maintains
                high-resolution images and offers expansion and magnification
                features, allowing users to confidently select their preferred
                size, color, and style.
              </p>
              <p className="text-gray-800 mb-2">
                The backend reviews service leverages 3 EC2 microinstances and
                NGINX round robin load-balancing to serve up to 1500 client
                requests per second.{" "}
              </p>
              <h3 className="text-xl font-bold text-blue-lagoon mb-2">
                Tech Stack
              </h3>
              <p className=" text-gray-800 mb-2">
                {" "}
                JavaScript, React, TailwindCSS, PostgreSQL, Node.js, Express,
                Axios, AWS, Nginx
              </p>
              <div className="flex">
                <a
                  href="https://github.com/carolinerobbins/AtelierEcommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-lagoon font-bold hover:underline"
                >
                  <SiGithub className="text-xl mr-2" />
                  Frontend
                </a>
                <a
                  href="https://github.com/carolinerobbins/atelier-reviews-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-lagoon font-bold ml-2 hover:underline"
                >
                  <SiGithub className="text-xl mr-2" />
                  Reviews API
                </a>
              </div>
            </div>
            <img
              src="./atelier.gif"
              alt="Atelier E-Commerce"
              width={600}
              height={200}
            />
          </div>
          <hr className="mt-4 border-murky-teal border-2" />
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full">
          <h2 className="text-3xl font-extrabold mb-4 text-murky-teal">
            Contact
          </h2>
          <a
            href="mailto:caroline.tawney@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl mb-4 text-blue-lagoon hover:underline"
          >
            caroline.tawney@gmail.com
          </a>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/robbinscaroline/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-3xl mr-2 text-blue-lagoon hover:underline"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://github.com/carolinerobbins"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-3xl mr-2 text-blue-lagoon hover:underline"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.tiktok.com/@tawneytravels?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-3xl mr-2 text-blue-lagoon hover:underline"
            >
              <SiTiktok />
            </a>
            <a
              href="https://www.instagram.com/tawneytravels/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-3xl mr-2 text-blue-lagoon hover:underline"
            >
              <SiInstagram />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
