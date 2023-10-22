import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import lightIco from "../images/favicons/light.ico";
import darkIco from "../images/favicons/dark.ico";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = Cookies.get('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;

    setIsDarkMode(newDarkMode);

    Cookies.set('darkMode', newDarkMode, { expires: 365 });
  };

  useEffect(() => {

    const changeFavicon = () => {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = isDarkMode ? darkIco : lightIco;
      document.head.appendChild(link);
    };

    changeFavicon();

  });

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
