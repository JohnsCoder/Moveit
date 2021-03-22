import { createContext, ReactNode, useState } from "react";

interface DarkthemeContextData {
}
interface DarkThemeProviderProps {
    children: ReactNode;
}

export const DarkThemeContext = createContext({} as DarkthemeContextData)

export function DarkthemeProvider({ children }: DarkThemeProviderProps) {

    const [checked, setChecked] = useState(false);


    return (
        <DarkThemeContext.Provider value={{
        }}>
            {children}

        </DarkThemeContext.Provider>

    )
}