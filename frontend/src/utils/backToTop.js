import React, { useState } from "react";
import "../App.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

function BackToTop() {
  const [showScroll, setShowScroll] = useState(false);

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

  window.addEventListener("scroll", checkScrollTop);

  return (
    <ArrowUpwardIcon
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    />
  );
}

export default BackToTop;
