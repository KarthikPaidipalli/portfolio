
import React, { createContext, useContext, useState } from 'react';


interface BackgroundColorContextType {
  darkMode: boolean;
  toggleBackground: () => void;
  bgColor: string;
  textColor: string;
}


const defaultContextValue: BackgroundColorContextType = {
  darkMode: true,
  toggleBackground: () => {},
  bgColor: 'bg-gray-900',
  textColor: 'text-white',
};

// 3. Create the context with the default value
const BackgroundColorContext = createContext<BackgroundColorContextType>(defaultContextValue);

// 4. Provider component
export const BackgroundColorProvider = ({ children }:any) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleBackground = () => setDarkMode((prev) => !prev);

  const bgColor = darkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-black';

  return (
    <BackgroundColorContext.Provider
      value={{ darkMode, toggleBackground, bgColor, textColor }}
    >
      {children}
    </BackgroundColorContext.Provider>
  );
};


export const useBackgroundColor = () => useContext(BackgroundColorContext);
