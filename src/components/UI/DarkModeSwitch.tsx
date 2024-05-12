import React from "react";
import { IconButton } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";


const DarkModeSwitch = ({ darkMode, setDarkmode }: any) => {
  return (
    <IconButton onClick={() => setDarkmode(!darkMode)}>
      {!darkMode ? (
        <WbSunnyIcon color={darkMode ? "inherit" : "primary"} />
      ) : (
        <Brightness3Icon color={darkMode ? "primary" : "inherit"} />
      )}
    </IconButton>
  );
};

export default DarkModeSwitch;
