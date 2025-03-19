import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { SectionWrapper } from "../hoc";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-14 right-14 gradient-animated-background p-2 rounded-full ${
        isVisible ? "opacity-100 cursor-pointer" : "opacity-0 cursor-default"
      } transition-opacity duration-300`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-white" />
    </div>
  );
};

export default SectionWrapper(BackToTopButton, "");
