import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex">
        <div>
          <h1>About</h1>
          <p>Wandermate</p>
        </div>
        <div>
          <p>
            Welcome to Wandermate, your ultimate travel companion! Whether you
            are an adventurer looking to explore new destinations or someone
            eager to connect with like-minded travelers, our platform is
            designed to enhance your travel experience from start to finish.
          </p>
          <p>
            At Wandermate, we believe that travel is more than just visiting new
            places; it is about the people you meet and the memories you create
            along the way. Thats why we have created a unique platform where you
            can book exciting tours and treks, join group chats with fellow
            travelers before your trip, and forge lasting friendships.
          </p>
        </div>
      </div>
      <div>
        <Image width={250} height={70} src="/Images/about.jpg" alt="about" />
      </div>
      <div className="flex">
        <div>
          <h1>Why</h1>
          <p>Wandermate</p>
        </div>
        <div>
          <p>
            Our community-driven approach ensures that you are never alone on
            your journey. Share tips, plan activities, and get to know your
            travel companions before you even set foot on your adventure. With
            wandermate, you are not just booking a trip; you are joining a
            community.
          </p>
          <p>
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
