import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-4 flex bg-black p-14 justify-around ">
      <div>
        <p className="text-white">Image logo will come</p>
        <h1 className="text-white">Wandermate</h1>
      </div>
      <div className="flex flex-col">
        <Link className="px-[3vw] text-white" href="/">
          Home
        </Link>
        <Link
          className="px-[3vw] hover:cursor-pointer text-white"
          href="/about"
        >
          About
        </Link>
        <Link className="px-[3vw] hover:cursor-pointer text-white" href="/tour">
          Tour
        </Link>
        <Link
          className="px-[3vw] hover:cursor-pointer text-white"
          href="/booking"
        >
          Booking
        </Link>
      </div>
      <div>
        <h1 className="text-white">Contact</h1>
        <p className="text-white">+12 1213 1221</p>
        <p className="text-white">
          1234 Maplewood Drive
          <br /> Sunnyvale,
          <br /> CA 94086 USA
        </p>
      </div>
    </div>
  );
}
