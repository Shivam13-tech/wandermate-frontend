/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function Tour() {
  const [tourData, setTourData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState({});
  const [showContent, setShowContent] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8); // Number of items per page
  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8080/api/user/getalltour"
        );
        console.log(response.data);
        setTourData(response.data.Result);
        const initialIndexes = {};
        response.data.Result.forEach((tour) => {
          initialIndexes[tour._id] = 0;
        });
        setCurrentIndex(initialIndexes);
      } catch (error) {
        console.error("Failed to fetch tours:", error);
      }
    };

    fetchTourData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const [userId, setUSERID] = useState("");

  useEffect(() => {
    const uservalue = localStorage.getItem("userId");
    if (uservalue) {
      setUSERID(uservalue);
    }
  }, []);

  const handlepayment = (tourId) => {
    if (!userId) {
      alert("Please login/signup before purchase");
      return;
    }
    fetch("http://127.0.0.1:8080/api/payment/createcheckout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        tourId: tourId,
        items: [{ id: tourId, quantity: 1 }],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
        console.log(url, "url");
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <div>
      <h1 className="my-4 text-center italic">
        Explore Your Next Adventure: Tours & Treks Await!
      </h1>
      {/* <button onClick={handlepayment}>Buy now</button> */}
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
                {tour.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={`http://127.0.0.1:8080/public/images/${image}`}
                    alt={`Slide ${idx + 1}`}
                    className={` md:w-[40vw] md:h-[20vh] lg:w-[14vw] lg:h-[23vh] ${
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
            <div className="flex justify-between items-center px-4">
              <h1>{tour.name}</h1>
              <p>Price: {tour.price}</p>
            </div>

            <p className="mx-2 my-2">{tour.description}</p>
            <div className="flex justify-center items-center">
              <button
                className="rounded bg-green-500 sm:w-[70vw] md:w-[45vw] lg:w-[15vw] sm:h-[5vh] md:h-[5vh] lg:h-[4vh] m-[1vh] text-background shadow-2xl"
                onClick={() => handlepayment(tour._id)}
              >
                Book now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
