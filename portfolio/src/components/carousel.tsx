"use client";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Image from "next/image";

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const projects = [
    {
      title: "FreshFeasts",
      description: "A meal delivery service",
      techStack: ["React", "Node.js", "MongoDB"],
      image: "/FreshFeasts.gif", // Path to image
      isGif: true,
    },
    {
      title: "TravelSwipe",
      description: "Swipe your way to a perfect trip",
      techStack: ["React Native", "TypeScript", "AWS"],
      image: "/travelswipe.jpg", // Path to image
    },
  ];

  const length = projects.length;

  return (
    <section className="relative flex flex-col items-center justify-center">
      <FaArrowAltCircleLeft
        className="absolute left-4 z-10 text-4xl cursor-pointer"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="absolute right-4 z-10 text-4xl cursor-pointer"
        onClick={nextSlide}
      />

      {projects.map((project, index) => (
        <div
          className={`opacity-0 transition-opacity duration-300 ease-in-out ${
            index === current ? "opacity-100" : ""
          }`}
          key={index}
        >
          {index === current && (
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold mt-4">{project.title}</h3>
              {project.isGif ? (
                <img
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                />
              )}

              <p className="text-lg mt-2">{project.description}</p>
              <p className="text-sm mt-1">
                Tech Stack: {project.techStack.join(", ")}
              </p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
