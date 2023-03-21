import { FaTwitter, FaInstagram, FaDeviantart, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 flex-shrink-0 mt-4">
      <div className="max-w-screen-lg mx-auto px-4 ">
        <p className="text-center">© 2023 TranMuse. All rights reserved.</p>
        <div className="flex justify-center items-center mt-4">
          <a
            href="https://twitter.com/tranmuse"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/tranmuse"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.deviantart.com/tranmuse"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaDeviantart className="w-6 h-6" />
          </a>
          <a
            href="https://www.github.com/tranmuse"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
