import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaDeviantart,
  FaGithub,
} from "react-icons/fa";
import { SiRedbubble } from "react-icons/si";
import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="hidden md:block">
        <header className="grid grid-cols-3 items-center my-8 mx-auto max-w-screen-xl">
          <div className="hidden md:block col-start-1 col-span-1  items-center">
            <nav className="flex items-center space-x-4 ml-4 uppercase font-bold">
              <Link
                href="/"
                className="text-black hover:text-white hover:bg-black p-4"
              >
                HOME
              </Link>
              <Link
                href="/projects"
                className=" ml-4 text-black hover:text-white hover:bg-black p-4"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="ml-4 text-black hover:text-white hover:bg-black p-4"
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="ml-4 text-black hover:text-white hover:bg-black p-4"
              >
                CONTACT
              </Link>
            </nav>
          </div>
          <div className="col-start-2 col-span-1 flex justify-center items-center">
            <Link href="/">
              <div>
                <Image
                  src="/logo/logo.svg"
                  alt="TranMuse logo"
                  width={130}
                  height={130}
                />
              </div>
            </Link>
          </div>
          <div className="col-start-3 col-span-1 flex justify-end items-center">
            <div className="flex justify-center items-center mt-4 text-gray-500">
              <a
                href="https://twitter.com/tranmuse"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 text-black hover:text-white hover:bg-black p-2"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/tranmuse"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 text-black hover:text-white hover:bg-black p-2"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.pinterest.com/tranmuse/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 text-black hover:text-white hover:bg-black p-2"
              >
                <FaPinterest className="w-6 h-6" />
              </a>
              <a
                href="https://www.deviantart.com/tranmuse"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 text-black hover:text-white hover:bg-black p-2"
              >
                <FaDeviantart className="w-6 h-6" />
              </a>
              <a
                href="https://www.github.com/tranmuse"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 text-black hover:text-white hover:bg-black p-2"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.tranmuse.redbubble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 text-black hover:text-white hover:bg-black p-2"
              >
                <SiRedbubble className="w-6 h-6" />
              </a>
            </div>
          </div>
        </header>
      </div>
      <div className="block md:hidden">
        <header className="flex items-center justify-between px-4 py-3 ">
          <div className="flex items-center">
            <Link href="/">
              <div className="mr-4">
                <Image
                  src="/logo/logo3.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="ml-4">
              <button onClick={handleExpand}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {expanded ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </header>
        <div
          className={`${
            expanded ? "flex" : "hidden"
          } flex-col items-end justify-end text-right mr-4`}
        >
          <Link href="/">
            <div className="my-2 font-semibold text-lg">Home</div>
          </Link>
          <Link href="/contact">
            <div className="my-2 font-semibold text-lg">Contact</div>
          </Link>
          <Link href="/about">
            <div className="my-2 font-semibold text-lg">About</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
