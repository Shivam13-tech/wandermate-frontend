"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="bg-white w-[92vw] mx-[4vw] h-[5vh] mt-[4vh] flex justify-evenly items-center">
      <div className="hidden md:flex md:justify-center md:items-center">
        <Image src="/Images/Logo.jpg" width={100} height={100} alt="logo" />
        <h1>Wandermate</h1>
      </div>
      <div className="hidden md:flex">
        <Link
          className="px-[3vw] hover:cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in-out"
          href="/"
        >
          Home
        </Link>
        <Link
          className="px-[3vw] hover:cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in-out"
          href="/about"
        >
          About
        </Link>
        <Link
          className="px-[3vw] hover:cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in-out"
          href="/Tours"
        >
          Tours
        </Link>
        <Link
          className="px-[3vw] hover:cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in-out"
          href="/booking"
        >
          Booking
        </Link>
      </div>
      <div className="hidden md:flex hover:cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in-out">
        <Link href="/Join">Join us</Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleDropdown}
          className="flex justify-evenly items-center"
        >
          <h1>Wandermate</h1>
          <Image
            className="ml-52"
            src={
              isDropdownOpen
                ? "/Images/nav-icon-close.png"
                : "/Images/nav-icon-open.png"
            }
            alt={
              isDropdownOpen ? "nav-icon-close-image" : "nav-icon-open-image"
            }
            width={30}
            height={50}
          />
        </button>
        {isDropdownOpen && (
          <div className="z-10 w-[92vw] flex flex-col justify-center items-center absolute top-20 left-4 bg-white border rounded-md shadow-md p-2 space-y-2">
            <Link onClick={toggleDropdown} className="main-links" href="/">
              Home
            </Link>
            <Link onClick={toggleDropdown} className="main-links" href="/">
              About
            </Link>
            <Link onClick={toggleDropdown} className="main-links" href="/">
              Tour
            </Link>
            <Link onClick={toggleDropdown} className="main-links" href="/">
              Booking
            </Link>
            <Link onClick={toggleDropdown} href="/Join">
              Join us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
