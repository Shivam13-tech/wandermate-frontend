"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Booking() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState({});

  const images = [
    "/Images/1.png",
    "/Images/2.png",
    "/Images/3.png",
    "/Images/4.png",
  ];

  const trekkingExpeditions = [
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
    "Embark on a journey through the untamed beauty of the Himalayas with our exhilarating trekking expedition. This unforgettable adventure begins at the base of towering peaks, where you will find yourself surrounded by lush forests, cascading waterfalls, and breathtaking vistas at every turn.",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const toggleVisibility = (index) => {
    setShowContent((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="flex justify-center align-center mt-4">
      <div className="flex flex-wrap w-[20vw] mx-4 max-h-[80vh] overflow-y-auto">
        {trekkingExpeditions.map((content, index) => (
          <div
            key={index}
            className="w-80 border border-gray-400 rounded mx-2 my-2"
          >
            <div className="flex items-center justify-center">
              <button onClick={prevSlide} className="text-white rounded-l">
                <Image
                  width={250}
                  height={70}
                  src="/Images/left-arrow.png"
                  alt="left-arrow"
                />
              </button>
              <div className="overflow-hidden flex-shrink-0">
                {images.map((image, index) => (
                  <Image
                    width={250}
                    height={70}
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`w-full ${
                      index === currentIndex ? "" : "hidden"
                    } rounded my-2`}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className="text-white  rounded-r">
                <Image
                  width={250}
                  height={70}
                  src="/Images/right-arrow.png"
                  alt="right-arrow"
                />
              </button>
            </div>
            <h1 className="text-center">Trek title</h1>
            <p className="mx-2 my-2">
              {showContent[index] ? (
                <>{content}</>
              ) : (
                <>
                  {content.substring(0, 100)}{" "}
                  {content.length > 100 && (
                    <>
                      {" "}
                      <span
                        style={{ cursor: "pointer", color: "blue" }}
                        onClick={() => toggleVisibility(index)}
                      >
                        Read More
                      </span>
                    </>
                  )}
                </>
              )}
            </p>
            <button className="rounded bg-red-600 sm:w-[70vw] md:w-[45vw] lg:w-[15vw] sm:h-[5vh] md:h-[5vh] lg:h-[4vh] m-[1vh] text-background shadow-2xl">
              Chat
            </button>
          </div>
        ))}
      </div>
      <div className="border border-gray-400 h-[80vh] w-[60vw]"></div>
    </div>
  );
}
