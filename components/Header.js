import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-center">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <Link href="/">
            <Image
              src="/logo/logo1.png"
              alt="TranMuse logo"
              width={70}
              height={70}
            />
          </Link>
          <nav className="flex items-center space-x-4 mt-4">
            <Link
              href="/"
              className="text-gray-500 hover:text-black hover:font-bold"
            >
              Home
            </Link>
            <div className="border-l border-gray-400 h-4"></div>
            <Link
              href="/about"
              className="text-gray-500 hover:text-black hover:font-bold"
            >
              About
            </Link>
            <div className="border-l border-gray-400 h-4"></div>
            <Link
              href="/contact"
              className="text-gray-500 hover:text-black hover:font-bold"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
