import React, { createContext, useContext, useState } from "react";
import { useToggle } from "react-use";
import HeroBanner from "../components/HeroBanner";

const ThemeContext = createContext({} as any);

export const useThemes = () => useContext(ThemeContext);

function HomePage() {
  const [openEdit, setOpenEditor] = useToggle(false);
  const [config, setConfig] = useState([
    {
      type: "text",
      link_to: "sub_title",
    },
  ]);
  return (
    <ThemeContext.Provider value={{ openEdit, setOpenEditor }}>
      <div className="flex flex-col gap-y-12">
        <HeroBanner />
      </div>
      {
        openEdit ? <div>
            
        </div> : null
      }
    </ThemeContext.Provider>
  );
}

export default HomePage;
