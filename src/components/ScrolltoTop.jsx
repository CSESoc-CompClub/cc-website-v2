// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";


//Code that scrolls to the top of the page when using a link in react router dom
//Taken from this lovely person here: https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;