import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Layout = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto max-w-screen-xl">
        {children}
      </main>
      <Footer />
      {showScroll && (
        <div className="fixed bottom-8 right-8 cursor-pointer">
          <FaArrowAltCircleUp
            className="text-black text-4xl"
            onClick={scrollTop}
          />
        </div>
      )}
    </div>
  );
};

export default Layout;
