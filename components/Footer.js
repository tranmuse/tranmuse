import {
  FaTwitter,
  FaInstagram,
  FaDeviantart,
  FaGithub,
  FaPinterest,
} from "react-icons/fa";
import { SiRedbubble } from "react-icons/si";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-100 py-4 flex-shrink-0">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-center items-center mt-2 uppercase">
          <Link href="/">
            <div className="hover:text-white hover:bg-black p-2 mx-2">Home</div>
          </Link>
          <Link href="/about">
            <div className=" hover:text-white hover:bg-black p-2 mx-2">
              About
            </div>
          </Link>
          <Link href="/contact">
            <div className=" hover:text-white hover:bg-black p-2 mx-2">
              Contact
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center text-center mt-2">
          <a
            href="https://twitter.com/tranmuse"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 p-2 hover:text-white hover:bg-black"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/tranmuse"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 p-2 hover:text-white hover:bg-black"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.pinterest.com/tranmuse/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 p-2 hover:text-white hover:bg-black"
          >
            <FaPinterest className="w-6 h-6" />
          </a>
          <a
            href="https://www.deviantart.com/tranmuse"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 p-2 hover:text-white hover:bg-black"
          >
            <FaDeviantart className="w-6 h-6" />
          </a>
          <a
            href="https://www.github.com/tranmuse"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 p-2 hover:text-white hover:bg-black"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.tranmuse.redbubble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 p-2 hover:text-white hover:bg-black"
          >
            <SiRedbubble className="w-6 h-6" />
          </a>
        </div>
      </div>
      <p className="text-center my-4">© 2023 TranMuse. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
