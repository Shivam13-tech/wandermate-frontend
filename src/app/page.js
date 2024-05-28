import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <div>
          <Image width={350} height={70} src="/Images/about.jpg" alt="about" />
        </div>
        <div>
          <p>
            Welcome to Wandermate, your ultimate gateway to unforgettable
            adventures! At Wandermate, we believe that travel is not just about
            the destinations but the experiences and connections you make along
            the way. Our mission is to transform every journey into an exciting
            narrative of exploration, friendship, and discovery.
          </p>
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
    </div>
  );
}
