import React, { createContext, useContext, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState('inicio');

  const togglePage = async (newPage) => {

    if (window.scrollY !== 0) {
      handleScrollToTop();
      setTimeout(() => setPage(newPage), 1500);
    } else {
      setPage(newPage)
    }

  };

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 1500,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <PageContext.Provider value={{ page, togglePage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  return useContext(PageContext);
};
