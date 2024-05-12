import React from "react";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";



const useStyles: any = makeStyles((theme: any) => ({
  menuBtn: {
    position: "fixed",
    top: "5px",
    right: "5px",
    zIndex: 900,
    "&:hover": {
      opacity: 0.5,
    },
  },
}));

const MenuBtn = ({ onClick, isMobile, open }: any) => {
  const classes = useStyles();
  return (
    <div>
      {isMobile && (
        <Fab
          size="small"
          color="primary"
          aria-label="menu"
          className={classes.menuBtn}
          onClick={onClick}
          style={{ display: open ? 'none' : undefined }}
        >
          <MenuIcon />
        </Fab>
      )}
    </div>
  );
};

export default MenuBtn;
