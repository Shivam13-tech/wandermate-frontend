import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-14">
        <div>
          <h1 className="text-2xl md:text-4xl text-center md:text-start">
            Connect with fellow travelers{" "}
          </h1>
          <h1 className="text-center my-4 text-2xl md:text-4xl mx-4 md:mx-0">
            We understand that the best journeys are shared
          </h1>
          <p className="w-[90vw] mb-2 mx-auto  md:w-[40vw] md:mx-0">
            Welcome to Wandermate, your ultimate gateway to unforgettable
            adventures! At Wandermate, we believe that travel is not just about
            the destinations but the experiences and connections you make along
            the way. Our mission is to transform every journey into an exciting
            narrative of exploration, friendship, and discovery.
          </p>
          <div className="flex justify-center items-center">
            <button className="">See Destinations</button>
          </div>
        </div>
        <div className="w-[90vw] md:w-[25vw]">
          <img src="/Images/map.png" alt="map" />
        </div>
      </div>
      <div className="relative mb-10 md:mb-60 flex justify-center items-center">
        <div className="w-[90vw] md:w-[80vw]">
          <img src="/Images/boat.png" alt="boat" />
        </div>
        <div className="hidden absolute top-60 mt-20 left-20 w-[90vw] md:w-[30vw] md:block">
          <img src="/Images/camp.png" alt="camp" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-14">
        <div>
          <h1 className="text-2xl  my-4 md:text-4xl text-center md:text-start">
            Connect with fellow travelers{" "}
          </h1>
          <p className="w-[90vw] mb-2 mx-auto  md:w-[40vw] md:mx-0">
            With Wandermate, you can easily book a variety of thrilling tours
            and treks that cater to your adventurous spirit. But we dont stop
            there. We understand that the best journeys are shared, which is why
            we offer unique group chat features for each tour. Connect with
            fellow travelers before you even pack your bags, share tips, plan
            activities, and build lasting friendships that extend beyond the
            trip.
          </p>
          <p className="w-[90vw] mb-2 mx-auto  md:w-[40vw] md:mx-0">
            Our community-driven approach ensures that you are never alone on
            your journey. Share tips, plan activities, and get to know your
            travel companions before you even set foot on your adventure. With
            wandermate, you are not just booking a trip; you are joining a
            community.
          </p>
        </div>
        <div className="w-[90vw] md:w-[35vw] md:ml-12 ">
          <img src="/Images/Group.jpeg" alt="group" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-12">
        <div className="flex flex-col md:flex-row justify-center mt-4">
          <div className="w-[90vw] md:w-[20vw] mx-2 my-2 ">
            <img src="/Images/travel1.jpg" alt="travel1" />
          </div>
          <div className="w-[90vw] md:w-[20vw] mx-2 my-2 ">
            <img src="/Images/travel2.jpg" alt="travel2" />
          </div>
          <div className="w-[90vw] md:w-[20vw] mx-2 my-2 ">
            <img src="/Images/about.jpg" alt="travel3" />
          </div>
        </div>
        <div className="hidden flex-col md:flex-row md:flex justify-center mt-2 ">
          <div className="w-[90vw] md:w-[20vw] mx-2 my-2 ">
            <img src="/Images/travel3.jpg" alt="travel4" />
          </div>
          <div className="w-[90vw] md:w-[20vw] mx-2 my-2 ">
            <img src="/Images/travel5.jpg" alt="travel5" />
          </div>
          <div className="w-[90vw] md:w-[20vw] mx-2 my-2 ">
            <img src="/Images/travel6.jpg" alt="travel6" />
          </div>
        </div>
        <div>
          <button className="my-2 mx-auto">More Destinations</button>
        </div>
      </div>
    </div>
  );
}
