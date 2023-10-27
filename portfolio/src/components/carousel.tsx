"use client";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Image from "next/image";

type Service = "webDevelopment" | "consulting" | "travelPlanning";

type CommonProjectData = {
  title: string;
  description: string;
  techStack?: string[];
  github?: string;
  image?: string;
  isGif?: boolean;
  width?: number;
};


type ServiceData = {
  [K in Service]: Array<CommonProjectData>;
};

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

  const serviceData: ServiceData = {
    webDevelopment: [
      {
        title: "FreshFeasts",
        description:
          "FreshFeasts is a full-stack React Native mobile app built with six essential features of a competitive mobile food delivery service app (similar to Factor or CookUnity). I developed the meal details modal and checkout experience. \n \n Users can click on items in the carousel or list to open the details modal that shows the description, ingredients,nutritional information, and reviews. Users can add items to their cart directly form the modal. \n \n The checkout page ensures users can see the current cart of picked meals. Each meal item listed will have a dynamic incrementer, allowing users to increase the quantity of the meal. At the click of the submit button, the cart will be saved in order history and redirected to the delivery calendar schedule.",
        techStack: [
          "Javascript",
          "React Native",
          "TailwindCSS",
          "MongoDB",
          "Node.js",
          "Express",
          "Axios",
        ],
        github: "https://github.com/FreshFeasts/FreshFeasts",
        image: "/FreshFeasts.gif",
        isGif: true,
        width: 150,
      },
      {
        title: "BucketList",
        description:
          'BucketList is a React Native mobile application designed to help travelers easily select where to go on their next trip. \n \n Destination Discovery leverages the react-native-deck-swiper package to allow users to "swipe right" on destinations they want to add to their Bucket List. Users see an image of the destination as well as tags to describe the destination. Users can also mark a destination as visited from this screen. \n \n The Bucket List displays a list of places the user has added to their bucket list, along with key flight information that can help them make a decision on the right destination for the type of trip. Users can filter by nonstop flights, best seasons to visit, and trip length. BucketList leverages the Amadeus API for flight informaiton.',
        techStack: [
          "JavaScript",
          "React Native",
          "TailwindCSS",
          "Firebase",
          "Node.js",
          "Express",
          "Axios",
          "Amadeus API",
          "Google Maps API",
        ],
        image: "/bucketlist.gif",
        github: "https://github.com/carolinerobbins/bucketlist",
        isGif: true,
        width: 175,
      },
      {
        title: "Atelier E-Commerce",
        description:
          "Atelier E-Commerce is an industry-standard e-commerce web page. I developed the product overview frontend and the reviews service backend. \n \n The product overview is crafted to catch the user's attention and provide a smooth scrolling experience for reviewing the product's images. It maintains high-resolution images and offers expansion and magnification features, allowing users to confidently select their preferred size, color, and style. \n \n The backend reviews service leverages 3 EC2 microinstances and NGINX round robin load-balancing to serve up to 1500 client requests per second.",
        techStack: [
          "JavaScript",
          "React",
          "TailwindCSS",
          "PostgreSQL",
          "Node.js",
          "Express",
          "Axios",
          "AWS",
          "Nginx",
        ],
        image: "atelier.gif",
        github: "https://github.com/carolinerobbins/AtelierEcommerce",
        isGif: true,
        width: 500,
      },
    ],
    consulting: [
      {
        title: "Online Travel Agency Optimization",
        description:
          "During my tenures at Expedia and Airbnb, I had the privilege of directly collaborating with hundreds of hotels and vacation rentals to significantly enhance their online travel agency (OTA) listings and bolster search performance. My role entailed a meticulous evaluation of existing listings, identifying areas of improvement to optimize visibility and attractiveness to potential guests. \n \n At Airbnb specifically, I was deeply involved in assisting hosts in improving their review scores — a critical factor in OTA search rankings. A major part of this initiative involved educating hosts on the importance of comprehensive amenity disclosure, like mentioning the availability of cooking basics and EV charging, which significantly impacted guest satisfaction and, consequently, review scores. Moreover, I championed a proactive review response strategy, encouraging hosts to engage with reviews, both positive and negative, to foster a sense of community and trust with potential future guests. \n \n Through these strategic measures, I was able to foster a culture of continuous improvement among the host community, resulting in enhanced listing quality, better review scores, and ultimately, increased booking rates. My initiatives not only enriched the guest-host interaction but also had a tangible impact on search performance, creating a win-win scenario for both hosts and the platform.",
      },
      {
        title: "Revenue Management",
        description: "In my collaboration with revenue managers, I've honed a knack for enhancing properties’ RevPAR through strategic adjustments in occupancy or ADR to meet each hotel’s unique targets. A notable instance was my partnership with an independent hotel in San Francisco plagued by habitual rate reductions to achieve nightly sell-outs. By initiating a forward-booking strategy, we successfully uplifted rates, culminating in a $10 surge in ADR without denting occupancy rates. During my tenure at Airbnb, I worked on a pivotal shift in pricing models alongside the product team, transitioning to the industry-standard rate plans. This experience distinctly positions me in the realm of revenue management."
      },
    ],
    travelPlanning: [
      {
        title: "Alps Ski Escape",
        description: "I orchestrated a multi-country journey through the scenic Alps, covering key Ikon Pass resorts including the Dolomites, Zermatt, and Chamonix-Mont Blanc. The planning phase was intricate, entailing the coordination of multiple transfers across international borders, securing favorable lodging near the resorts, and ensuring a smooth flow of activities throughout the trip. \n \n The venture involved navigating diverse regional travel regulations and orchestrating a mix of transportation modes like trains and private transfers to ensure seamless transitions from one destination to the next. In each locale, I arranged lodging that provided easy access to the slopes, maximizing the time spent enjoying the resorts. \n \n Moreover, I compiled a structured yet flexible itinerary that balanced skiing excursions with opportunities to soak in the local culture and scenery. The success of this adventure underscores my ability to manage complex logistics and create a well-rounded travel experience in varying geographical landscapes."
      },
      {
        title: "Japanese Adventure",
        description: "I planned a 10-day group trip to Japan that included visits to Tokyo, Nikko, Mt. Fuji, and Kyoto. The journey started in Tokyo, where we explored the city's lively atmosphere and famous sights. From there, we ventured to the peaceful sanctuaries of Nikko, followed by a day at the awe-inspiring slopes of Mt. Fuji, and wrapped up our adventure in the historically rich city of Kyoto. \n \n The planning involved sorting out accommodations, transportation, and activities for the group. I booked various lodgings that were both comfortable and conveniently located for our excursions. For transportation, I organized train reservations to ensure smooth travel between the different destinations, making the most of Japan’s efficient rail system. \n \n The itinerary had a good mix of guided tours, free exploration time, and cultural experiences, giving the group a chance to see both the modern and traditional sides of Japan. I also made sure to keep some flexibility in the schedule to accommodate any unexpected changes or spontaneous decisions, showing a balance between careful planning and adaptability. This trip showcased my ability to handle the many details involved in planning a multi-city group travel experience."
      }
    ],
  };

  const selectedArray = serviceData[selectedService as Service];
  const length = selectedArray.length;

  return (
    <section className="relative flex flex-col justify-center h-[50vh]">
      <FaArrowAltCircleLeft
        className="absolute left-4 z-10 text-4xl cursor-pointer"
        onClick={prevSlide}
      />
      {selectedArray.map((project, index) => (
        <div
          className={`opacity-0 transition-opacity duration-300 ease-in-out ${
            index === current ? "opacity-100" : ""
          }`}
          key={index}
        >
          {index === current && (
            <div className="flex mx-20">
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
                <h2 className="text-2xl font-extrabold text-deep-pink mb-2 underline">
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
                {project.techStack ? (
                  <>
                    <h3 className="text-xl font-bold text-deep-pink mb-2">
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
                        className="flex items-center text-deep-pink font-bold hover:underline"
                      >
                        <SiGithub className="text-xl mr-2" />
                        View on GitHub
                      </a>
                    </div>
                  </>
                ) : null}
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
