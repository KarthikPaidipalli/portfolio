import { createContext, useContext, useState } from 'react';

interface BackgroundColorContextType {
  darkMode: boolean;
  toggleBackground: () => void;
  bgColor: string;
  textColor: string;
}

const defaultContextValue: BackgroundColorContextType = {
  darkMode: false, // default light mode
  toggleBackground: () => {},
  bgColor: 'bg-white',
  textColor: 'text-black',
};

const BackgroundColorContext = createContext<BackgroundColorContextType>(defaultContextValue);

export const BackgroundColorProvider = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState(false); // false = light mode by default

  const toggleBackground = () => setDarkMode((prev) => !prev);

  const bgColor = darkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-black';

  return (
    <BackgroundColorContext.Provider value={{ darkMode, toggleBackground, bgColor, textColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );
};

export const useBackgroundColor = () => useContext(BackgroundColorContext);
