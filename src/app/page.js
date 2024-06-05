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
      {/* <div>
        <Image width={350} height={70} src="/Images/boat.png" alt="about" />
        <Image width={350} height={70} src="/Images/camp.png" alt="about" />
      </div>
      <div className="flex">
        <div>
          <h1>Connect with fellow travelers </h1>
          <p>
            With Wandermate, you can easily book a variety of thrilling tours
            and treks that cater to your adventurous spirit. But we dont stop
            there. We understand that the best journeys are shared, which is why
            we offer unique group chat features for each tour. Connect with
            fellow travelers before you even pack your bags, share tips, plan
            activities, and build lasting friendships that extend beyond the
            trip.
          </p>
        </div>
        <div>
          <Image width={350} height={70} src="/Images/about.jpg" alt="about" />
        </div>
      </div>
      <div>
        <div>
          <h1>Our features</h1>
          <Image width={350} height={70} src="/Images/about.jpg" alt="about" />
        </div>
        <div>
          <div>
            <div>
              <Image
                width={350}
                height={70}
                src="/Images/about.jpg"
                alt="about"
              />
              <h1>Our features</h1>
            </div>
            <div>
              <Image
                width={350}
                height={70}
                src="/Images/about.jpg"
                alt="about"
              />
              <h1>Our features</h1>
            </div>
          </div>
          <div>
            <div>
              <Image
                width={350}
                height={70}
                src="/Images/about.jpg"
                alt="about"
              />
              <h1>Our features</h1>
            </div>
            <div>
              <Image
                width={350}
                height={70}
                src="/Images/about.jpg"
                alt="about"
              />
              <h1>Our features</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center ">
          <div className="flex justify-center mt-4">
            <div className="mx-2 my-2">
              <Image
                width={350}
                height={70}
                src="/Images/about.jpg"
                alt="about"
              />
            </div>
            <div className="mx-2 my-2">
              <Image
                width={350}
                height={70}
                src="/Images/about.jpg"
                alt="about"
              />
            </div>
            <div className="mx-2 my-2">
              <Image
                width={350}
                height={70}
                src="/Images/about.jpg"
                alt="about"
              />
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="mx-2 my-2">
              <Image
                width={350}
                height={70}
                src="/Images/about.jpg"
                alt="about"
              />
            </div>
            <div className="mx-2 my-2">
              <Image
                width={350}
                height={70}
                src="/Images/about.jpg"
                alt="about"
              />
            </div>
            <div className="mx-2 my-2">
              <Image
                width={350}
                height={70}
                src="/Images/about.jpg"
                alt="about"
              />
            </div>
          </div>
          <button className="my-2">More Destinations</button>
        </div>
      </div> */}
    </div>
  );
}
