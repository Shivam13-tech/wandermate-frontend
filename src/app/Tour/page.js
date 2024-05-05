"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Tour() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8); // Number of items per page

  const images = [
    "/Images/1.png",
    "/Images/2.png",
    "/Images/3.png",
    "/Images/4.png",
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

  const totalPosts = trekkingExpeditions.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentExpeditions = trekkingExpeditions.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <div>
      <h1 className="mt-4 text-center">
        Explore Your Next Adventure: Tours & Treks Await!
      </h1>
      <div className="flex flex-wrap justify-center">
        {currentExpeditions.map((content, index) => (
          <div
            key={index}
            className="w-96 border border-gray-400 rounded mx-2 my-2"
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
                {images.map((image, idx) => (
                  <Image
                    key={idx}
                    width={250}
                    height={70}
                    src={image}
                    alt={`Slide ${idx + 1}`}
                    className={`w-full ${
                      idx === currentIndex ? "" : "hidden"
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
            <h1>Tour name</h1>
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
            <p>Price: 120$</p>
            <button>Book now</button>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="my-2">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    onClick={() => paginate(pageNumber)}
                    style={{
                      backgroundColor: currentPage === pageNumber ? "#ccc" : "",
                    }}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <PaginationNext
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
