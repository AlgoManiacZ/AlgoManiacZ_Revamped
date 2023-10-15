import { useState, useEffect } from 'react';
import { RiArrowUpCircleFill } from 'react-icons/ri';
import { animateScroll as scroll } from 'react-scroll';

const Layout = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (window.scrollY > 0) {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    } else {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div>
      {children}
      <div
        className={`scrollToTop ${showScroll ? 'show' : 'hide'}`}
        onClick={scrollTop}
      >
        <RiArrowUpCircleFill size="2.5rem" className="mb-2 text-orange hover:text-hoverOrange cursor-pointer test" />
      </div>
    </div>
  );
};

export default Layout;
