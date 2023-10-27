"use client";
import { useState } from "react";
import Header from "../../components/header";
import Carousel from "@/components/carousel";

export default function Experience() {
  const [selectedService, setSelectedService] = useState("webDevelopment");

  return (
    <div className="tawney-travels-bg">
      <Header />
      <section className="bg-gray-100 bg-opacity-80 p-10 m-10 rounded-lg shadow-md">
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
        <Carousel selectedService={selectedService}/>
      </section>
    </div>
  );
}
