import { createContext, ReactNode, useEffect, useState } from "react";

interface DarkthemeContextData {
  theme: string;
  changeTheme: () => void;
}
interface DarkThemeProviderProps {
  children: ReactNode;
}

export const DarkThemeContext = createContext({} as DarkthemeContextData);

export function DarkThemeProvider({ children }: DarkThemeProviderProps) {
  const [isActive, setIsActive] = useState(true);
  const [theme, SetTheme] = useState('#ffffff')

  function changeTheme() {
      setIsActive(false)
    if (isActive === true) {
        SetTheme('#2A2A2A')
    } else {SetTheme('#ffffff')
    setIsActive(true)
}

  }



  

  return (
    <DarkThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </DarkThemeContext.Provider>
  );
}
