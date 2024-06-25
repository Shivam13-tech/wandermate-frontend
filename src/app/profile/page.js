"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState({
    username: "",
    password: "",
    link: "",
  });
  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      setName(name);
    }
    const email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
    }
  }, []);

  const BecomeGuidefnc = async () => {
    try {
      try {
        const response = await axios.post(
          // "https://wandermate-backend.onrender.com/api/login",
          "http://127.0.0.1:8080/api/guide/createguide"
        );
        console.log(response, "response");
        setResponse({
          username: response.data.Result.userName,
          password: response.data.password,
          link: response.data.link,
        });
      } catch (error) {
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row  justify-center items-center h-[90vh]">
      <div>
        <Image
          src="/Images/profile-boy.png"
          alt="profile-boy-image"
          width={300}
          height={100}
        />
      </div>
      <div>
        <h1 className="text-center py-2">{`Hello, ${name}`}</h1>
        <h1 className="text-center py-2">{`Email: ${email}`}</h1>
        <div className="flex justify-center items-center">
          <button
            className="rounded bg-green-500 sm:w-[70vw] md:w-[45vw] lg:w-[15vw] sm:h-[5vh] md:h-[5vh] lg:h-[4vh] m-[1vh] text-background shadow-2xl"
            onClick={BecomeGuidefnc}
          >
            Become guide
          </button>
        </div>
        <div className="border border-gray-400 rounded p-4 mt-2">
          <h1>{`Username: ${response.username}`}</h1>
          <h1>{`Password: ${response.password}`}</h1>
          <div className="mt-2">
            <a href={`${response.link}`} target="_blank">
              Click to visit admin portal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
