'use client'
import { useState } from 'react'

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = 3; // Number of slides you have

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="relative flex flex-col items-center justify-center">
      <FaArrowAltCircleLeft className="absolute left-4 z-10 text-4xl cursor-pointer" onClick={prevSlide} />
      <FaArrowAltCircleRight className="absolute right-4 z-10 text-4xl cursor-pointer" onClick={nextSlide} />

      {/* Replace the divs below with your project info */}
      {Array.from({ length }).map((_, index) => (
        <div
          className={`opacity-0 transition-opacity duration-300 ease-in-out ${index === current ? 'opacity-100' : ''}`}
          key={index}
        >
          {index === current && (
            <div className="text-4xl font-bold">
              Project {index + 1}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
