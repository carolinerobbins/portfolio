"use client";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Image from "next/image";

export default function Carousel({
  selectedService,
}: {
  selectedService: string;
}) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const webDevelopment = [
    {
      title: "FreshFeasts",
      description:
        "FreshFeasts is a full-stack React Native mobile app built with six essential features of a competitive mobile food delivery service app (similar to Factor or CookUnity). I developed the meal details modal and checkout experience. \n \n Users can click on items in the carousel or list to open the details modal that shows the description, ingredients,nutritional information, and reviews. Users can add items to their cart directly form the modal. \n \n The checkout page ensures users can see the current cart of picked meals. Each meal item listed will have a dynamic incrementer, allowing users to increase the quantity of the meal. At the click of the submit button, the cart will be saved in order history and redirected to the delivery calendar schedule.",
      techStack: ["Javascript", "React Native", "TailwindCSS", "MongoDB", "Node.js",
      "Express", "Axios"],
      github: "https://github.com/FreshFeasts/FreshFeasts",
      image: "/FreshFeasts.gif",
      isGif: true,
      width: 150
    },
    {
      title: "BucketList",
      description: "BucketList is a React Native mobile application designed to help travelers easily select where to go on their next trip. \n \n Destination Discovery leverages the react-native-deck-swiper package to allow users to \"swipe right\" on destinations they want to add to their Bucket List. Users see an image of the destination as well as tags to describe the destination. Users can also mark a destination as visited from this screen. \n \n The Bucket List displays a list of places the user has added to their bucket list, along with key flight information that can help them make a decision on the right destination for the type of trip. Users can filter by nonstop flights, best seasons to visit, and trip length. BucketList leverages the Amadeus API for flight informaiton. \n \n The Explorer Map allows users to see places they have where they want to go! BucketList leverages the Google Maps API for maps.",
      techStack: ["JavaScript", "React Native", "TailwindCSS", "Firebase", "Node.js",
        "Express", "Axios", "Amadeus API", "Google Maps API"],
      image: "/bucketlist.gif",
      github: "https://github.com/carolinerobbins/bucketlist",
      isGif: true,
      width: 175
    },
    {
      title: "Atelier E-Commerce",
      description:"Atelier E-Commerce is an industry-standard e-commerce web page. I developed the product overview frontend and the reviews service backend. \n \n The product overview is crafted to catch the user\'s attention and provide a smooth scrolling experience for reviewing the product\'s images. It maintains high-resolution images and offers expansion and magnification features, allowing users to confidently select their preferred size, color, and style. \n \n The backend reviews service leverages 3 EC2 microinstances and NGINX round robin load-balancing to serve up to 1500 client requests per second.",
      techStack: ["JavaScript", "React", "TailwindCSS", "PostgreSQL", "Node.js", "Express",
        "Axios", "AWS", "Nginx"],
      image: "atelier.gif",
      github: "https://github.com/carolinerobbins/AtelierEcommerce",
      isGif: true,
      width: 500
    }
  ];

  const length = webDevelopment.length;

  return (
    <section className="relative flex flex-col justify-center">
      <FaArrowAltCircleLeft
        className="absolute left-4 z-10 text-4xl cursor-pointer"
        onClick={prevSlide}
      />
      {webDevelopment.map((project, index) => (
        <div
          className={`opacity-0 transition-opacity duration-300 ease-in-out ${
            index === current ? "opacity-100" : ""
          }`}
          key={index}
        >
          {index === current && (
            <div className="flex mx-20 ">
              {/* {project.isGif ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt={project.title}
                  width={project.width}
                  height={100}
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={100}
                />
              )} */}
              <div className="ml-4 overflow-x-auto">
                <h2 className="text-2xl font-extrabold text-blue-lagoon mb-2 underline">
                  {project.title}
                </h2>
                <p className=" text-gray-800 my-2">
                  {project.description.split("\n").map((str, index, array) =>
                    index === array.length - 1 ? (
                      str
                    ) : (
                      <>
                        {str}
                        <br />
                      </>
                    )
                  )}
                </p>
                <h3 className="text-xl font-bold text-blue-lagoon mb-2">
                  Tech Stack
                </h3>
                <p className="text-gray-800 mb-2">
                  {project.techStack.join(", ")}
                </p>
                <div className="flex">
                  <a
                    href={project.github}
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
          )}
        </div>
      ))}
      <FaArrowAltCircleRight
        className="absolute right-4 z-10 text-4xl cursor-pointer"
        onClick={nextSlide}
      />
    </section>
  );
}
