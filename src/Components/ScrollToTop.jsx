import { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  };

  const toggleVisible = () => {
    if (typeof window !== "undefined") {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisible);

      return () => {
        window.removeEventListener("scroll", toggleVisible);
      };
    }
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <BsFillArrowUpCircleFill size={30} className="text-purple-400" />
    </button>
  );
};

export default ScrollToTop;
