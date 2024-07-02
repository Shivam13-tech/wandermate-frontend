/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function Booking() {
  const [userId, setUSERID] = useState("");
  const [tours, setTours] = useState([]);
  const [tourData, setTourData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState({});
  const [showContent, setShowContent] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8); // Number of items per page

  useEffect(() => {
    const uservalue = localStorage.getItem("userId");
    if (uservalue) {
      setUSERID(uservalue);
    }
  }, []);

  useEffect(() => {
    if (!userId) return;
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://wandermate-backend.onrender.com/api/auth/getuser/${userId}`
        );
        console.log(response);
        const boughtTours = response.data.user[0].boughtTours;
        fetchAllTours(boughtTours);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUserData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const fetchAllTours = async (tourIds) => {
    try {
      const tourPromises = tourIds.map((tourId) =>
        axios.get(
          `https://wandermate-backend.onrender.com/api/user/gettour/${tourId}`
        )
      );
      const tourResponses = await Promise.all(tourPromises);
      const tourData = tourResponses.map((response) => ({
        ...response.data.Tourinfo[0],
        link: response.data.link,
      }));
      setTourData(tourData);

      const initialIndexes = {};
      tourData.forEach((tour) => {
        initialIndexes[tour._id] = 0;
      });
      setCurrentIndex(initialIndexes);
    } catch (error) {
      console.error("Failed to fetch tours:", error);
    }
  };

  const nextSlide = (tourId) => {
    setCurrentIndex((prevIndex) => {
      const imagesLength = tourData.find((tour) => tour._id === tourId).images
        .length;
      return {
        ...prevIndex,
        [tourId]:
          prevIndex[tourId] === imagesLength - 1 ? 0 : prevIndex[tourId] + 1,
      };
    });
  };

  const prevSlide = (tourId) => {
    setCurrentIndex((prevIndex) => {
      const imagesLength = tourData.find((tour) => tour._id === tourId).images
        .length;
      return {
        ...prevIndex,
        [tourId]:
          prevIndex[tourId] === 0 ? imagesLength - 1 : prevIndex[tourId] - 1,
      };
    });
  };

  const totalPosts = tourData.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentExpeditions = tourData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <div>
        <h1 className="my-4 text-center italic">Your purchased tour</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {currentExpeditions.map((tour, index) => (
          <div
            key={index}
            className="w-96 border border-gray-400 rounded mx-2 my-2"
          >
            <div className="flex items-center justify-center">
              <button
                onClick={() => prevSlide(tour._id)}
                className="text-white rounded-l"
              >
                <img
                  className="w-[4vw] h-[3vh] md:w-[3vw] md:h-[4vh] "
                  src="/Images/left-arrow.png"
                  alt="left-arrow"
                />
              </button>
              <div className="overflow-hidden flex-shrink-0">
                {tour.images &&
                  Array.isArray(tour.images) &&
                  tour.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={`https://wandermate-backend.onrender.com/public/images/${image}`}
                      alt={`Slide ${idx + 1}`}
                      className={`md:w-[40vw] md:h-[20vh] lg:w-[14vw] lg:h-[23vh] ${
                        idx === currentIndex[tour._id] ? "" : "hidden"
                      } rounded my-2`}
                    />
                  ))}
              </div>
              <button
                onClick={() => nextSlide(tour._id)}
                className="text-white  rounded-r"
              >
                <img
                  className="w-[4vw] h-[3vh] md:w-[3vw] md:h-[4vh]"
                  src="/Images/right-arrow.png"
                  alt="right-arrow"
                />
              </button>
            </div>
            <div className="flex justify-center items-center px-4">
              <h1 className="text-center mt-4">{tour.name}</h1>
            </div>
            <div>
              <h1 className="text-center mt-4">
                Your Chat room id: {tour.name}
              </h1>
              <div className="mt-2 flex justify-center items-center">
                <a href={tour.link} target="_blank">
                  Click to visit chat portal
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
