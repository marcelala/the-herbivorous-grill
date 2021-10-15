//npm packages
import { useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";
//scrolls to top when navigating
interface iProps {
  children: ReactNode[];
}

const ScrollToTop = ({ children }: iProps) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
