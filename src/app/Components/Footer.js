import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-4 flex flex-col md:flex-row  p-14 md:justify-around justify-center items-center ">
      <div>
        <Image src="/Images/Logo.jpg" width={100} height={100} alt="logo" />
        <h1>Wandermate</h1>
      </div>
      <div className="hidden lg:flex flex-col my-4 md:my-0">
        <Link className="px-[3vw] my-2 " href="/">
          Home
        </Link>
        <Link className="px-[3vw] my-2 hover:cursor-pointer " href="/about">
          About
        </Link>
        <Link className="px-[3vw] my-2 hover:cursor-pointer " href="/Tours">
          Tours
        </Link>
        <Link className="px-[3vw] my-2 hover:cursor-pointer " href="/booking">
          Booking
        </Link>
      </div>
      <div className="my-6 md:my-0">
        <h1 className="text-center my-4">Contact</h1>
        <p>+12 1213 1221</p>
        <p>
          1234 Maplewood Drive
          <br /> Sunnyvale,
          <br /> CA 94086 USA
        </p>
      </div>
      <div className="flex flex-col gap-5 ">
        <h1 className="text-center my-4">Socials</h1>
        <ul className="regular-14 flex gap-4 text-gray-30">
          <Image src="/Images/facebook.svg" alt="logo" width={24} height={24} />
          <Image
            src="/Images/instagram.svg"
            alt="logo"
            width={24}
            height={24}
          />
          <Image src="/Images/twitter.svg" alt="logo" width={24} height={24} />
          <Image
            src="/Images/wordpress.svg"
            alt="logo"
            width={24}
            height={24}
          />
          <Image src="/Images/youtube.svg" alt="logo" width={24} height={24} />
        </ul>
      </div>
    </div>
  );
}
