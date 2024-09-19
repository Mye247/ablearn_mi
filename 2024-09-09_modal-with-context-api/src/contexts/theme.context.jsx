import Backdrop from "../components/Backdrop/Backdrop";
import Modal from "../components/Modal/Modal";

import { createContext, useContext, useState } from "react";

const initialValue = {};

// 1. 만든다
const ThemeContext = createContext(initialValue);

//2. 사용한다
export const useTheme = () => useContext(ThemeContext);

//3. 범위를 지정해 값을 내려준다
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log(theme);
  };

  const value = {
    theme, // 지금 값
    toggleTheme, // 작동용
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
