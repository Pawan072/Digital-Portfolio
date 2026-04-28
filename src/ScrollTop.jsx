import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // useLocation se humein current path ka pata chalta hai
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi pathname change hoga, page top par scroll ho jayega
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "smooth" bhi kar sakte ho, par "instant" navigation ke liye better hai
    });
  }, [pathname]);

  return null; // Ye component kuch render nahi karta, bas logic handle karta hai
};

export default ScrollToTop;