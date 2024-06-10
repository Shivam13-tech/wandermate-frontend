import Image from "next/image";

export default function Profile() {
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
        <h1 className="text-center py-2">Hello, Random User</h1>
        <h1 className="text-center py-2">Email: randomuser12@gmail.com</h1>
        <div className="flex">
          <input
            className="rounded sm:w-[70vw] md:w-[45vw] lg:w-[15vw] sm:h-[5vh] md:h-[5vh] lg:h-[4vh]  sm:m-[0.9vh] lg:m-[0.8vh] lg:m-[0.5vh] sm:p-[1.8vw] lg:p-[0.7vw] lg:p-[0.5vw] bg-inputBoxColor outline-none focus:shadow-outline-blue focus:border-blue-500 focus:ring focus:ring-blue-400"
            placeholder={"Update email"}
            name={"email"}
            type="text"
          />
          <button className="rounded bg-buttonColor sm:w-[20vw] md:w-[15vw] lg:w-[5vw] sm:h-[5vh] md:h-[5vh] lg:h-[4vh] m-[1vh] text-background shadow-2xl">
            {"Update"}
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button className="rounded bg-green-500 sm:w-[70vw] md:w-[45vw] lg:w-[15vw] sm:h-[5vh] md:h-[5vh] lg:h-[4vh] m-[1vh] text-background shadow-2xl">
            Become guide
          </button>
        </div>
      </div>
    </div>
  );
}
