/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly align-center mt-14">
        <div>
          <h1 className="text-center text-2xl md:text-4xl">About</h1>
          <br className="hidden md:block" />
          <p className="text-center text-4xl md:text-6xl mb-4">Wandermate</p>
        </div>
        <div>
          <p className="w-[90vw] mb-2 text-start mx-auto md:w-[50vw]">
            Welcome to Wandermate, your ultimate travel companion! Whether you
            are an adventurer looking to explore new destinations or someone
            eager to connect with like-minded travelers, our platform is
            designed to enhance your travel experience from start to finish.
          </p>
          <p className="w-[90vw] mb-2 text-start mx-auto md:w-[50vw]">
            At Wandermate, we believe that travel is more than just visiting new
            places; it is about the people you meet and the memories you create
            along the way. Thats why we have created a unique platform where you
            can book exciting tours and treks, join group chats with fellow
            travelers before your trip, and forge lasting friendships.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-[60vw] md:flex-row md:w-[15vw] mx-auto my-6">
        <img src="/Images/login-boy.png" alt="about1" />
        <img src="/Images/auth-bg.png" alt="about2" />
      </div>
      <div className="flex flex-col md:flex-row justify-evenly align-center mt-4 mb-10">
        <div>
          <h1 className="text-center text-2xl md:text-4xl">Why</h1>
          <br className="hidden md:block" />
          <p className="text-center text-4xl md:text-6xl mb-4">Wandermate</p>
        </div>
        <div>
          <p className="w-[90vw] mb-2 text-start mx-auto md:w-[50vw] ">
            Our community-driven approach ensures that you are never alone on
            your journey. Share tips, plan activities, and get to know your
            travel companions before you even set foot on your adventure. With
            wandermate, you are not just booking a trip; you are joining a
            community.
          </p>
          <p className="w-[90vw] mb-2 text-start mx-auto md:w-[50vw]">
            For those with a passion for leading and organizing, our platform
            also offers the opportunity to become a tour or trek guide. Manage
            your own trips, curate unforgettable experiences, and help others
            discover the beauty of the world.
          </p>
        </div>
      </div>
    </div>
  );
}
